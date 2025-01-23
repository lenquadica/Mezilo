# backend/config.py

# Difficulty for Proof of Work (PoW)
POW_DIFFICULTY = 4  # Number of leading zeros in the hash

# Blockchain settings (such as initial block, etc.)
INITIAL_BLOCK = {
    'index': 1,
    'previous_hash': '1',
    'timestamp': 1622500000,  # This can be the current time or fixed
    'transactions': [],
    'nonce': 100,
    'hash': '0' * 64  # This is just a placeholder for now
}
