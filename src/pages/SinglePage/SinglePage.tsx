import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import { NavBar } from "../../components/NavBar"
import { Pagina } from "../../components/Pagina"

import styles from "./styles";

 
export const SinglePage = () => {
  const [currentTab, setCurrentTab] = useState("Home");

  return (
    <SafeAreaView style={styles.Container}>
      <NavBar
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      />
      <Pagina PaginaAtual={currentTab} />
    </SafeAreaView>
  );
};