from flask import Flask, request, render_template, jsonify, session
from flask_debugtoolbar import DebugToolbarExtension
from forex_python.converter import CurrencyRates, CurrencyCodes
from decimal import *

app = Flask(__name__)
app.config["SECRET_KEY"] = "girlslovebeyonce"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

c = CurrencyRates()
codes = CurrencyCodes()

@app.route('/')
def homepage():
    """Show homepage"""
    return render_template("index.html")

@app.route('/result')
def get_result():
    conv_from = request.args["converting-from"]
    conv_to = request.args["converting-to"]
    symbol = codes.get_symbol(conv_to)
    amount = request.args["amount"]
    result = round(c.convert(conv_from, conv_to, Decimal(amount)), 2)
    return render_template("result.html", result=result, symbol=symbol)