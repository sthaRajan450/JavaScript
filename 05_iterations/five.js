//forEach loop
const coding = ["js", "ruby", "java", "python", "cpp"];
// coding.forEach((lang) => console.log(lang));

function printMe(item, index, arr) {
  console.log(item, index, arr);
}
// coding.forEach(printMe);

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

myCoding.forEach((language) => {
  console.log(
    `Name:${language.languageName} File:${language.languageFileName}`
  );
});
