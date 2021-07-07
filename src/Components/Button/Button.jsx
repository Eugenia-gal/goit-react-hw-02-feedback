import React from 'react';
import VoteBtn from './Button.styled';

const Button = ({ name, onClick, id }) => {
  return (
    <VoteBtn type="button" id={id} onClick={onClick}>
      {name}
    </VoteBtn>
  );
};

export default Button;
