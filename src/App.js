import React from 'react';
import Card from './components/Card';
import './App.css';
import 'tachyons';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
