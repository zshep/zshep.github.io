import React from "react";

//importing components

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

// import router libraries from react-router
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  
 
  return (
    
    <div>
      <Header />
     
      
        <Routes>
          <Route exact path="/" element={ <About /> } />
      
          <Route exact path ='/portfolio' element={ <Portfolio />} />

          <Route exact path ='/contact' element={ <Contact />} />

          <Route exact path ='/resume' element={ <Resume />} />

        </Routes>

      <Footer />
    
      </div>
  );
}

export default App;




//<button onClick={()=> {setBen(!ben)}}>{ben ? "light mode" : "dark Mode"}</button>