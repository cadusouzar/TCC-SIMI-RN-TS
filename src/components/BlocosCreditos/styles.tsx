import { StyleSheet } from "react-native";
import { backgroundMenuColor, colorZero } from "../../style/settings/colors";

const styles = StyleSheet.create({
  containerItem:{
    alignItems: 'center',
  },
  textoArea:{
    fontSize: 24, 
    fontFamily: 'Montserrat_700Bold',
    color: colorZero,
    marginBottom: 5,
  },
  textoPessoa:{
    fontSize: 20, 
    fontFamily: 'Montserrat_700Bold',
    color: colorZero,
  },
  containerRa:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 5,
  },
  textoRa:{
    fontSize: 20, 
    fontFamily: 'Montserrat_700Bold',
    color: colorZero,
    marginLeft: 10,
    backgroundColor: 'black',
    padding: 2,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 7
  }
});

export default styles