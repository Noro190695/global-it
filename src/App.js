import React from 'react';
import 'normalize.css';
import './style/style.scss';
import Header from './components/Header';
import Section from './components/Section';



function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <Section />

      </div>
    </div>
  );
}

export default App;
