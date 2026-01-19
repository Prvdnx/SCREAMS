msg="""Dear Terry,,
You must cut down the mightiest 
tree in the forest with…
a herring! <3"""
print(msg)


print(msg.find('Python'))
print(msg.replace('Python','C'))
msg=msg.replace('Python','C')
print(msg)

print('Python' in msg)
print('Python' not in msg)


name='TERRY'
color = 'RED'
msg = '[' + name + '] loves the color ' + color.lower() + '!'
msg1 = f'[{name.capitalize()}] loves the color {color.lower()}!'
print(msg)
print(msg1)
