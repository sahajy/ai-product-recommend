const API_URL = process.env.REACT_APP_API_URL || "https://ai-product-recommend.onrender.com";

export const fetchProducts = async () => {
  const response = await fetch('https://ai-product-recommend.onrender.com/api/products');
  return response.json();
};

export const getRecommendations = async (data) => {
  try {
    const response = await fetch('https://ai-product-recommend.onrender.com/api/recommendations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const text = await response.text(); // First get raw text
    try {
      return JSON.parse(text); // Then parse manually
    } catch (parseError) {
      console.error('Failed to parse JSON:', text);
      throw new Error('Invalid JSON response');
    }
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};
