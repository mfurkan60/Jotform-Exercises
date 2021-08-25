import React, { useContext } from "react";
import { BooksContext } from "./App";

const Products = (props) => {
  //Create useContext to Reach App
  const context = useContext(BooksContext);
  //console.log(context);
  return (
    <div>
      {context.map((book) => (
        <div className="book">
          <img src={book.image} alt={book.name} />

          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <button>Add to Card </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
