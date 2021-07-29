import React from 'react';
//import Hero from './components/Hero';
import './reset.css';
import './index.css';
import './components/hero.css';
import hero from './components/hero.png'

const Hero = () =>{
  
    return (
       
        <div className="hero">
        <div className="hero_container">
            <div className="hero_container_left">
                <h1>They are Coming Soon</h1>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <button className="hero_container_btn">
                    <a href="#">Sing Up</a>
                </button>
            </div>
            <div class="hero_container_right">
            <img src={hero} alt="hero.png" />;
        </div>
        </div>
        </div>
    );
   
}
const Navbar = () => {
  return (
    <div>
     <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
   <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
</ul>

    </div>
  )
}

const App =() => {

  const now = new Date();
   
   
  return (
    <div >
     <Navbar/>
        
        
       <Hero/>
     
    </div>
  );
}

export default App;
