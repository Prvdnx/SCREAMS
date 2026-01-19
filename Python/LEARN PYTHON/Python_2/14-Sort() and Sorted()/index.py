my_list = [1,5,3,7,2]
my_dict = {'car':4,'dog':2,'add':3,'bee':1}
my_tuple = ('d','c','e','a','b')
my_string = 'python'

print(my_list,'original')
# print(my_list.sort()) # returns nothing
# print(my_list.reverse()) # returns nothing
print(sorted(my_list))
print(my_list,'original')

print(my_tuple,'original')
print(sorted(my_tuple)) # we get a list
print(my_tuple,'new')

print(my_string,'original')
print(sorted(my_string))
print(my_string,'new')

print(my_dict,'original')
print(sorted(my_dict))
print(sorted(my_dict.items()))
print(sorted(my_dict.values()))
print(sorted(my_dict.values(), reverse=True))
print(my_dict,'new')

print(my_list,'original')
print(reversed(my_list))
print(list(reversed(my_list)))
print(my_list[::-1]) # also reverses the list
print(my_list,'new')



my_list = [1,5,-3,7,-2]
my_llist=[['car',4,65],['dog',2,30],['add',3,10],['bee',1,24]]

print(sorted(my_list))
print(sorted(my_list, key = abs)) # sort in absolute value

print(sorted(my_llist))
print(sorted(my_llist, key = lambda item :item[1])) # sort based on item index on the list
print(sorted(my_llist, key = lambda item :item[2])) # sort based on item index on the list
