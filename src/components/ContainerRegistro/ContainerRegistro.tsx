import { View } from "react-native";
import { Input } from '../../objects/Input';
import { ButtonOpacity } from '../../objects/ButtonOpacity';
import { useState } from 'react';
import cpfCheck from 'cpf-check';
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native"; 

export const ContainerRegistro = () => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const navigation = useNavigation(); 

  const validarNumeroTelefone = (numeroTelefone: string) => {
    const telefoneRegex = /^\d{11}$/;
    return telefoneRegex.test(numeroTelefone);
  };
      
  const Registrar = () => {
    const usuario = {
      Cpf: cpf,
      Nome: nome,
      Senha: senha,
      Telefone: telefone,
    }

    if(nome == ''){
      alert("O nome não pode estar em branco");
      return;
    }

    if (!cpfCheck.validate(usuario.Cpf) || cpf == '') {
      alert("CPF inválido ou em branco");
      return;
    }

    if (!validarNumeroTelefone(usuario.Telefone) || telefone == '') {
      alert("E-mail inválido ou em branco");
      return;
    }

    if (senha === '' || confirmarSenha === '') {
      alert("A nova senha e a confirmação de senha não podem estar em branco");
      return;
    }

    if (usuario.Senha !== confirmarSenha) {
      alert("Senha e confirmação de senha não coincidem");
      return;
    }


    const queryString = Object.entries(usuario)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  
  api.post(`Usuario/RegistrarUsuario?${queryString}`)
    .then((resp) => {
       //@ts-ignore
      navigation.navigate("Login");
      setNome('');
      setSenha('');
      setTelefone('');
      setConfirmarSenha('');
      setCpf('');
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Input
        text='Nome'
        placeholder='Escreva seu nome'
        value={nome}
        marginTop={70}
        onChangeText={text => setNome(text)}
      />
      <Input
        text='Cpf'
        placeholder='Digite seu CPF'
        value={cpf}
        marginTop={20}
        onChangeText={text => setCpf(text)}
      />
      <Input
        text='Telefone'
        placeholder='Digite seu numero de telefone'
        value={telefone}
        marginTop={20}
        onChangeText={text => setTelefone(text)}
      />
      <Input
        text='Senha'
        placeholder='Escreva sua senha'
        value={senha}
        marginTop={20}
        onChangeText={text => setSenha(text)}
        secure={true}
      />
      <Input
        text='Confirme a senha'
        placeholder='Escreva sua senha novamente'
        value={confirmarSenha}
        marginTop={20}
        onChangeText={text => setConfirmarSenha(text)}
        secure={true}
      />

      <View>
        <ButtonOpacity txtButton='Registrar' handlePress={Registrar} />
      </View>
    </View>
  )
}
