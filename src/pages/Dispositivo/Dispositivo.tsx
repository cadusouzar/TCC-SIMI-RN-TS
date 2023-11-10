import { Text, View } from "react-native";
import { Carousel, Especificacoes } from "../../components";
import { TextsEspecificacoes } from "../../data";
import styles from './styles'
export const Dispositivo =() => {
    return (
      <View>
        <View style={{marginTop: 70}}>
          <Carousel/>
        </View>
        <View style={styles.containerEspecificacoes}>
          <Text style={styles.tituloEspecificacoes}>Especificações</Text>
          <Especificacoes itemsEspecificacoes={TextsEspecificacoes}/>
        </View>
      </View>
    );
};

