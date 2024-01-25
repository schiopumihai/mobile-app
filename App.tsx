import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { App } from '@/App';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Root: React.FC = () => {
  return (
    <View style={styles.container}>
      <App />
      <StatusBar style="auto" />
    </View>
  );
};

export default Root;
