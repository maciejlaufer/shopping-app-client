const baseUrl = process.env.baseUrl || 'http://localhost:3000/api';

export async function callApi(method: string, path: string, data?: any) {
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (res.status >= 200 && res.status < 300) {
    return await res.json();
  }
  if (res.status == 401) {
    // logout
  } else {
    throw await res.json();
  }
}
