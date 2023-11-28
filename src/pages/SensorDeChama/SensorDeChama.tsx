import { Text, View } from "react-native"
import { LottieFile } from "../../objects"
import styles from './styles'
import {useEffect, useState} from 'react';
import { api } from "../../services/api";

interface Leitura {
  valorChama: string; 
}

export const SensorDeChama = () => {
  const [leituraDisp1, setLeituraDisp1] = useState<Leitura[]>([]);
  const [leituraDisp2, setLeituraDisp2] = useState<Leitura[]>([]);
  const [leituraDisp3, setLeituraDisp3] = useState<Leitura[]>([]);

  const containerExiste = {
    backgroundColor: leituraDisp1[0]?.valorChama == 'C' ? 'red' : leituraDisp2[0]?.valorChama == 'C' ? 'red' : leituraDisp3[0]?.valorChama == 'C' ? 'red' : 'green',
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 25,
    marginTop: 10
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
        <Text style={styles.textExiste}>Existe Chama?</Text>
        <View style={containerExiste}>
          <Text style={styles.textExiste}>{leituraDisp1[0]?.valorChama == 'C' ? 'FOGO DETECTADO!!' : leituraDisp2[0]?.valorChama == 'C' ? 'FOGO DETECTADO!!' : leituraDisp3[0]?.valorChama == 'C' ? 'FOGO DETECTADO!!' : 'SEM FOGO'}</Text>
        </View>
      </View>
      <View style={{top: -40, right: 25}}>
        <LottieFile variant="fire" width={600} height={600}/>
      </View>
    </>
  )
}