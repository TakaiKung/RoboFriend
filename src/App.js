import React from 'react';
import { robots } from './data/robots';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';
import 'tachyons';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots : [],
      searchField : ''
    }
    console.log('Constructor')
  }

  componentDidMount () {
    this.setState({ robots : robots })
    console.log('componentDidmount')
  }

  onSearchChange = e => {
    this.setState({ searchField : e.target.value })
  }

  render() {
    console.log("render")
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
