string=input("Give me a 10 characters long string please:")

while len(string) != 10:
	string=input("Should be 10 characters, really. Give me another string please:")
if len(string) == 10:
	first_string=string[0]
	last_string=string[9]
	sentence_1="Perfect. The firts character of your string is {}. The last one is {}"
	print(sentence_1.format(first_string,last_string))

#‘Build’ the string up: print the first character, then the first 2, then the first 3, etc., until you print the entire string
for x in string:
	print(x)


# Swap some of the characters around, then print out this jumbled-up string to the user. Be sure to label it appropriately.
import random
list_string=list(string)
random.shuffle(list_string)
new_string="".join(list_string)
print("Let\'s Get Ready to Jumbleeeee: {}".format(new_string))


