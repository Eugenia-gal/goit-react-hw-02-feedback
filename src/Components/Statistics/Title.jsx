import React from 'react';
import styled from '@emotion/styled/macro';

const CustomTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

function Title({ name }) {
  return <CustomTitle>{name}</CustomTitle>;
}

export default Title;
