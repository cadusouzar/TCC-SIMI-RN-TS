import { StyleSheet } from "react-native";
import { backgroundMenuColor } from "../../style/settings/colors";

const styles = StyleSheet.create({
  texts:{
    fontFamily: 'Montserrat_700Bold',
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  },
  textNome:{
    fontFamily: 'Montserrat_700Bold',
    color: 'white',
    fontSize: 28,
    backgroundColor: 'black',
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 5,
    marginLeft: 5,
  },
  containerTextNome:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  image:{
    width: 300,
    height: 250,
  },
  containerLogo:{
    marginTop: 30,
    marginBottom: 25
  },
  containerButton:{

  }
});

export default styles