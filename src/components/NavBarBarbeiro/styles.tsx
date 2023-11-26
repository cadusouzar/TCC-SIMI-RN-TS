import { StyleSheet } from "react-native";
import { backgroundColor, colorZero, textColor } from "../../style/settings/colors";

const styles = StyleSheet.create({
  imageMenu:{
    width: 35, 
    height: 30, 
    top: 18
  },
  paginaAtual:{
    fontSize: 20, 
    paddingTop: 20,
    fontFamily: 'Montserrat_700Bold',
    top: 10,
    left: 20,
    color: colorZero
  },
});

export default styles