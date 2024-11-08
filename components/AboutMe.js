import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutMe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi! My name is Ilja</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AboutMe;
