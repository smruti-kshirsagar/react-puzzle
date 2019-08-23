import React from 'react';
import './App.css';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];
// create grid strusture
const grid = numbers.map(i => {
  const row = Math.floor(i / 4);
  const col = i % 4;
  return [50*col, 50*row]; //width and height is set to 50 in css
});
console.log(grid)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers : numbers // set shuffled numbers in state
    }
  }
  // to start game again shuffle array
  shuffleArray() {
    numbers.sort(() => Math.random() - 0.5);
    console.log(numbers)
    this.setState(numbers)
    return numbers
  }
  render() {
    return (
      <div className="App">
        <div className="grid-container">
          {/* <header className="App-header">
           </header> */}
            {numbers.map((i, key)=> {
              let [x,y] = grid[key];
              return <div key={key}
                      className="grid-cell"
                      style={{transform: `translate3d(${x}px,${y}px,0)`}}
                      >{i}</div>
            })}
        </div>
        <div className="game-controls">
          <button className="start-game" 
          onClick={this.shuffleArray.bind(this)}>Start New Game</button> <br />
          <span>Step counter : </span><input type="text" disabled />
        </div>
      </div>
    );
  }
}

export default App;
