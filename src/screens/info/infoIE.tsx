import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export interface InfoIEScreenProps {}

export function InfoIEScreen(props: InfoIEScreenProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>IE</Text>
        <Image
        source={require('../../assets/img/infoIE.png')}
        style={styles.image}
        />
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
    // flex: 1,
    width: 370,
    height: 550,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 50,
    marginTop: 30,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff'
  }
});
