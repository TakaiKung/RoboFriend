import React from 'react';
import './App.css';
import 'tachyons';
import { connect } from 'react-redux';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll' 
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../stateManage/action';


const mapStateToProps = state => {
  console.log(state)
  return {
    searchField: state.searchRobots.searchField, // --> It come from reducer
    robots : state.requestRobots.robots,
    isPending : state.requestRobots.isPending,
    error : state.requestRobots.error
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots : () => requestRobots(dispatch)
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
    this.props.onRequestRobots();
    console.log('componentDidmount')
  }

  render() {
    console.log("render")
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
    return isPending ? 
      <h1 className='tc'>Loading...</h1> :
      <div className='tc'>
        <h1>RobotFriends</h1>
          <SearchBox onSearchChange={ onSearchChange }/>
          <ErrorBoundary>
            <Scroll>
              <CardList robots = { filterRobots } />
            </Scroll>  
          </ErrorBoundary>
      </div> 
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
