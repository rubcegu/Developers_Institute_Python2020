#EXERCISE 1
class Cat:
    species = 'mammal'
    def __init__(self, name, age):
        self.name = name
        self.age = age
        print(f"{name} Initialized!")
    def oldest(self,*args):
        ages = [i.age for i in args]
        x= max(ages)
        print(f"The oldest cat is {x} years old")
        return x
#Instantiate the Cat object with 3 cats
cat1 = Cat("Garfield", 50)
cat2 = Cat("Leono", 72)
cat3 = Cat("Felix", 45)
#Some checks...
print(cat1.name)
print(cat2.age)
print(cat3.name)
#Create a function that finds the oldest cat
cat1.oldest(cat1,cat2,cat3)
cat2.oldest(cat1,cat2,cat3)

#EXERCISE 2
class Dog:
    def __init__(self, nameDog, heightDog):
        self.nameDog = nameDog
        self.heightDog = heightDog
        print(f"{nameDog} Initialized")
    def talk(self):
        print("WOUAF!!")
    def jump(self):
        x = self.heightDog*2
        print(f"{self.nameDog} jumps {x}cm")
        return x

davids_dog = Dog("Rex",50)
print(davids_dog.nameDog)
print(davids_dog.heightDog)

sarahs_dog = Dog("Teacup",20)
print(sarahs_dog.nameDog)
print(sarahs_dog.heightDog)

if davids_dog.heightDog > sarahs_dog.heightDog:
    davids_dog.winner=True
    sarahs_dog.winner=False
    print(f"The winner is {davids_dog.nameDog}")
else:
    davids_dog.winner=False
    sarahs_dog.winner=True
    print(f"The winner is {sarahs_dog.nameDog}")
print(davids_dog.winner)
print(sarahs_dog.winner)

#EXERCISE 3
class Zoo:
    animals = []
    def __init__(self, zooName):
        self.zooName = zooName
        print(f"{zooName} Initialized!")
        print(self.animals)
    def addAnimal(self,newAnimal):
        if newAnimal in self.animals:
            return print("Already included")
        else:
            self.animals.append(newAnimal)
            return print(f"{newAnimal} included!")
    def getAnimals(self):
        return print(self.animals)
    def sellAnimal(self,animalSold):
        if animalSold in self.animals:
            self.animals.remove(animalSold)
            return print(f"Goodbye dear {animalSold}")
        else:
            return print(f"Not possible to sell!!")
    def sortAnimal(self):
        place = [i[0] for i in self.animals]
        animals = [i for i in self.animals]
        pen = sorted(list(zip(place,animals)))
        return print(pen)

ramatGanSafari = Zoo("Ramat Gan Safari")
ramatGanSafari.addAnimal("Lion")
ramatGanSafari.addAnimal("Leopard")
ramatGanSafari.addAnimal("Bear")
ramatGanSafari.addAnimal("Penguin")
ramatGanSafari.addAnimal("Elephant")
ramatGanSafari.addAnimal("Lion")
ramatGanSafari.getAnimals()
ramatGanSafari.sellAnimal("Bear")
ramatGanSafari.getAnimals()
ramatGanSafari.sortAnimal()


