// https://gist.github.com/9520prashant/55f05f84ecf33c1edccaaf2eccfe256c

const paragraphElement = document.createElement('p');
document.body.appendChild(paragraphElement);

// Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

// const a = prompt("enter distance in km")
// make sure to convert a to integer (it is orignally string)
// const paragraphElement = document.createElement('p');
// document.body.appendChild(paragraphElement);

// paragraphElement.innerHTML += `in km: ${a*1000}, in cm: ${a*100000} `;


//switch case ques
// const dayNumber = prompt('enter number from 1 to 7');

// switch (parseInt(dayNumber)) {
//   case 1:
//     paragraphElement.innerHTML = ("Monday");
//     break;
//   case 2:
//       paragraphElement.innerHTML = ("Tuesday");
//     break;
//   case 3:
//       paragraphElement.innerHTML = ("Wednesday");
//     break;
//   case 4:
//       paragraphElement.innerHTML = ("Thursday");
//     break;
//   case 5:
//       paragraphElement.innerHTML = ("Friday");
//     break;
//   case 6:
//       paragraphElement.innerHTML = ("Saturday");
//     break;
//   case 7:
//     paragraphElement.innerHTML = ("Sunday");
//     break;
//   default:
//       paragraphElement.innerHTML = ("Invalid day number");
// }


// string concatenation
// const dayNumber1 = prompt('enter number from 1 to 7 first time: ');
// const dayNumber2 = prompt('enter number from 1 to 7 second time: ');
// paragraphElement.innerHTML = `concatenated string ${dayNumber1 + dayNumber2}`;


//functions questions

//difference between local and global scope
// let globalVar = "global variable"
// function difference() {
//   let localVar = "local variable"
//   console.log(globalVar);
//   console.log(localVar);
// }
// console.log(globalVar);
// console.log(localVar);

// difference();

//recursive function
// let num = prompt("factorial of what number? ");
// parseInt(num);
// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }
// console.log(factorial(num));

//fog type function
// function name() {
//   paragraphElement.innerHTML += "aditya"
//   surname();
// }
// function surname() {
//   paragraphElement.innerHTML += "sharma"
// }
// function fullName() {
//   name(); 
// }
// fullName();

//file-gistfile2-txt

//Write a function that takes an array and a callback function. Apply the callback function to each element of the array and return a new array with the modified elements.
let arr = [1,2,3,4];
function arrFunc(arr, callback) {
  callback(arr);
  console.log(arr);
}
function handleCallback(arr){
  for (let i = 0; i<arr.length ; i++){
    arr[i]=arr[i]+2;
  }
}

arrFunc(arr, handleCallback);