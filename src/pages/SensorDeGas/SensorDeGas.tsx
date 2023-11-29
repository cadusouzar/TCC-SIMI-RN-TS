import { Text, View } from "react-native"
import { ButtonOpacity } from "../../objects/ButtonOpacity"
import { LottieFile } from "../../objects/LottieFile"
import styles from './styles'
import {useEffect, useState} from 'react';
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native"; 

interface Leitura {
  valorGas: string; 
  idDispositivo: string;
}

export const SensorDeGas = () => {
  const [leituraDisp1, setLeituraDisp1] = useState<Leitura[]>([]);
  const [leituraDisp2, setLeituraDisp2] = useState<Leitura[]>([]);
  const [leituraDisp3, setLeituraDisp3] = useState<Leitura[]>([]);
  const navigation = useNavigation(); 

  const containerExiste = {
    backgroundColor: 'green',
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 25,
    marginTop: 25
  }

  useEffect(() => {
    const fetchDataDisp1 = () => {
      api.get(`/Leitura/ListarLeituras?idDispositivo=${1}`)
        .then((resp) => {
          var ultimoValor = resp.data.length - 1;
          setLeituraDisp1([resp.data[ultimoValor]]);
        })
        .catch(err => console.log(err));
    };

    const fetchDataDisp2 = () => {
      api.get(`/Leitura/ListarLeituras?idDispositivo=${2}`)
        .then((resp) => {
          var ultimoValor = resp.data.length - 1;
          setLeituraDisp2([resp.data[ultimoValor]]);
        })
        .catch(err => console.log(err));
    };

    const fetchDataDisp3 = () => {
      api.get(`/Leitura/ListarLeituras?idDispositivo=${3}`)
        .then((resp) => {
          var ultimoValor = resp.data.length - 1;
          setLeituraDisp3([resp.data[ultimoValor]]);
        })
        .catch(err => console.log(err));
    };
  
    fetchDataDisp1();
    fetchDataDisp2();
    fetchDataDisp3();
  
    const intervalDisp1 = setInterval(fetchDataDisp1, 3000);
    const intervalDisp2 = setInterval(fetchDataDisp2, 3000);
    const intervalDisp3 = setInterval(fetchDataDisp3, 3000);
    
    return () => {
      clearInterval(intervalDisp1);
      clearInterval(intervalDisp2);
      clearInterval(intervalDisp3);
    };
  }, []);

  return(
    <>
      <View style={styles.containerSensor}>
        <Text style={styles.textExiste}>Valor de gás medido:</Text>
        <View style={containerExiste}>
          <Text style={styles.textExiste}>Dispositivo: <Text style={{color: 'red'}}>{leituraDisp1[0]?.idDispositivo}</Text> Valor: <Text style={{color: 'red'}}>{leituraDisp1[0]?.valorGas}</Text></Text>
        </View>
        <View style={containerExiste}>
          <Text style={styles.textExiste}>Dispositivo: <Text style={{color: 'red'}}>{leituraDisp2[0]?.idDispositivo}</Text> Valor: <Text style={{color: 'red'}}>{leituraDisp2[0]?.valorGas}</Text></Text>
        </View>
        <View style={containerExiste}>
          <Text style={styles.textExiste}>Dispositivo: <Text style={{color: 'red'}}>{leituraDisp3[0]?.idDispositivo}</Text> Valor: <Text style={{color: 'red'}}>{leituraDisp3[0]?.valorGas}</Text></Text>
        </View>
      </View>
    </>
  )
}