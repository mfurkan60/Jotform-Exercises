import React from 'react';
import hero from './hero.png'
 
import './hero.css';

class Hero extends React.Component {

  

  render() {
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
}


export default Hero;