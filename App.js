import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LanguageList from './components/LanguageList'; // Компонент с вашим списком языков
import AboutMe from './components/AboutMe'; // Компонент "О себе"
import NotFound from './components/NotFound'; // Компонент "Не найдено"
import { MaterialCommunityIcons } from 'react-native-vector-icons'; // Импортируем иконки

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Мои языки программирования') {
              iconName = focused ? 'book-open-page-variant' : 'book';
            } else if (route.name === 'О Себе') {
              iconName = focused ? 'account-circle' : 'account';
            } else if (route.name === 'Не найдено') {
              iconName = focused ? 'alert-circle' : 'alert';
            }

            // Возвращаем иконку
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2196F3', // Цвет активной вкладки
          tabBarInactiveTintColor: 'gray', // Цвет неактивных вкладок
        })}
      >
        <Tab.Screen name="Мои языки программирования" component={LanguageList} />
        <Tab.Screen name="О Себе" component={AboutMe} />
        <Tab.Screen name="Не найдено" component={NotFound} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
