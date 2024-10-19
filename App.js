import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const stopRefreshing = () => {
    setIsRefreshing(false);
  };

  const refreshItems = () => {
    setIsRefreshing(true);
    // Имитируем задержку, например, для сетевого запроса
    setTimeout(stopRefreshing, 1000); // Остановка обновления через 1 секунду
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA} // Отображение прежнего массива данных
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        refreshing={isRefreshing} // Индикатор обновления
        onRefresh={refreshItems} // Запуск обновления при Pull to Refresh
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#2196F3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
  },
});
