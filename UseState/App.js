import React, { useState } from "react";
 
import "./styles.css";

const App = ()=>{

const [deger ,setDeger] = useState(0);
const [isim ,setIsim] = useState("Helena");
const [a ,setA] = useState(true);

const artır = () =>{
setDeger(deger + 1)
}
const azalt =()=>{
setDeger(deger -1)
}
const isimDegistir= () =>{
setIsim("Afroditi");
}

  return(
    <div className="App">
      <h1> Artıtma ve Azaltma işlemleri </h1>
      <button onClick={artır}> Azalt</button>
      {deger}
      <button onClick={azalt}> Artır</button>
      <hr/>
      <p> isim Değiştirmek için Tıklayın! {isim}</p>
      
      <button onClick={isimDegistir}> Değiştir</button>
      <hr/>
  {a ?<p> 1. yazı</p>  : <p> 2. Yazı </p> }
      
      <button onClick={() => setA(!a)}> Değiştir</button>
      
       </div>
  )
}




export default App;