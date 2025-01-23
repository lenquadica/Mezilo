import React, { useEffect, useState } from 'react';
import { getBlockchain, mineBlock } from './utils/api';
import BlockView from './components/BlockView';
import TransactionForm from './components/TransactionForm';

const App: React.FC = () => {
  const [blocks, setBlocks] = useState<any[]>([]);

  const fetchBlockchain = async () => {
    const blockchain = await getBlockchain();
    setBlocks(blockchain);
  };

  const handleMine = async () => {
    const newBlock = await mineBlock();
    fetchBlockchain();  // Refresh blockchain after mining
  };

  useEffect(() => {
    fetchBlockchain();
  }, []);

  return (
    <div>
      <h1>Blockchain Demo</h1>
      <TransactionForm />
      <button onClick={handleMine}>Mine New Block</button>
      <BlockView blocks={blocks} />
    </div>
  );
};

export default App;
