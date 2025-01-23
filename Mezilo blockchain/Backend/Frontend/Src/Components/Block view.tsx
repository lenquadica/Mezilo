import React from 'react';

interface Block {
  index: number;
  previous_hash: string;
  timestamp: number;
  transactions: any[];
  nonce: number;
  hash: string;
}

interface BlockViewProps {
  blocks: Block[];
}

const BlockView: React.FC<BlockViewProps> = ({ blocks }) => {
  return (
    <div>
      {blocks.map((block, index) => (
        <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <h3>Block {block.index}</h3>
          <p><strong>Previous Hash:</strong> {block.previous_hash}</p>
          <p><strong>Hash:</strong> {block.hash}</p>
          <p><strong>Nonce:</strong> {block.nonce}</p>
          <p><strong>Transactions:</strong></p>
          <ul>
            {block.transactions.map((tx, i) => (
              <li key={i}>{tx.sender} → {tx.recipient}: {tx.amount}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BlockView;
