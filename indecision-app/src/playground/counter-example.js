class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        const count = parseInt(localStorage.getItem('count'));
        if(count && !isNaN(count)){
            this.setState(() => ({count}));
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }
    handleAddOne() {
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            }
        });
    }
    handleMinusOne() {
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            }
        });
    }
    handleReset() {
        this.setState(()=>{
            return {
                count: 0
            }
        });
        /*this.setState((prevState)=>{
            return {
                count: prevState.count+1
            }
        });*/
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />,document.getElementById('app'));

/*let count=0;

const addOne = () => {
    count++;
    rederCounterApp();  
}
const minusOne = () => {
    count--;
    rederCounterApp();   
}
const reset = () => {
    count=0;
    rederCounterApp();     
}

const appRoot = document.getElementById('app');

const rederCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    console.log(template2);
    ReactDOM.render(template2, appRoot);
}

rederCounterApp();*/