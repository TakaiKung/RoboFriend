import React from 'react';
import './App.css';
import 'tachyons';
import { connect } from 'react-redux';
import { robots } from '../data/robots';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll' 
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField } from '../stateManage/action';

const mapStateToProps = state => {
  console.log(state)
  return {
    searchField: state.searchField // --> It come from reducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots : [],
    }
    console.log('Constructor')
  }

  componentDidMount () {
    this.setState({ robots : robots })
    console.log('componentDidmount')
  }

  render() {
    console.log("render")
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filterRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
    return !robots.length ? 
      <h1 className='tc'>Loading...</h1> :
      <div className='tc'>
        <h1>RobotFriends</h1>
          <SearchBox onSearchChange={onSearchChange}/>
          <ErrorBoundary>
            <Scroll>
              <CardList robots = { filterRobots } />
            </Scroll>  
          </ErrorBoundary>
      </div> 
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
