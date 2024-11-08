import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import LanguageItem from './LanguageItem';

const DATA = [
  {
    id: '1',
    title: 'JavaScript',
    experience: '2 года опыта',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  },
  {
    id: '2',
    title: 'Java',
    experience: '0.5 года опыта',
    logo: 'https://dev.java/assets/images/java-logo-vector.png',
  },
];

const LanguageList = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshItems = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <LanguageItem 
            title={item.title} 
            experience={item.experience} 
            logo={item.logo} 
          />
        )}
        keyExtractor={item => item.id}
        refreshing={isRefreshing}
        onRefresh={refreshItems}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default LanguageList;
