import React,{useState} from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Gallery from './components/Gallery/Gallery';


const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className='overflow-hidden py-10'>
      {/* <Header/> */}
      <BrowserRouter>
      <Routes>
				<Route path="/" exact element={<Gallery/>} /> 
        </Routes>
			</BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
