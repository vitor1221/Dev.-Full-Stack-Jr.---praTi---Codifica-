import { Component } from "react";

class LifeCycleClassComponente extends Component{
    constructor(props){
        super(props)
        this.state = {count: 1}
    }
    componentDidMount(){
        console.log("O componente foi montado")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("O componente foi atualizado! Props e estado anteriores:", prevProps, prevState)
    }   

    componentWillUnmount(){
        console.log("O componente será desmontado")
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

export default LifeCycleClassComponente