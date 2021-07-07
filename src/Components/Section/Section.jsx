import React from 'react';
import CustonSection from './Section.styled';
import Title from './Title';

const Section = ({ title, children }) => {
  return (
    <CustonSection>
      <Title name={title} />
      {children}
    </CustonSection>
  );
};

export default Section;
