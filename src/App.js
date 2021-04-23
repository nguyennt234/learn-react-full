import { Component } from 'react';
import './App.css';
import TodoItems from './components/TodoItems'

class App extends Component {
  constructor() {
    super();
      this.TodoItems = [
        {title:"BINH", iscompleted: true},
        {title:"NGUYEN", iscompleted: false},
        {title:"THUY", iscompleted: false}
      ];
    }
  render(){
    return (
      <div className="App">
        {
          this.TodoItems.map((item, index) => <TodoItems key={index} item={item} />)
        }
      </div>
    );
  }     
}

export default App;
