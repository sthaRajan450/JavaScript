// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sham";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Rajan",
      lastname: "Shrestha",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

const obj3 = { ...obj1, ...obj2 };

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "a@gmail.com",
  },
  {
    id: 3,
    email: "t@gmail.com",
  },
  {
    id: 4,
    email: "6@gmail.com",
  },
];

// console.log(users[0].email);
// console.log(tinderUser);
// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "js",
  price: "999",
  courseInstructor: "Rajan",
};

//object destructuring
const { courseInstructor: instructor } = course;
console.log(instructor);

// {
//     "name":"Rajan",
//     "coursename":"JavaScript",
//     "price":"free"
// }

