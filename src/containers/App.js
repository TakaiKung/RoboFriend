import React from 'react';
import './App.css';
import 'tachyons';

import { robots } from '../data/robots';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll' 
import ErrorBoundary from '../components/ErrorBoundary';

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
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
    return !robots.length ? 
      <h1 className='tc'>Loading...</h1> :
      <div className='tc'>
        <h1>RobotFriends</h1>
          <SearchBox onSearchChange={this.onSearchChange}/>
          <ErrorBoundary>
            <Scroll>
              <CardList robots = { filterRobots } />
            </Scroll>  
          </ErrorBoundary>
      </div> 
  }

}
export default App;
