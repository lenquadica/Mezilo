import json
from ecdsa import SigningKey, SECP256k1


def generate_wallet():
    private_key = SigningKey.generate(curve=SECP256k1)
    public_key = private_key.get_verifying_key()
    return private_key, public_key


def sign_transaction(private_key, transaction_data):
    """Sign a transaction with the private key."""
    return private_key.sign(transaction_data.encode())


def verify_signature(public_key, signature, transaction_data):
    """Verify a transaction signature."""
    return public_key.verify(signature, transaction_data.encode())
