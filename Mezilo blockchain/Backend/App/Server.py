from flask import Flask, jsonify, request
from .blockchain import Blockchain, proof_of_work
from .transaction import generate_wallet, sign_transaction, verify_signature

app = Flask(__name__)

# Initialize the blockchain
blockchain = Blockchain()

@app.route('/api/blockchain', methods=['GET'])
def get_blockchain():
    """Return the full blockchain."""
    chain_data = [{
        'index': block.index,
        'previous_hash': block.previous_hash,
        'timestamp': block.timestamp,
        'transactions': block.transactions,
        'nonce': block.nonce,
        'hash': block.hash
    } for block in blockchain.chain]

    return jsonify(chain_data), 200

@app.route('/api/transactions', methods=['POST'])
def create_transaction():
    """Add a transaction."""
    data = request.get_json()

    # Ensure valid data
    if 'sender' not in data or 'recipient' not in data or 'amount' not in data:
        return jsonify({'message': 'Missing required fields'}), 400

    blockchain.add_transaction(data['sender'], data['recipient'], data['amount'])
    return jsonify({'message': 'Transaction added successfully'}), 201

@app.route('/api/mine', methods=['POST'])
def mine_block():
    """Mine a new block."""
    last_block = blockchain.get_last_block()
    if last_block is None:
        return jsonify({'message': 'Blockchain is empty'}), 400

    # Mine a new block using PoW
    new_block = blockchain.create_block(previous_hash=last_block.hash, nonce=0)
    mined_block = proof_of_work(new_block)

    return jsonify({
        'index': mined_block.index,
        'previous_hash': mined_block.previous_hash,
        'timestamp': mined_block.timestamp,
        'transactions': mined_block.transactions,
        'nonce': mined_block.nonce,
        'hash': mined_block.hash
    }), 200

if __name__ == '__main__':
    app.run(debug=True)
