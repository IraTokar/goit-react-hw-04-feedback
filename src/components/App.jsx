import React, { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = state => {
    switch (state) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total * 100) || 0);
  }

    const options = Object.keys({good,neutral,bad});
    const totalFeedback = countTotalFeedback();
    const totalPercentage = countPositiveFeedbackPercentage();

    return (
      <div>
      <div title='Please leave feedback'>
        <Feedback onLeaveFeedback={onLeaveFeedback} options={options}/>

      </div>
        <div title='Statistics'>
        {totalFeedback > 0 ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={totalPercentage} />
          ) : (
            <Notification message="There is no feedback"/>
          )}
        </div>
        </div>
    )
  }

