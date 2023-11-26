import { NavBarBarbeiro } from '../../components/NavBarBarbeiro'
import { View } from "react-native"
import { backgroundMenuColor } from '../../style/settings/colors'
import { ContainerRegistro } from '../../components/ContainerRegistro/ContainerRegistro'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const Registro = () => {
  return (
    <KeyboardAwareScrollView
    resetScrollToCoords={{ x: 0, y: 0 }}
    contentContainerStyle={{ flexGrow: 1 }}
    scrollEnabled={false}
    >
      <View style={{ backgroundColor: backgroundMenuColor, height: '100%' }}>
        <NavBarBarbeiro paginaAtual='Registro' />
        <ContainerRegistro/>
      </View>
    </KeyboardAwareScrollView>
  )
}