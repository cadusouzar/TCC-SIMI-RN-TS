import React from 'react'
import { View } from 'react-native'
import { BlocosCreditos } from '../../components'
import { CreditosItems } from '../../data'
import styles from './styles'

export const Creditos = () => {
  return(
    <View style={styles.ContainerBlocos}>
      <BlocosCreditos items={CreditosItems}/>
    </View>
  )
}