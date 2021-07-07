import { Component } from 'react';
import VoteButton from './Components/Button';

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

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const rez = Math.ceil((100 * this.state.good) / total);
    return rez;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <VoteButton name="Good" id="good" onClick={this.hendlerClick} />
        <VoteButton name="Neutral" id="neutral" onClick={this.hendlerClick} />
        <VoteButton name="Bad" id="bad" onClick={this.hendlerClick} />
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>
          Positive feedback:{' '}
          {this.countTotalFeedback() &&
            this.countPositiveFeedbackPercentage() + '%'}
        </p>
      </div>
    );
  }
}

export default App;
