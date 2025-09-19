import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel'
import Products from './components/Products/Products';
import AOS from "aos";
import "aos/dist/aos.css";
import './index.css';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return ( 
    <div className="bg-white dark:bg-[#2e394d]">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Carousel />
      <Products searchTerm={searchTerm} />
    </div>
  );
};

export default App;