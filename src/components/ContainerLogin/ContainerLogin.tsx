import React from 'react';
import { Image, View } from 'react-native';
import { Input } from '../../objects/Input';
import { ButtonOpacity } from '../../objects/ButtonOpacity';
import styles from './styles';
//@ts-ignore
import SimiLogo from '../../images/simiLogo.png'

type PropsContainerLogin = {
  HandleLogin: (text: string) => void; // Aceita um argumento (o novo valor do campo de login)
  HandlePassword: (text: string) => void; // Aceita um argumento (o novo valor do campo de senha)
  Login: () => void;
  Register: () => void;
  LoginValue: string;
  PasswordValue: string;
};

export const ContainerLogin: React.FC<PropsContainerLogin> = ({
  HandleLogin,
  HandlePassword,
  Login,
  Register,
  LoginValue,
  PasswordValue,
}) => {
  
  return (
    <View style={styles.Container}>
      <Image style={styles.Image} source={SimiLogo} />
      <View style={styles.ContainerLogin}>
        <Input
          text='Login'
          placeholder='Ex: MeuLogin'
          onChangeText={HandleLogin} // Passa o novo valor diretamente para a função HandleLogin
          value={LoginValue}
          marginTop={-10}
          numeroMaximo={11}
        />

        <Input
          text='Senha'
          placeholder='Ex: MinhaSenha123'
          onChangeText={HandlePassword} // Passa o novo valor diretamente para a função HandlePassword
          value={PasswordValue}
          marginTop={20}
          secure={true}
          numeroMaximo={11}
        />
        <View style={styles.ContainerButtons}>
          <View style={styles.ButtonLogin}>
            <ButtonOpacity txtButton='Login' handlePress={Login} />
          </View>
          <View style={styles.ButtonRegistro}>
            <ButtonOpacity txtButton='Registro' handlePress={Register} />
          </View>
        </View>
      </View>
    </View>
  );
};
