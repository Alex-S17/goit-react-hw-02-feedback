import React, { Component } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import css from "./App.module.css";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncriment = (key) => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      }
    });
  }

  countTotalFeedback = (state) => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;  
  }

  countPositiveFeedbackPercentage = (state) => {
    const { good, neutral, bad } = state;
    return Math.round(good * 100 / (good + neutral + bad));  
  }

  render() {
    return (
      <div className={css.wrapper}>      
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleIncriment}
          />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            state={this.state}
            countTotalFeedback={this.countTotalFeedback}
            countPercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

