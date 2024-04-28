
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Calculator from './components/Calculator/Calculator';
import './App.css';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Calculator />
      
      <Footer />
    </div>
  );
}

export default App;
