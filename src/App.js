import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    contador: 0
  }
  increment = () => {
    //setando o valor do componente com +1
    this.setState({
      contador: this.state.contador+1
    })
  }
  decrement = () => {
    //setando o valor do componente e diminuindo 1
    this.setState({
      contador: this.state.contador-1
    })
  }
  clear = () => {
    this.setState({
      contador: 0
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/*teste */}
          Contador: {this.state.contador  }
          <button onClick={this.increment}>+1</button>
          <button onClick={this.decrement}>-1</button>
          <button onClick={this.clear}>Limpar</button>
        </header>
      </div>
    );
  }
}

export default App;
