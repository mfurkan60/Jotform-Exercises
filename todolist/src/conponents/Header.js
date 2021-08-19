import React, {memo} from 'react';

const Header = memo((props) =>{
    console.log("Header rendering");
    return(
            
        <div>
          <header>
         <h1> {props.title} </h1>
          </header>
       </div>

)});

export default Header;
