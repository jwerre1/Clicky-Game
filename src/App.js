import React, { Component } from 'react';
// import Counter from "./components/Counter";
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
import './App.css';

import characters from "./characters.json";

class App extends Component {

  state = {
    characters,
    count: 0,
    clicked: [],
    topscore: 0,

  }

  handleIncrement = (id) => {
    function func(a, b) {
      return 0.5 - Math.random();
    }
    const characters = this.state.characters.sort(func);
    this.setState({characters});

    let clicked = this.state.clicked;

    if (clicked.includes(id) === false) {
      clicked.push(id);
      this.setState({ count: this.state.count + 1 });

      if (this.state.count + 1 > this.state.topscore) {
        this.setState({ topscore: this.state.count + 1});
      }
      console.log(clicked);

    }

    else {
      console.log("game over");
      this.setState({clicked: []});
      this.setState({ count: 0 });
      console.log(clicked);
    }

    if (clicked.length === 6) {
      console.log("You Won!!!!");
      this.setState({ count: 0 });
    }



    // else {
    //   console.log("Game Over");
    //   this.setState({ count: 0 });
    // }

   
  };

  // shuffle = () => {
  //   function func(a, b) {
  //     return 0.5 - Math.random();
  //   }
  //   const characters = this.state.characters.sort(func);
  //   this.setState({characters});
  // };

  // beenClicked = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  render() {
    return (
      <div>
        <div className="card text-center">
          <div className="card-header bg-primary text-white">
            Click Counter!
        </div>
          <div className="card-body">
            <p className="card-text">Current Score: {this.state.count}</p>
            <p className="card-text">High Score: {this.state.topscore}</p>
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
              clicked={character.clicked}
              handleIncrement={this.handleIncrement}
              // beenClicked={this.beenClicked}
              // shuffle={this.shuffle}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
