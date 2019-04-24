import React from 'react';
import Counter from "./components/Counter";
import CharCard from "./components/CharCard";
import './App.css';

import characters from "./characters.json";

function App() {
  return (
    <div>
      <Counter />

      <div className="container">
        <CharCard
          image={characters[0].image}
        />
        <CharCard
          image={characters[1].image}
        />
        <CharCard
          image={characters[2].image}
        />
        <CharCard
          image={characters[3].image}
        />
        <CharCard
          image={characters[4].image}
        />
        <CharCard
          image={characters[5].image}
        />

      </div>
    </div>
  );
}

export default App;
