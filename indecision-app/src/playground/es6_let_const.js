var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log(nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log(nameLet);

const nameConst = 'Frank';
console.log(nameConst);

function getPetName(){
    let petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block scoping

const fullName = 'Mary Dalolio';
let firstName; 
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);