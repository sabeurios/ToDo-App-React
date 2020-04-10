import React from 'react';
import './App.css';
import Input from './Component/Input';
import List from './Component/List';


class App extends React.Component {
  constructor(){
    super()
    this.state =  {
                    items:[ {text:"item-1",isCompleted:false},
                            {text:"item-2",isCompleted:false},
                            {text:"item-3",isCompleted:false}
                          ],
                    input: ""
                  }
  };

  handleChange = e => {
    const {value, name}=e.target
    this.setState({
      [name]: value
    });
  };

  handleAddItem = e => {
    e.preventDefault();
    this.setState({
      items:[...this.state.items,{text:this.state.input}],
      input: ""
    })
  }

  handleDelete=(indice)=>{
    this.setState({
      items: this.state.items.filter((elt,key) => key!==indice)
    })
  }

  handleCompleteOrUndo=(id)=>{
    this.setState({
      items: this.state.items.map( (elt,index) => (id===index) ? {...elt,isCompleted:!elt.isCompleted} : elt )
    })
  }

  render(){  

  return (
          <div className="App">
            <header>
              <h1>To-Do-App!</h1>    
              <h4>Add New To-Do</h4>  
              <Input  name="input"
                      value={this.state.input} 
                      handleChange={this.handleChange}
                      handleAddItem={this.handleAddItem}/> 
           </header>
           <div className="main">
              <h2 classe="items">Let's get some work done!</h2>
              <hr/>
              <List  items={this.state.items}
                      handleCompleteOrUndo={this.handleCompleteOrUndo}
                      handleDelete={this.handleDelete}/>
           </div>
      </div>
  )
  }
} 
export default App;
