import { StyleSheet } from "react-native";
import { colorNavTop, colorZero } from "../../style/settings/colors";

const styles = StyleSheet.create({
  containerImage:{
    width: '90%',
    alignItems: 'center',
    marginVertical: 40,
    height: 180,
    borderRadius: 30
  },
  image:{
    height: '100%',
    alignSelf: 'center',
    borderRadius: 30
  },
  containerEspecificacoes:{
    alignItems: 'center',
    marginTop: 35,
  },
  tituloEspecificacoes:{
    fontFamily: 'Montserrat_700Bold',
    fontSize: 24,
    color: colorZero,
    marginBottom: 10
  }
});

export default styles