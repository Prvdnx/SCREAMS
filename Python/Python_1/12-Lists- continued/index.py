friends = ['John','Michael','Terry','Eric','Graham']
cars = [911,130,328,535,740,308]
print(friends)
friends.sort()
print(friends)
cars.sort()
print(cars)
friends.sort(reverse=True)
print(friends)
friends.reverse()
print(friends)

print(min(cars))
print(max(cars))
print(sum(cars))
print(min(friends))
print(max(friends))

# friends.append('TerryG')
# friends.insert(1,'TerryG')
# friends[2]='TerryG'
friends.extend(cars)
print(friends)

# friends.remove('Terry')
# friends.pop()
# friends.pop(2)
friends.pop(-1)
print(friends)

friends.clear()
print(friends)

# del friends
del friends[2]
print(friends)

# new_friends = friends[:]
# new_friends = friends.copy()
new_friends = list(friends)
print(friends)
print(new_friends)
