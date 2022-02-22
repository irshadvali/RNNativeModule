/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import IRSHAD from './src/CustomModule';
const App = () => {
  const [deviceId, setDeviceId] = useState('');

  const showToast = () => {
    IRSHAD.toastMessage();
  };

  useEffect(() => {
    const fetchDeviceId = async () => {
      const id = await IRSHAD.getDeviceId();
      setDeviceId(id);
    };
    fetchDeviceId();
  }, []);
  return (
    <SafeAreaView>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <Text>irshad vali</Text>
  <Text>{deviceId}</Text>
      <Button
        title={'Toast Message'}
        onPress={() => {
          showToast();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
