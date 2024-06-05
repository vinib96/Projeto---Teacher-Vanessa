export async function submitForm(data) {
  const response = await fetch('https://formcarry.com/s/dBSJ2IMVZHp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to submit form');
  }

  return response.json();
}

export const fetchQuestions = async () => {
  try {
    const response = await fetch(
      'https://the-trivia-api.com/api/questions?limit=10&categories=grammar',
      {
        method: 'GET',
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch questions');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
