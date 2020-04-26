welcome='''
\        /  ___ |      ____  ____ |\  /| ___
 \  /\  /  |___ |     |     |    || \/ ||___
  \/  \/   |___ |____ |____ |____||    ||___
'''
print(welcome)

matrix= [["A1","B1","C1"],
    ["A2","B2","C2"],
    ["A3","B3","C3"]]
print(matrix[0])
print(matrix[1])
print(matrix[2])

symbol_P1=input("Player 1, choose your symbol please -(X) or (O):")
symbol_checker=False
if symbol_P1=="X":
    symbol_checker==False
elif symbol_P1=="O":
    symbol_checker==False
else:
    while symbol_checker==False:
        symbol_P1=input("Invalid symbol. Try again pls! -(X) or (O):")

if symbol_P1=="X":
    print("You chose {}".format(symbol_P1))
    symbol_P2="O"
    print("Player 2, you will play with {}".format(symbol_P2))
elif symbol_P1=="O":W
    print("You chose {}".format(symbol_P1))
    symbol_P2="X"
    print("Player 2, you will play with {}".format(symbol_P2))
