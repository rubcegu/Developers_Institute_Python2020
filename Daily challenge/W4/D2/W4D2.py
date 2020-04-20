birthday=input("When is your birthay? (DD/MM)")
birthday_year=input("Birthyear? (YYYY)")
print("So, your birthdate is {}/{}".format(birthday,birthday_year))
age=2020-int(birthday_year)
print("You are {} years old!".format(age))
candles_input=age%10

if candles_input==0:
    candles = "i" * 10
    left=""
    right=""
else:
    candles = "i" * candles_input
    if candles_input%2==0:
        left="_"*((10-candles_input)//2)
        right="_"*((10-candles_input)//2)
    else:
        left = "_" * ((10 - candles_input) // 2)
        right = "_"*((10 - candles_input) // 2+1)

cake='''   |:H:a:p:p:y:|
 __|___________|__
|^^^^^^^^^^^^^^^^^|
|:B:i:r:t:h:d:a:y:|
|                 |
~~~~~~~~~~~~~~~~~~~
'''

if int(birthday_year)%4==0 or int(birthday_year)%100==0 or int(birthday_year)%400==0:
    print("Leap Birth Year!!!!")
    cover=print(f"    {left}{candles}{right} ")
    print(cake)
    cover=print(f"    {left}{candles}{right} ")
    print(cake)
else:
    cover=print(f"    {left}{candles}{right} ")
    print(cake)
