import React from 'react';
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import store from './src/services/redux/store'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Login } from './src/pages/Login';
import {  Mapa } from './src/pages/Mapa';
import { SinglePage } from './src/pages/SinglePage';
import { Registro } from './src/pages/Registro';
import { Salas } from './src/pages/Salas';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
          name='Login'
          component={Login}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name='SinglePage'
          component={SinglePage}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name='Registro'
          component={Registro}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name='Salas'
          component={Salas}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name='Mapa'
          component={Mapa}
          options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


