a = 7
b = 3
print("Comparisons")
print('a == b is', a == b)
print('a != b is', a != b)
print('a > b is', a > b)
print('a < b is', a < b)
print('a >= b is', a >= b)
print('a <= b is', a <= b)
print('o in John is ','o' in 'John') #membership
print('o in John is ','o' not in 'John') #non membership
print('John is John ','John' is 'John') #identity
print('John is not John is ','John' is not 'John') # negative identity

a = [3,7,42]
# b = a
b = [3,7,42]
print(a == b)
print(a is b)
print(id(a), id(b))


print("\nBooleans")
print(int(True))
print(int(False))
print(bool('Parrot'))
print(bool(' '))
print(bool(''))
print(bool(1))
print(bool(42))
print(bool(0))
print(bool([1,2]))
print(42 + True)
print(42 + False)
