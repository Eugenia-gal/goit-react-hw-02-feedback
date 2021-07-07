import React from 'react';
import VoteButton from 'Components/Button';
import CustomOption from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const ucFirst = str => str[0].toUpperCase() + str.slice(1);
  return (
    <CustomOption>
      {options.map(key => (
        <VoteButton
          key={key}
          name={ucFirst(key)}
          id={key}
          onClick={onLeaveFeedback}
        />
      ))}
    </CustomOption>
  );
};

export default FeedbackOptions;
