import React from 'react';
import './App.css';
import 'tachyons';
import { robots } from './data/robots';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots : robots,
      searchField : ''
    }
  }

  onSearchChange = e => {
    this.setState({ searchField : e.target.value })
  }

  render() {
    const filterRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
    return (
      <div className='tc'>
        <h1>RobotFriends</h1>
          <SearchBox onSearchChange={this.onSearchChange}/>
          <CardList robots = { filterRobots } />
      </div>
    )
  }

}
export default App;
