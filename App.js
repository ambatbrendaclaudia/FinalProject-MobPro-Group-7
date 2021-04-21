import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>U-KOST</Text>
      <Text>Universitas Klabat Kost</Text>
      <Text>ALDIO TEST BRANCH</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
});
