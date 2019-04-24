import React, { Component } from 'react';
// import Counter from "./components/Counter";
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import './App.css';

import characters from "./characters.json";

class App extends Component {

  state = {
    characters,
    count: 0,
    clicked: [],
    topscore: 0,
    message: "Click an image to begin!"
  }

  handleIncrement = (id) => {
    function func(a, b) {
      return 0.5 - Math.random();
    }
    const characters = this.state.characters.sort(func);
    this.setState({ characters });

    let clicked = this.state.clicked;

    if (clicked.includes(id) === false) {
      clicked.push(id);
      this.setState({ count: this.state.count + 1 });
      this.setState({ message: "You guessed correctly!" });

      if (this.state.count + 1 > this.state.topscore) {
        this.setState({ topscore: this.state.count + 1 });
      }
      console.log(clicked);

    }

    else {
      console.log("game over");
      this.setState({ clicked: [] });
      this.setState({ count: 0 });
      this.setState({ message: "You guessed incorrectly!" });
      console.log(clicked);
    }

    if (clicked.length === 6) {
      console.log("You Won!!!!");
      this.setState({ count: 0 });
      this.setState({ message: "You won! Click an image to play again!" });

    }
  };

  render() {
    return (
      <div>
        <Navbar 
        counter={this.state.count}
        topscore={this.state.topscore}
        message={this.state.message}
        />

        <Wrapper>
          <div className="card-columns">
          {this.state.characters.map(character => (
            <CharCard
              key={character.id}
              id={character.id}
              image={character.image}
              clicked={character.clicked}
              handleIncrement={this.handleIncrement}
            />
          ))}
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;
