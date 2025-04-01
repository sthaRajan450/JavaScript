const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});
promiseOne.then((data) => {
  console.log("promise consumed");
});

new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Async task is completed");
    res();
  }, 1000);
}).then(() => {
  console.log("async 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Rajan", email: "rajan@google.com" });
  }, 1000);
});
promiseThree.then(({ username, email }) => {
  console.log("username is :" + username);
  console.log("email is :" + email);
});

// const promiseFour = new Promise((resolve, reject) => {
//   let error = true;
//   if (!error) {
//     setTimeout(() => {
//       resolve({ username: "Rajan", email: "rajan@google.com" });
//     }, 1000);
//   } else {
//     reject("ERROR: Someting went wrong!");
//   }
// });
// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Rajan", password: "1234" });
    } else {
      reject("ERRO: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response.username);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try {

//     const response = await fetch("https://dummyjson.com/users");
//     console.log(response)
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

fetch("https://dummyjson.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
