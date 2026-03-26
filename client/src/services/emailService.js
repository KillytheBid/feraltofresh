const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || '/api';

export const sendQuoteEmail = async (formData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/sendEmail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send quote request');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || 'Network error occurred');
  }
};
