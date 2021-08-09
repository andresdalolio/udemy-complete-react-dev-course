import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));

/*class OldSyntax{
    constructor(){
        this.name = 'Mike';
        this.getGreetng = this.getGreetng.bind(this);
    }

    getGreetng(){
        return `Hi! My name is ${this.name}.`;
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);
const getGreeting = oldSyntax.getGreetng;
console.log(getGreeting())

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi! My name is ${this.name}.`;
    }
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting())*/