# Exercise 1
print(("Hello World\n")*5)
# Exercise 2
ex2=(99**3)*8
print(ex2)
# Exercise 3
name="Ruben"
age=33
shoe_size=11
info="{} is {} years old and needs a new pair of soccer boots. He´s {} if you wanna hlp!"
print(info.format(name,age,shoe_size))
# Exercise 4
computer_brand="MAC"
sentence="I have a {} computer"
print(sentence.format(computer_brand))
# Exercise 5
5 < 3 #>> FALSE
3 == 3 #>> TRUE
3 == "3" #>> FALSE
"3" > 3 #>> ERROR
"Hello" == "hello" #>> FALSE
#EXERCISE 6
user_height=input("Give me your height please:")
check=int(user_height)
if check<35:
	print("Get out, please")
else:
	print("Welcome to the Roller Coaster")

#EXERCISE 7
number=input("Give me a number, please:")
check_number=int(number)

if check_number % 2 == 0:
	print("The number is even")
else:
	print("The number is odd")
