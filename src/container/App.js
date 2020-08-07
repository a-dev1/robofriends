import React, {Component} from "react";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll"

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
    console.log('constructor')
  }
//js function.
  //for REST API request
  componentDidMount() {
    console.log("componenetDidMount")
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots: users}))
  }

  //for any input from user
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  //Rendering you know..
  render() {
    const { robots, searchField } = this.state;

    if(!robots.length){
      return <h1 className="tc">Loading....</h1>
    }
    else{
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });
    
    return (
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchBar searchChange={this.onSearchChange} style={{marginBottom: "40px"}}/>
        
        <Scroll>
          <Cards robots={filteredRobots} />
        </Scroll>
      </div>
    );}
  }
}

export default App;
