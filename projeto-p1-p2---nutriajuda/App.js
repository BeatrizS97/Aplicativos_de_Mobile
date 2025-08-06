import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Importa as telas
import ProgressoPerdaGordura from './src/Pages/ProgressoPerdaGordura';
import Inicio from './src/Pages/Inicio';
import IMC from './src/Pages/IMC';
import IngestaoAgua from './src/Pages/IngestaoAgua';
import Refeicoes from './src/Pages/Refeicoes';
import Nutrientes from './src/Pages/Nutrientes';
import BuscarAlimentos from './src/Pages/BuscarAlimento';

// Cria os componentes de navegação
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Início') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'IMC') {
              iconName = focused ? 'calculator' : 'calculator-outline';
            } else if (route.name === 'Água') {
              iconName = focused ? 'water' : 'water-outline';
            } else if (route.name === 'Nutrientes') {
              iconName = focused ? 'nutrition' : 'nutrition-outline';
            } else if (route.name === 'Refeições') {
              iconName = focused ? 'restaurant' : 'restaurant-outline';
            } else if (route.name === 'Progresso') {
              iconName = focused ? 'trending-up' : 'trending-up-outline';
            } else if (route.name === 'Buscar') {
              iconName = focused ? 'search' : 'search-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Início" component={Inicio} />
        <Tab.Screen name="IMC" component={IMC} />
        <Tab.Screen name="Água" component={IngestaoAgua} />
        <Tab.Screen name="Nutrientes" component={Nutrientes} />
        <Tab.Screen name="Refeições" component={Refeicoes} />
        <Tab.Screen name="Progresso" component={ProgressoPerdaGordura} />
        <Tab.Screen name="Buscar" component={BuscarAlimentos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
