import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { colorNavTop, colorZero } from '../../style/settings/colors'
import Icon from 'react-native-ico-material-design';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

type PropsNavBarBarbeiro = {
  paginaAtual: string
}

export const NavBarBarbeiro:React.FC<PropsNavBarBarbeiro> = ({paginaAtual}) => {
  const navigation = useNavigation(); 
  
  const goBack = () => {
    //@ts-ignore
    navigation.goBack()
  }

  return(
    <View style={{backgroundColor:colorNavTop ,borderTopLeftRadius: 15, paddingHorizontal: 20, paddingVertical: 5, paddingBottom: 30}}>
      <TouchableOpacity onPress={goBack}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <View style={{top: 18}}>
            <Icon name="back-arrow" color={colorZero} width={35} height={30}/>
          </View>
          <Text style={styles.paginaAtual}>{paginaAtual}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}