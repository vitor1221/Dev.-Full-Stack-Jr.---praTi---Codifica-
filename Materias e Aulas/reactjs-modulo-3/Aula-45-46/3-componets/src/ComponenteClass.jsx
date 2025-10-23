import { Component } from "react";

class ComponemteClass extends Component{
    constructor(props){
        super(props)
        this.state = {count: 0}
    }

    increment = () =>{
        this.setState({count: this.state.count + 1})
    }

    render(){
        return(
            <div>
                <h1>Contador: {this.state.count}</h1>
                <button onClick={this.increment}>Incrementar</button>
            </div>
        )
    }
}

export default ComponenteClass