import random, string

for i in range(5):
    # print(random.random())
    # print(random.random()*6)
    # print(random.uniform(1,6))
    # print(random.randint(1,6))
    # print(random.randrange(1,100,2))
    print(random.randrange(2,100,2))


friends_list =  ['John', 'Eric', 'Michael', 'Terry', 'Graham']
print(random.choice(friends_list))
print(random.sample(friends_list,3))
print(random.sample(friends_list,5))
random.shuffle(friends_list)
print(friends_list)


smallcaps = 'abcdefghijklmnopqrstuvwxyz'
largecaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
digits = '0123456789'
letters_numbers = string.ascii_letters + string.digits
word = ''
for i in range(7):
    # word = word + random.choice(letters_numbers)
    word += random.choice(letters_numbers)
print(word)
word1 = ''.join(random.sample(letters_numbers,7))
print(word1)
word = random.choices(letter_numbers, k=7)    
print(word)
