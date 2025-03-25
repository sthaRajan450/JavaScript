//for loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
//   if(i==5){
//     console.log('5 is best')
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(`Outer loop value: ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i}*${j} = ${i * j}`);
//   }
//   console.log(" ");
// }

let myArray = ["flash", "superman", "batman"];
for (let index = 0; index < myArray.length; index++) {
  // console.log(myArray[index]);
}

myArray.forEach((hero) => {
  // console.log(hero);
});

//break and continue

for (let i = 0; i < 10; i++) {
  if (i == 7) {
    console.log("Break when  7 is detected");
    break;
  }
  if (i == 4) {
    console.log("Continue when 4 is detected");
    continue;
  }
  console.log(i);

}
