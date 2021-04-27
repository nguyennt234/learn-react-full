import { Component } from 'react';
import './App.css';
import TodoItems from './components/TodoItems';
import TrafficLight from './components/TrafficLight';

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
          this.TodoItems.length > 0 && this.TodoItems.map((item, index) => <TodoItems key={index} item={item} />)          
        }
        {
          this.TodoItems.length === 0 && "Nothing here"
        }

        {
        <TrafficLight/>
        }
      </div>

      
    );
  }     
}

export default App;
