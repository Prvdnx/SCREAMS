movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}
print(movie('budget'))
print(movie.get('budget'))
print(movie.get('budget','not found'))


#= updating and setting something that doesnt exist
movie['title'] = 'The Holy Grail'
print(movie.get('title'))
movie['budget'] = 250000
print(movie.get('budget'))
print(movie)

movie.update({'title' : 'The Holy Grail','year':1975,'cast':['John','Eric','Michael','George','Terry']})
movie['budget'] = 250000
print(movie)

#= delete entries
# del movie['year']
year = movie.pop('year')
print(movie)
print(year)


print(len(movie)) #length of dictionary

print(movie.keys())
print(movie.values())
print(movie.items())

for key in movie:
    print(key)

for key, value in movie.items():
    print(key, value)
