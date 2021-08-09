class Person {
    constructor(name = 'anonymous', age=0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi! I'm ${this.name}.`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        description += this.hasMajor() ? ` Their major is ${this.major}` : '';
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        greeting += this.hasHomeLocation() ? ` I'm visiting from ${this.homeLocation}` : '';
        return greeting;
    }
}

/*const me = new Person('Andres Dalolio',25);
console.log(me, me.getGreeting(), me.getDescription());

const other = new Person();
console.log(other, other.getGreeting(), other.getDescription());*/

/*const student = new Student('Andres Dalolio',25,'Computer Science');
console.log(student.getDescription());
const otherStudent = new Student();
console.log(otherStudent.getDescription());*/

const traveler = new Traveler('Andres Dalolio',25,'Alajuela');
console.log(traveler.getGreeting());
const otherTraveler = new Traveler();
console.log(otherTraveler.getGreeting());