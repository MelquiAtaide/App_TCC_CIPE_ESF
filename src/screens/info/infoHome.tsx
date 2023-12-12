import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';

export interface InfoHomeScreenProps {}

export function InfoHomeScreen(props: InfoHomeScreenProps) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>CIPE-ESF</Text>
        <Image
          source={require('../../assets/img/infoHome.png')}
          style={styles.image}
          resizeMode="cover" // Pode ser 'cover', 'contain', 'stretch', 'repeat', 'center'
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37A69C',
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    flex: 1,
    // width: 370,
    // height: 550,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 50,
    marginTop: 30,
  },
  titulo: {
    flex: 1,
    paddingLeft: '30%',
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
  }
});
