import React from "react"
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-ico-material-design';
import Icon2 from 'react-native-ico-miscellaneous';
import Icon3 from 'react-native-ico-emojione-emojis-mono'
import Icon4 from 'react-native-ico-pixel'
import Icon5 from 'react-native-ico-lodgicons'
import { useNavigation } from "@react-navigation/native"; 
//@ts-ignore
import ImagePerfil from '../../images/perfil.png'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/redux/store";
import { logoutUser } from "../../services/redux/actions";

type PropsNavBar = {
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  currentTab: string;
};

export const NavBar:React.FC<PropsNavBar> = ({setCurrentTab, currentTab}) => {
  const userData = useSelector((state: RootState) => state.auth.userData)

  function nomeCompleto(name:string) {
    if(name){
      const nomes = name.split(' ');
    
      const letrasFormatadas = nomes.map((nome) => {
        return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
      });
    
      const nomeFormatado = letrasFormatadas.join(' ');
      return nomeFormatado;
    }
  }

  return (
    <View style={{ justifyContent: 'flex-start', padding: 20}}>
      <Image source={ImagePerfil} style={{
        width: 60,
        height: 60,
        marginTop: 20
      }} />
      <View style={{width: '50%'}}>
        <Text style={styles.Text}>{nomeCompleto(userData?.nome)}</Text>
      </View>

      <TouchableOpacity>
        {TabButton(currentTab, setCurrentTab, "Perfil")}
      </TouchableOpacity>

      <View style={{flexGrow: 1, marginTop: 50}}>
        {TabButton(currentTab, setCurrentTab, "Home", "home-button", "material-design")}
        {TabButton(currentTab, setCurrentTab, "Sensor de gás", "gas-cylinder-outline", "lodgicons")} 
        {TabButton(currentTab, setCurrentTab, "Sensor de chama", "fire", "miscellaneous")}
        {TabButton(currentTab, setCurrentTab, "Dispositivo", "device", "pixel")}
        {TabButton(currentTab, setCurrentTab, "Mapa de fuga", "gps-fixed-indicator", "material-design")}
        {TabButton(currentTab, setCurrentTab, "Créditos", "framed-portrait", "material-design")}
      </View>


      <View>
        {TabButton(currentTab, setCurrentTab, "LogOut", "logout", "miscellaneous")}
      </View>
    </View>
  )
}

const TabButton = (currentTab: string,
  setCurrentTab: (tab: string) => void,
  title: string,
  icon?: string,
  group?: string) => {
  const navigation = useNavigation(); 
  const dispatch = useDispatch()
  return (
    <TouchableOpacity onPress={() => {
      if(title == "LogOut"){
        dispatch(logoutUser())
        //@ts-ignore
        navigation.navigate('Login')
      }else{
        setCurrentTab(title)
      }
    }}>
      <View style={{ flexDirection: "row", alignItems: 'center', marginLeft: -5, paddingVertical: 8, paddingRight: 7, backgroundColor: currentTab == title && title != "Perfil" ? '#545454' : 'transparent', borderRadius: 8, marginTop: 10 }}>
        {group === "material-design" ? (<View style={{marginLeft: 10}}><Icon name={icon} group={group} width="25" height="25" color={currentTab == title && title != "Perfil" ? 'white' : 'black'}/></View>) : 
        group === "miscellaneous" ? (<View style={{marginLeft: 6}}><Icon2 name={icon} group={group} width="30" height="25" color={currentTab == title && title != "Perfil" ? 'white' : 'black'}/></View>) : 
        group === 'emojione-emojis-mono' ? (<View style={{marginLeft: 7}}><Icon3 name={icon} group={group} width="30" height="30" color={currentTab == title && title != "Perfil" ? 'white' : 'black'}/></View>) : 
        group === 'pixel' ? (<View style={{marginLeft: 7}}><Icon4 name={icon} group={group} width="30" height="30" color={currentTab == title && title != "Perfil" ? 'white' : 'black'}/></View>) : 
        group === 'lodgicons' ? (<View style={{marginLeft: 12}}><Icon5 name={icon} group={group} width="30" height="30" color={currentTab == title && title != "Perfil" ? 'white' : 'black'}/></View>) : 
        <></>}
        <Text style={{fontSize: 15,fontFamily: 'Montserrat_700Bold', paddingLeft: 5, color: currentTab == title && title != "Perfil" ? 'white' : 'black'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
