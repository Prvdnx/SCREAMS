def value_added_tax(amount):
    tax = amount * 0.25
    total_amount = amount * 1.25
    # return tax
    # return [amount, tax, total_amount]
    # return {amount, tax, total_amount}
    return f"{amount}, {tax}, {total_amount}"
    
price = value_added_tax(100)    
print(price, type(price))