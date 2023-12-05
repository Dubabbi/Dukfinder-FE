import React from 'react';
import styled from 'styled-components';

const TableColumn = styled.td`
  padding: 1% 1%;
  font-size: 1.3rem;
`;

const CommonTableColumn = ({ children }) => {
  return <TableColumn>{children}</TableColumn>;
};

export default CommonTableColumn;