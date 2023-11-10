import React from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native';
import styles from './styles'
//@ts-ignore
import ImagePerfil from '../../images/perfil.png'
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import { useNavigation } from '@react-navigation/native';
import { ButtonOpacity } from '../../objects/ButtonOpacity';

export const Perfil = () => {
  const userData = useSelector((state: RootState) => state.auth.userData)
  const navigation = useNavigation(); 

  function nomeFormatado(nome:string) {
    if(nome){
      const nomes = nome.split(' ');
    
      if (nomes.length >= 2) {
        const primeiroNome = nomes[0].charAt(0).toUpperCase() + nomes[0].slice(1).toLowerCase();
        const segundoNome = nomes[1].charAt(0).toUpperCase() + nomes[1].slice(1).toLowerCase();

        return `${primeiroNome} ${segundoNome}`;
      } else {
        return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
      }
    }
  }

  function formatCPF(cpf:string) {
    const numericCPF = cpf.replace(/\D/g, '');

    const formattedCPF = numericCPF
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  
    return formattedCPF;
  }

  const TrocarSenha = () => {
    //@ts-ignore
    navigation.navigate('TrocarSenha');
  }

  return(
    <View style={styles.containerPerfil}>
      <View style={styles.Perfil}>
        <Image source={ImagePerfil} style={styles.fotoPerfil} />
        <Text style={styles.nomePerfil}>{nomeFormatado(userData?.nome)}</Text>
        <Text style={styles.dadosPerfil}>{userData?.cpf && formatCPF(userData?.cpf)}</Text>
      </View> 
      <TouchableOpacity style={styles.containerSenha} onPress={TrocarSenha}>
        <Text style={styles.dadosPerfil}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  )
}