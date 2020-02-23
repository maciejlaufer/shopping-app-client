// const baseUrl = process.env.baseUrl || 'http://localhost:3000';
const baseUrl = 'https://jsonplaceholder.typicode.com';

export async function callApi(method: string, path: string, data?: any) {
  const res = await fetch(`${baseUrl}/api${path}`, {
    method,
    headers: {
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  });

  //TODO: try to handle all possibilities for responses
  console.log('res', res);
  return await res.json();
}
