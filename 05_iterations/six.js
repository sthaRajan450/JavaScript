const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];
const value = myCoding.map((lang) => ({
  name: lang.languageName,
  file: lang.languageFileName,
}));
console.log(value);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4);

const newNums = [];
myNums.forEach((num) => {
  if (num > 4) newNums.push(num);
});
console.log(newNums);

const addTwo = myNums.map((num) => (num += 2));
console.log(addTwo);

const books = [
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    year: 1999,
    genre: "Technology",
    isbn: "978-0201616224",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    genre: "Technology",
    isbn: "978-0132350884",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    isbn: "978-0743273565",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    year: 2011,
    genre: "History",
    isbn: "978-0099590088",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    genre: "Self-Help",
    isbn: "978-0735211292",
  },
];
let filteredBooks = books.filter((book) => book.genre === "Technology");
filteredBooks = books.filter(
  (book) => book.year <= 2000 && book.genre === "Technology"
);
console.log(filteredBooks);
