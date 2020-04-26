#DAILY CHALLENGE
#EXERCISE 1
class Subset:
    def __init__(self):
        print("Initializing Subsets")
    def subset(self,*args):
        initial_list = [[]]
        pairs_list = [[i,i+1] for i in args if i+1<=max(args)]
        extremes_list = [[i,i+2] for i in args if i+2<=max(args)]
        individual_list = [[i] for i in args]
        total_list = [[i for i in args]]
        subset_list = initial_list+pairs_list+extremes_list+individual_list+total_list
        return print(subset_list)

exercise1=Subset()
exercise1.subset(4,5,6)

#EXERCISE 2
import itertools
class SumZero:
    def __init__(self):
        print("Initializing SumZero!")
    def sumzero(self,*args):
        elements = [i for i in args]
        print(elements)
        subset= list(itertools.combinations(elements,3))
        print(subset)
        sumzero=[]
        for i in range(len(subset)):
            if sum(subset[i])==0:
                sumzero.append(i)
        sumzero_list=[]
        for i in range(len(sumzero)):
           sumzero_list.append(subset[sumzero[i]])
        return print(sumzero_list)

example1 = SumZero()
example1.sumzero(-25, -10, -7, -3, 2, 4, 8, 10)

