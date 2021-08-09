console.log('app.js runnig');

//---conditional rendering
//if statement
//ternary operators
//logical and operator 

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
}

const removeAll = () => {
    app.options = [];
    renderIndecisionApp();
}

/*const user = {
    name: 'Andrew',
    age: 22,
    location: 'Heredia'
};

function getLocation(location){
    if(location)
        return <p>{location}</p>;
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'anonymous'}</h1>
        {user.age >= 18 && <p>{user.age}</p> }
        {getLocation(user.location)}
    </div>
);*/

const appRoot = document.getElementById('app');

const numbers = [55,80,98];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
    
            <button onClick={removeAll}>Remove All</button>

            <button onClick={onMakeDecision} disabled={app.options.length <= 0}>What should I do?</button>

            <ol>
                {
                    app.options.map((opt) => <li key={opt}>{opt}</li>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

renderIndecisionApp();