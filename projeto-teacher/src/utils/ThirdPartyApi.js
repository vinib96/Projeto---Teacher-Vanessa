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
