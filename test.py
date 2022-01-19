from unittest import TestCase
from app import app
from forex_python.converter import CurrencyRates, CurrencyCodes

class FlaskTests(TestCase):

    def setUp(self):
        """Stuff to do before every test."""

        self.client = app.test_client()
        app.config['TESTING'] = True
    
    def test_homepage(self):
        """Make sure information is in the session and HTML is displayed"""

        with self.client:
            response = self.client.get('/')

            self.assertIn(b'<h1>Currency Converter</h1>', response.data)
            self.assertIn(b'name="converting-from"', response.data)
            self.assertIn(b'name="converting-to"', response.data)
    
    def test_conv_to(self):
        """Make sure convert to input is working properly"""
        