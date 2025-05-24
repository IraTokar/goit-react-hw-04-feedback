import React, { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export const App = () => {
  const [feedback, setFeedback ] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const onLeaveFeedback = type => {
    setFeedback(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }
    ))
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((feedback.good / total * 100) || 0);
  }

    const options = Object.keys(feedback);
    const totalFeedback = countTotalFeedback();
    const totalPercentage = countPositiveFeedbackPercentage();

    return (
      <div>
      <div title='Please leave feedback'>
        <Feedback onLeaveFeedback={onLeaveFeedback} options={options}/>

      </div>
        <div title='Statistics'>
        {totalFeedback > 0 ? (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={totalFeedback}
              positivePercentage={totalPercentage} />
          ) : (
            <Notification message="There is no feedback"/>
          )}
        </div>
        </div>
    )
  }

