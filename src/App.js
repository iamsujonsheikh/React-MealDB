import React from 'react'
import { Routes, Route} from "react-router-dom";
import Header from './Shared/Header';
import Home from './Components/Home'
import About from './Components/About';
import Meal from './Components/Meal';
import Footer from './Shared/Footer';
import NotFound from './Components/NotFound';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/meal' element={<Meal/>} />
          <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
