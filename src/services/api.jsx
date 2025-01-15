import axios from 'axios';

// Base URL for Fake API
const BASE_URL = 'https://fakestoreapi.com';

/**
 * Fetch products from the fake API.
 * @returns {Promise<Array>} A promise resolving to the list of products.
 */
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products.');
  }
};

/**
 * Fetch clothes from the fake API.
 * @returns {Promise<Array>} A promise resolving to the list of clothes.
 */
export const fetchClothes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/category/men's clothing`);
    return response.data;
  } catch (error) {
    console.error('Error fetching clothes:', error);
    throw new Error('Failed to fetch clothes.');
  }
};
