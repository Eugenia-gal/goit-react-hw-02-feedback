import React from 'react';
import styled from '@emotion/styled/macro';

const CustomTitle = styled.h1`
  font-size: 24px;
  margin: 20px auto;
`;

function Title({ name }) {
  return <CustomTitle>{name}</CustomTitle>;
}

export default Title;
