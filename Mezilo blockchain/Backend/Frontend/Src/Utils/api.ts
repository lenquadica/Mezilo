/const BASE_URL = 'http://localhost:5000/api';

export async function getBlockchain() {
  const response = await fetch(`${BASE_URL}/blockchain`);
  return response.json();
}

export async function createTransaction(transaction: { sender: string; recipient: string; amount: number }) {
  const response = await fetch(`${BASE_URL}/transactions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transaction)
  });
  return response.json();
}

export async function mineBlock() {
  const response = await fetch(`${BASE_URL}/mine`, { method: 'POST' });
  return response.json();
}
