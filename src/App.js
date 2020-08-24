import React from 'react';
import Directory from './components/Directory';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Wrapper>
        <Header />
        <Directory />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
