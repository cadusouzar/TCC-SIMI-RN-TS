import { CardImage } from "../../objects";
import React from "react";
import { ScrollView, View } from "react-native";

const imagesCarrossel = [
  { id: 1, imageUrl: require('./1.jpg') },
  { id: 2, imageUrl: require('./1.jpg') },
  { id: 3, imageUrl: require('./1.jpg') },
];

export const Carousel = () => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      contentContainerStyle={{ flexGrow: 1 }}
      style={{left: -7}}
    >
      {imagesCarrossel.map((item) => (
        <CardImage key={item.id} url={item.imageUrl} />
      ))}
    </ScrollView>
  );
};
