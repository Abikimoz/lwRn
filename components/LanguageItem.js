// LanguageItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageItem = ({ title, experience, logo }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.experience}>{experience}</Text>
    <Image source={{ uri: logo }} style={styles.logo} accessible={true} 
    accessibilityLabel={`${title} logo`} resizeMode="contain" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#2196f3',
    marginVertical: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  experience: {
    fontSize: 16,
    marginVertical: 10,
    color: '#FFFFFF',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default LanguageItem;
