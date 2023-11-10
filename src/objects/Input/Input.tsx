import { View, Text, TextInput, TextStyle } from "react-native";
import styles from './styles'
import { colorZero } from "../../style/settings/colors";

type PropsInput = {
  text: string
  placeholder: string
  onChangeText?: (text: string) => void;
  value: string
  marginTop?: number
  secure?: boolean
  tipo?: string
  numeroMaximo?: number
}

export const Input: React.FC<PropsInput> = ({ text, placeholder, onChangeText, value, marginTop, secure, tipo, numeroMaximo }) => {
  const inputTextStyle: TextStyle = {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 8,
    marginTop: marginTop,
    fontFamily: 'Montserrat_700Bold', 
    color: colorZero
  }

  return (
    <View>
      <Text style={inputTextStyle}>{text}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.Input}
        secureTextEntry={secure}
        keyboardType={tipo}
        maxLength={numeroMaximo}
      />
    </View>
  )
}