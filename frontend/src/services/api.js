const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";

export const fetchProducts = async () => {
  const response = await fetch('http://127.0.0.1:5000/api/products');
  return response.json();
};

export const getRecommendations = async (data) => {
  try {
    const response = await fetch('http://127.0.0.1:5000/api/recommendations', {
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
