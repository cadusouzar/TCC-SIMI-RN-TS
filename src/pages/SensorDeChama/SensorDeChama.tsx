import { Text, View } from "react-native"
import { LottieFile } from "../../objects"
import styles from './styles'
import {useEffect, useState} from 'react';
import { api } from "../../services/api";

interface Leitura {
  ValorGas: string; 
}

export const SensorDeChama = () => {
  const [leituras, setLeituras] = useState<Leitura[]>([]);

  const containerExiste = {
    backgroundColor: 'green',
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 25,
    marginTop: 10
  }
  useEffect(() => {
    api.get(`/Leitura/ListarLeituras?idDispositivo=${1}`)
      .then((resp) => {
        setLeituras(resp.data)
      })
      .catch((err) => console.log(err));
  }, []);

  return(
    <>
      <View style={styles.containerSensor}>
        <Text style={styles.textExiste}>Existe Chama?</Text>
        <View style={containerExiste}>
          <Text style={styles.textExiste}>{leituras[0]?.ValorGas}</Text>
        </View>
      </View>
      <View style={{top: -40, right: 25}}>
        <LottieFile variant="fire" width={600} height={600}/>
      </View>
    </>
  )
}