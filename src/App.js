import { Component } from 'react';
import { Cardlist } from './components/card-list/card-list.component';
import { Input } from './components/input/input.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [

      ],
      searchField: ""
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
 handleChange = (event) => {
      this.setState({searchField: event.target.value});
    };
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));
    return(<div className="App">
      <h1>Monsters Rolodex</h1>
      <Input 
        placeholder="search monsters"
        handleChange={this.handleChange}
      />
      <Cardlist monsters = {filteredMonsters} />
      
  </div>)
  }
}


export default App;


