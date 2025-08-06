import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity, 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { searchFood } from '../../Services/api';
import styles from './styles';
import { Animated } from 'react-native';

export default function BuscarAlimentos() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fadeAnim = useMemo(() => new Animated.Value(0), []);

useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Final value (opaque)
      duration: 1000, // Duration in milliseconds
      useNativeDriver: true, // Improves performance
    }).start();
  }, [fadeAnim]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const data = await searchFood(query);
      setResults(data.foods);
    } catch (error) {
      alert('Erro ao buscar alimentos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.title}>Buscar Alimento</Text>
        </Animated.View>
        <View style={styles.inputContainer}>
          <Icon name="search" size={24} color="#666" style={styles.icon} />
          <TextInput
            placeholder="Ex: arroz, feijão"
            value={query}
            onChangeText={setQuery}
            style={styles.input}
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSearch} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />
      )}

      <FlatList
        data={results}
        keyExtractor={(item) => item.fdcId.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.description}</Text>
            <Text style={styles.itemText}>
              Calorias: {item.foodNutrients.find(n => n.nutrientName === 'Energy')?.value || 'N/A'} kcal
            </Text>
            <Text style={styles.itemText}>
              Proteínas: {item.foodNutrients.find(n => n.nutrientName === 'Protein')?.value || 'N/A'} g
            </Text>
            <Text style={styles.itemText}>
              Carboidratos: {item.foodNutrients.find(n => n.nutrientName === 'Carbohydrate, by difference')?.value || 'N/A'} g
            </Text>
            <Text style={styles.itemText}>
              Gorduras: {item.foodNutrients.find(n => n.nutrientName === 'Total lipid (fat)')?.value || 'N/A'} g
            </Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}
