// src/services/api.js

import axios from 'axios';

const USDA_API_KEY = 'DEMO_KEY'; // Chave pública fornecida pela USDA
const USDA_BASE_URL = 'https://api.nal.usda.gov/fdc/v1'; 

export const searchFood = async (query) => {
  try {
    const response = await axios.get(`${USDA_BASE_URL}/foods/search`, {
      params: {
        api_key: USDA_API_KEY,
        query: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar alimentos:', error);
    throw error;
  }
};

export const getFoodDetails = async (foodId) => {
  try {
    const response = await axios.get(`${USDA_BASE_URL}/foods/${foodId}`, {
      params: {
        api_key: USDA_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do alimento:', error);
    throw error;
  }
};