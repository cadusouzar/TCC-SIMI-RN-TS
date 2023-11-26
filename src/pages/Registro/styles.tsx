import { StyleSheet } from "react-native";
import { colorZero } from "../../style/settings/colors";

const styles = StyleSheet.create({
  containerPerfil:{
    marginTop: 70,
    alignItems: 'center',
  },
  Perfil:{
    alignItems: 'center'
  },
  fotoPerfil:{ 
    width: 200,
    height: 200, 
  },
  nomePerfil:{
    fontSize: 20, 
    paddingTop: 15, 
    fontFamily: 'Montserrat_700Bold',
    paddingBottom: 8,
    color: colorZero,
    textAlign: 'center'
  },
  dadosPerfil:{
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
    color: colorZero,
    textAlign: 'center'
  },
});

export default styles