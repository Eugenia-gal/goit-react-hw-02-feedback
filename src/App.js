import { Component } from 'react';
import Button from './Components/Button';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendlerClick = e => {
    const name = e.target.id;
    this.setState(oldState => {
      return { [name]: oldState[name] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Button name="Good" id="good" onClick={this.hendlerClick} />
        <Button name="Neutral" id="neutral" onClick={this.hendlerClick} />
        <Button name="Bad" id="bad" onClick={this.hendlerClick} />
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    );
  }
}

export default App;
