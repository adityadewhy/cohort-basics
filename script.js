// https://gist.github.com/9520prashant/55f05f84ecf33c1edccaaf2eccfe256c

// Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

const a = prompt("enter distance in km")
const paragraphElement = document.createElement('p');
document.body.appendChild(paragraphElement);

paragraphElement.innerHTML += `in km: ${a*1000}, in cm: ${a*100000} `;