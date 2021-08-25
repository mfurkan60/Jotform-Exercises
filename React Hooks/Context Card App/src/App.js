import React, { createContext } from "react";
import { data } from "./data";
import Products from "./Products";
import Header from "./header";
import "./styles.css";

// create Context
export const BooksContext = createContext();

const App = () => {
  return (
    <BooksContext.Provider value={data}>
      <div className="App">
        <Header title="All Books List" />
        <Products />
      </div>
    </BooksContext.Provider>
  );
};

export default App;
