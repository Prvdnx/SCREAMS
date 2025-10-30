print("1.*Loops are great*")
print("2.**Loops are great**")
print("3.***Loops are great***")
print("4.****Loops are great****")
print("5.*****Loops are great*****")

i=0
while i < 5:
    i+=1
    print(f"{i}."+ "*"*i + "Loops are awesome" + "*"*i*2)
    
# Three Loop Questions:
#1. What do I want to repeat?
#  -> message
#2. What do I want to change each time?
#  -> stars
#3. How long should we repeat?
#  -> 5 times
