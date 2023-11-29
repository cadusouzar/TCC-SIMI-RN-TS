import React from 'react';
import { NavBarBarbeiro } from '../../components/NavBarBarbeiro';
import { View, Image } from 'react-native';
import { backgroundMenuColor } from '../../style/settings/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type SalaImages = {
  '511': any;
  '512': any;
  '513': any;
  '514': any;
  '515': any;
  '516': any;
  '517': any;
  '518': any;
  '519': any;
  '520': any;
};

const salaImages: SalaImages = {
  '511': require('../../images/fuga511.png'),
  '512': require('../../images/fuga512.png'),
  '513': require('../../images/fuga513.png'),
  '514': require('../../images/fuga514.png'),
  '515': require('../../images/fuga515.png'),
  '516': require('../../images/fuga516.png'),
  '517': require('../../images/fuga517.png'),
  '518': require('../../images/fuga518.png'),
  '519': require('../../images/fuga519.png'),
  '520': require('../../images/fuga520.png'),
};

export const Mapa: React.FC = ({ route }: any) => {
  const { sala } = route.params;

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={false}
    >
      <View style={{ backgroundColor: backgroundMenuColor, height: '100%' }}>
        <NavBarBarbeiro paginaAtual={`Mapa de fuga - Sala ${sala}`} />
        <View style={{ alignSelf: 'center', marginTop: 10 }}>
          {salaImages[sala as keyof SalaImages] ? (
            <Image
              key={sala}
              style={{ height: 700, width: 380, resizeMode: 'stretch' }}
              source={salaImages[sala as keyof SalaImages]}
            />
          ) : (
            <Image style={{ height: 700, width: 380, resizeMode: 'stretch' }} source={require('../../images/mapa1.png')}/>
          )}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
