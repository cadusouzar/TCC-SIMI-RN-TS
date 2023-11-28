import { CardImage } from "../../objects";
import React from "react";
import { ScrollView, View } from "react-native";

const imagesCarrossel = [
  { id: 1, imageUrl: require('./1.jpg') },
  { id: 2, imageUrl: require('./2.jpg') },
  { id: 4, imageUrl: require('./3.jpg') },
  { id: 5, imageUrl: require('./3.jpg') },
  { id: 6, imageUrl: require('./3.jpg') },
  { id: 7, imageUrl: require('./3.jpg') },
  { id: 8, imageUrl: require('./3.jpg') },
  { id: 9, imageUrl: require('./3.jpg') },
  { id: 10, imageUrl: require('./3.jpg') },
  { id: 11, imageUrl: require('./3.jpg') },
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
