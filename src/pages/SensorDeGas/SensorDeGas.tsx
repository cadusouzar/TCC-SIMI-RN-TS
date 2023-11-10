import { Text, View } from "react-native"
import { ButtonOpacity, LottieFile } from "../../objects"
import styles from './styles'

export const SensorDeGas = () => {
  const containerExiste = {
    backgroundColor: 'green',
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 25,
    marginTop: 10
  }
  return(
    <>
      <View style={styles.containerSensor}>
        <Text style={styles.textExiste}>Valor de gás medido:</Text>
        <View style={containerExiste}>
          <Text style={styles.textExiste}>300m³</Text>
        </View>
      </View>
      <View style={styles.containerLottie}>
        <LottieFile variant="gas" width={200} height={245}/>
      </View>
      <View style={styles.containerButton}>
        <ButtonOpacity txtButton="Ir para sensor de chamas" fontSize={16} width={200} handlePress={() => {}}/>
      </View>
    </>
  )
}