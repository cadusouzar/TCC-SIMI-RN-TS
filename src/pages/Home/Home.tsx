import React from "react"
import { View } from 'react-native'
import { BemVindo } from "../../components/BemVindo";

import styles from "./styles";

export const Home = () => {

  return (
    <View style={styles.containerBemVindo}>
      <BemVindo/>
    </View>
  );
};
