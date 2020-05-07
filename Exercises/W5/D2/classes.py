print("Hello")
mport time
import string
class Text:
    letters = string.ascii_lowercase
    def __init__(self, text, author):
        self.text = text
        self.characters = list(text)
        self.author = author
        self.sentences = self.text.split(". ")
    def read(self, wait):
        for s in self.sentences:
            print(s)
            time.sleep(wait)
class Book(Text):
    def __init__(self, text, author, title, pub_date):
        super().__init__(text, author)
        self.title = title
        self.pub_date = pub_date
    def buy(self, price=10):
        print(f"Congratulation for your new book, {price}$ please :)")
class Paper(Book):
    def buy(self, price=5):
        print(f"You purchased an awesome paper: {price}$ please :)")
    def publish(self, publication):
        print(f"Wow ! your paper has been published in {publication} ! You rock !")
class Music:
    def __init__(self, notes):
        self.notes = notes
    def play(self, rythm):
        for note in self.notes:
            print(note)
            time.sleep(rythm)
class Opera(Book, Music):
    def __init__(self, text, author, title, pub_date, notes):
        Book.__init__(self, text, author, title, pub_date)
        Music.__init__(self, notes)
    def show(self):
        for note, sentence in zip(self.notes, self.sentences):
            print(note, "\n")
            print(sentence)
            time.sleep(1)
    def _change_text(self, text):
        self.text = text
figaro = Opera("Figaro. " * 10, author="Mozart", title="Le Mariage de Fiagro", pub_date="1800",
               notes=["Do", "Re", "Fa", "Fa", "Sol"] * 2)
print(figaro.letters)
print(figaro.notes)
figaro.show()
figaro.play(1)
# book = Book("Some text. that would be the text of the book.", author="Albert Camus", title="The Plague",
#             pub_date="1947")
# print(book.letters)
# book.read(1)
# print(book.characters)
#
# p = Paper("Some deep science about the true nature of the universe", author="Neils Bohr",
#           title="Singularity computation on Schwarzhild Radius stuff", pub_date="1910")
#
# p.read(2)
# p.publish(publication="Nature")

class Ebook(Book):
    def __init__(self,text, author, title, pub_date, size, format):
        Book.__init__(self, text, author, title, pub_date)
        self.size=size
        self.format=format

    def buy(self, price=2):
        print(f"You purchased an awesome Ebook: {self.price}$ please :)")
    def size(self, size):
        print(f"Your Ebook is {self.size}MB)")
    def format(self, format):
        print(f"Your Ebook is {self.format} format)")