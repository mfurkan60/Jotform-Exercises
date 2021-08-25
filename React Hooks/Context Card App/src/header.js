import React, { memo } from "react";
import "./styles.css";

const Header = memo((props) => {
  return (
    <div className="header">
      <h1> {props.title} </h1>
    </div>
  );
});

export default Header;
