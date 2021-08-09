// arguments object - no longer bound with arrow fucntion

/*const add1 = function(a,b) {
    console.log(arguments);
    return a+b;
}*/

const add2 = (a,b) => {
    //console.log(arguments); --> no longer bound
    return a+b;
}

//console.log(add1(3,5));
//console.log(add2(3,5));



//this keyword - no longer bound
//arrow function doesnt create its own this variable. it uses its parent's

const user = {
    name: 'Andres',
    cities: ['Alajuela','SJ','Heredia'],
    printPacesLived(){

        const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city);
        return cityMessages;

        console.log(this.name);
        console.log(this.cities);
        //const that = this;
        /*this.cities.forEach(function(city){
            console.log(that.name + ' has lived in ' + city);
        });*/
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
}

//console.log(user.printPacesLived());


//Challenge!

const multipier = {
    //array of numbers
    //single number called multiplyBy
    //multiply - function return a nbw array where numbers have been miltiplied.
    numbers: [5,8,12],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((num) => num*this.multiplyBy);
    }
}

console.log(multipier.multiply());