import React, { useState } from "react";
import { Text, Image, View, Dimensions, ScrollView } from "react-native";

type PropsCardImage = {
  url: any
}

export const CardImage:React.FC<PropsCardImage> = ({url}) => {
  return(
    <View style={{alignItems: 'center', marginRight: 8, marginLeft: 30}}>
      <Image style={{width: 350, height: 350, borderRadius: 30}} source={url}></Image>
    </View>
  )
}