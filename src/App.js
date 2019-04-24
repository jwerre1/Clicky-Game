import React, { Component } from 'react';
// import Counter from "./components/Counter";
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
import './App.css';

import characters from "./characters.json";

class App extends Component {

  state = {
    characters,
    count: 0
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <div className="card text-center">
          <div className="card-header bg-primary text-white">
            Click Counter!
        </div>
          <div className="card-body">
            <p className="card-text">Click Count: {this.state.count}</p>
            {/* <button className="btn btn-primary" onClick={this.handleIncrement}>
              Increment
          </button> */}
          </div>
        </div>

        <Wrapper>
          {this.state.characters.map(character => (
            <CharCard
              key={character.id}
              id={character.id}
              image={character.image}
              handleIncrement={this.handleIncrement}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
