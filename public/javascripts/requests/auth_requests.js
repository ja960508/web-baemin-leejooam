export async function requestUserLogin(userId, password) {
  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        password,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error);
    }

    return { result, error: false };
  } catch (e) {
    return { result: e, error: true };
  }
}
