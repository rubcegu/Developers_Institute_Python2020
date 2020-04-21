print("Welcome! Tell me your secrets!! (one word at a time)")
action=input("Do you wanna Encode (E) or Decode (D)?")

def encode(text,shift):
    normal="abcdefghijklmnopqrstuvwxyz"
    normal_list=list(normal)
    cipher_list=[normal_list[((normal_list.index(i) + int(shift))% 26)] for i in text]
    cipher="".join(cipher_list)
    return print(cipher)

def decode(text,shift):
    normal="abcdefghijklmnopqrstuvwxyz"
    normal_list=list(normal)
    cipher_list=[normal_list[((normal_list.index(i) - int(shift))% 26)] for i in text]
    cipher="".join(cipher_list)
    return print(cipher)

if action=='E':
    text=input("Tell me your word (lowercase,please!)")
    shift=input("Shift?")
    encode(text,shift)
elif action=="D":
    text=input("Tell me your word (lowercase,please!)")
    shift=input("Shift?")
    decode(text,shift)
