import React from 'react';
import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { NavBarBarbeiro } from '../../components/NavBarBarbeiro';
import { ButtonOpacity } from '../../objects';
import { backgroundMenuColor } from '../../style/settings/colors';

export const Salas: React.FC = () => {
  const navigation = useNavigation();

  const handleRoomPress = (roomNumber: string) => {
    //@ts-ignore
    navigation.navigate('Mapa', { sala: roomNumber });
  };

  const renderRoomButton = (roomNumber: number, marginLeft: number) => (
    <View style={[styles.roomButtonContainer, { marginLeft }]} key={roomNumber.toString()}>
      <ButtonOpacity txtButton={`Sala ${roomNumber}`} handlePress={() => handleRoomPress(roomNumber.toString())} fontSize={20} />
    </View>
  );

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.scrollViewContent}
      scrollEnabled={false}
    >
      <View style={styles.container}>
        <NavBarBarbeiro paginaAtual="Salas disponíveis" />
        <View style={styles.roomButtonsContainer}>
          {[...Array(10)].map((_, index) =>
            renderRoomButton(511 + index, index % 2 === 0 ? 60 : 20)
          )}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: backgroundMenuColor,
    height: '100%',
  },
  roomButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 70,
  },
  roomButtonContainer: {
    marginLeft: 20,
  },
});

