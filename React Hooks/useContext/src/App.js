import React, { useState } from "react";
import Content from "./content";
import "./styles.css";

const themes = {
  dark: {
    background: "#000",
    color: "#fff"
  },
  light: {
    background: "#fff",
    color: "#000",
    border: "1px solid black"
  }
};
//1. Context oluştur.
export const ThemeContext = React.createContext(themes.dark);

//2. provider oluştur
export default function App() {
  //Button ile değişiklik yapmak için Statede tutalım
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };
  return (
    <div className="App">
      <button onClick={toggleTheme}>
       
        {theme === themes.dark ? "Dark Theme" : "Light Theme"} 
      </button>
      //İlgili Componenetin kullanması için  value Değeri olarak state değerini verdik
      <ThemeContext.Provider value={theme}>
        <Content />
      </ThemeContext.Provider>
    </div>
  );
}
