import React from 'react';
import './App.css';
import { CardII, TimerII, AccessDOM } from './components';

const Welcome = () => {
  // React.createElement() returns an object:
  // {
  //    type: 'h1',
  //    props: {
  //        children: 'Welcome',
  //        id: 'greeting'
  //    } 
  // }
  return React.createElement('h1', {id: 'greeting'}, 'Welcome');
}

const App = () => {
  return (
    <div style={{margin: '2rem 0 0 2rem'}}>
      <Welcome />
      <TimerII />
      <CardII name="meaw" age="2 years" hobby="sleep" />
      <AccessDOM />
    </div>
  );
}

export default App;