import React from 'react';
import Card from './components/Card';
import { robots } from './data/robots';
import './App.css';
import 'tachyons';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        {
          robots.map(data => {
           return <Card 
                    name={ data.name }
                    email={ data.email }
                  />
          })
        } 
      </div>
    );
  }
}

export default App;
