# backend/app/__init__.py

from .server import app
from .blockchain import Blockchain
from .transaction import generate_wallet

# Here you could import all the other modules and set up things like CORS or logging
