// const baseUrl = process.env.baseUrl || 'http://localhost:3000';
const baseUrl = 'https://jsonplaceholder.typicode.com';

export async function callApi(method: string, path: string, data?: any) {
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (res.status >= 200 && res.status < 300) {
    return await res.json();
  }
  if (res.status == 401) {
    // logout
  } else {
    throw res;
  }
}
