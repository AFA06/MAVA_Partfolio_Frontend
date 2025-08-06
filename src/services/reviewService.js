// src/services/reviewService.js
const BASE_URL = 'http://localhost:5050/api/reviews';

export const reviewService = {
  getAllReviews: async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    return await response.json();
  },

  getAverageRating: async () => {
    const response = await fetch(`${BASE_URL}/average`);
    if (!response.ok) {
      throw new Error('Failed to fetch average rating');
    }
    const { averageRating } = await response.json();
    return averageRating;
  },

  createReview: async (reviewData) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    });

    if (!response.ok) {
      throw new Error('Failed to submit review');
    }

    return await response.json();
  }
};
