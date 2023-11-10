import { Text, View } from "react-native"
import styles from './styles';

type PropsEspecificacoes = {
  itemsEspecificacoes: { dispositivo: string }[]
}

export const Especificacoes:React.FC<PropsEspecificacoes> = ({itemsEspecificacoes}) => {
  return(
    <>
    {
      itemsEspecificacoes.map((item, index) => (
        <View key={index} style={styles.containerItem}>
          <Text style={styles.textItem}>{item.dispositivo}</Text>
        </View>
      ))
    }
    </>
  )
}