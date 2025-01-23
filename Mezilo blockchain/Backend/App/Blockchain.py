import hashlib
import json
from time import time


class Block:
    def __init__(self, index, previous_hash, timestamp, transactions, nonce=0):
        self.index = index
        self.previous_hash = previous_hash
        self.timestamp = timestamp
        self.transactions = transactions
        self.nonce = nonce
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        block_data = json.dumps(self.__dict__, sort_keys=True).encode()
        return hashlib.sha256(block_data).hexdigest()


class Blockchain:
    def __init__(self):
        self.chain = []
        self.current_transactions = []
        self.create_block(previous_hash='1', nonce=100)

    def create_block(self, previous_hash, nonce):
        block = Block(
            index=len(self.chain) + 1,
            previous_hash=previous_hash,
            timestamp=time(),
            transactions=self.current_transactions,
            nonce=nonce
        )
        self.current_transactions = []
        self.chain.append(block)
        return block

    def add_transaction(self, sender, recipient, amount):
        self.current_transactions.append({
            'sender': sender,
            'recipient': recipient,
            'amount': amount
        })
        return self.chain[-1].index + 1  # Next block's index

    def get_last_block(self):
        return self.chain[-1] if self.chain else None



def proof_of_work(block, difficulty=4):
    target = '0' * difficulty
    while not block.hash.startswith(target):
        block.nonce += 1
        block.hash = block.calculate_hash()
    return block
