import { Text, Image, View, Dimensions, ScrollView } from "react-native";
import {useEffect, useState} from 'react';
import { api } from "../../services/api";
import { ButtonOpacity } from "../../objects";
import { useNavigation } from "@react-navigation/native"; 
import styles from './styles'

type PropsMapaFuga = {
  existeFogoDisp1: string
  existeFogoDisp2: string
  existeFogoDisp3: string
}

interface Leitura {
  valorChama: string; 
}

export const MapaFuga:React.FC<PropsMapaFuga> = ({existeFogoDisp1,existeFogoDisp2,existeFogoDisp3}) => {
  const [leituraDisp1, setLeituraDisp1] = useState<Leitura[]>([]);
  const [leituraDisp2, setLeituraDisp2] = useState<Leitura[]>([]);
  const [leituraDisp3, setLeituraDisp3] = useState<Leitura[]>([]);
  const navigation = useNavigation(); 

  const textPerigo = {
    color: leituraDisp1[0]?.valorChama == 'C' ? 'yellow' : leituraDisp2[0]?.valorChama == 'C' ? 'yellow' : leituraDisp3[0]?.valorChama == 'C' ? 'yellow' : 'green',
    alignSelf: 'center',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 24
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

  const goToSalas = () => {
    //@ts-ignore
    navigation.navigate('Salas');
  }

  return (
    <>
      {
        leituraDisp1[0]?.valorChama === 'C' ? (
          <View>            
            <Image style={styles.alertaFoto} source={require('../../images/ImgAlerta.png')} />
            <Text style={textPerigo}>Você está em perigo!</Text>
          </View>
        ) : leituraDisp2[0]?.valorChama === 'C' ? (
          <View>            
            <Image style={styles.alertaFoto} source={require('../../images/ImgAlerta.png')} />
            <Text style={textPerigo}>Você está em perigo!</Text>
          </View>
        ) : leituraDisp3[0]?.valorChama === 'C' ? (
          <View>            
            <Image style={styles.alertaFoto} source={require('../../images/ImgAlerta.png')} />
            <Text style={textPerigo}>Você está em perigo!</Text>
          </View>
        ) : (
          <View>
            <Image style={styles.alertaFoto} source={require('../../images/ImgSeguro.png')} />
            <Text style={textPerigo}>Você está seguro!</Text>
          </View>
        )
      }
      <View style={{alignSelf: 'center'}}>
        <ButtonOpacity txtButton="Selecione a sala que você está" handlePress={goToSalas} fontSize={20} width={200}/>
      </View>
    </>
  );
}