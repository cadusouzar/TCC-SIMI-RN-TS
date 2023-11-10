import { Text, View } from "react-native"
import { LottieFile } from "../../objects"
import styles from './styles'

export const SensorDeChama = () => {
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
        <Text style={styles.textExiste}>Existe Chama?</Text>
        <View style={containerExiste}>
          <Text style={styles.textExiste}>NÃO</Text>
        </View>
      </View>
      <View>
        <LottieFile variant="fire" width={600} height={600} left={-12} top={-30}/>
      </View>
    </>
  )
}