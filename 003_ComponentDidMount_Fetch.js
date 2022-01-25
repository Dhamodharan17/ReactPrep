import React, { Component } from 'react';

export class App extends Component {

    constructor(props){
        super(props);
        this.state = {loading:false,todosdata:[]}
    }

    componentDidMount(){
        console.log("CMD")
        this.setState({loading:true});
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>response.json())
        .then((data)=>this.setState({todosdata:data}))     
    }


  render() {
    return <div>
    <ol>{this.state.todosdata.map((t,i) =>{
        return<li key={i}>{t.title}</li>
    })}</ol>
    </div>;
  }
}

export default App;
