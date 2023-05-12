import React from 'react';
import Header from './components/Header';
import Elements from './components/Elements';
import About from './components/About';
import Features from './components/Features';
import ContactUs from './components/ContactUs';
import aboutImage1 from './images/a1.png'
import aboutImage2 from './images/a2.png'
 
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Elements />
      <About image={aboutImage1} title='All You Need to Know About Us' button='Get in Touch' />
      <Features />
      <About image={aboutImage2} title='Download and Get the App' button='Dowload' />
      <ContactUs />
    </div>
  );
}

export default App;