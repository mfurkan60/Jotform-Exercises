import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  //crate states
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");

  //useEffect
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(data.hits);
    };
    fetchData();
  }, [query]);

  return (
    <div className="App">
      Enter Search{" "}
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {hits.map((hit) => (
          <li key={hit.objectID}>{hit.title}</li>
        ))}
      </ul>
    </div>
  );
}
