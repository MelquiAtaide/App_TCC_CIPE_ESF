import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export interface InfoHomeScreenProps {}

export function InfoHomeScreen(props: InfoHomeScreenProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>DE/RE</Text>
      {/* <Image
        source={require('../../assets/img/InfoHome01.png')}
        style={styles.image}
        resizeMode="cover" // Pode ser 'cover', 'contain', 'stretch', 'repeat', 'center'
      />
      <Image
        source={require('../../assets/img/InfoHome02.png')}
        style={styles.image}
        resizeMode="cover" // Pode ser 'cover', 'contain', 'stretch', 'repeat', 'center'
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37A69C',
    padding: 10,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff'
  }
});
