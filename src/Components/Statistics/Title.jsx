import React from 'react';
import styled from '@emotion/styled/macro';

const CustomTitle = styled.h2`
  font-size: 20px;
  margin: 20px auto;
`;

function Title({ name }) {
  return <CustomTitle>{name}</CustomTitle>;
}

export default Title;
