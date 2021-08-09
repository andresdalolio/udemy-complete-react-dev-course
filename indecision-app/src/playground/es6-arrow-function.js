/*const square = function(x){
    return x*x;
}

const squareArrow = (x) => {
    return x*x;
}

const squareArrow = (x) => x*x;

console.log(square(8));
console.log(squareArrow(8));
*/

//Challenge -> use arrow function
//create getFirstName with fullName as parameter 
//create regular arrow function
//create arrow function using shorthand syntax

const getFirstName1 = (fullName) => {
    return fullName.split(' ')[0];
}
const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName1('Andres Dalolio'));
console.log(getFirstName1('Mike Buttowski'));
