import React, { useState } from 'react';
import { createTransaction } from '../utils/api';

const TransactionForm: React.FC = () => {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const transaction = { sender, recipient, amount };
    const result = await createTransaction(transaction);
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Sender" value={sender} onChange={(e) => setSender(e.target.value)} />
      <input type="text" placeholder="Recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <button type="submit">Send Transaction</button>
    </form>
  );
};

export default TransactionForm;
