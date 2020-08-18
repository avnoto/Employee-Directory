import React from 'react';
import Table from './components/Table';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Wrapper>
        <Header />
        <SearchForm />
        <Table />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
