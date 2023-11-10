import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

type PropsBlocosCreditos = {
  items:{
    area: string
    pessoa: string
    ra: string
  }[]

}

export const BlocosCreditos: React.FC<PropsBlocosCreditos> = ({items}) => {
  return(
    <>
      {items.map((item,index) => 
        <View style={styles.containerItem} key={index}>
          <Text style={styles.textoArea}>{item.area}</Text>
          <Text style={styles.textoPessoa}>{item.pessoa}</Text>
          <View style={styles.containerRa}>
            <Text style={styles.textoPessoa}>RA:</Text>
            <Text style={styles.textoRa}>{item.ra}</Text>
          </View>
        </View>
      )}
    </>
  )
}