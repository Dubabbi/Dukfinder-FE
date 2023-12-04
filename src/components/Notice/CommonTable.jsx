import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  border-spacing: 0;
`;

const TableHeaderColumn = styled.th`
  border-bottom: 1px solid #e8e8e8;
  padding: 0;
  font-size: 16px;
  padding: 10px 5px;
  font-weight: bold;
`;

const CommonTable = ({ headersName, children }) => {
  return (
    <Table>
      <thead>
        <tr>
          {headersName.map((item, index) => (
            <TableHeaderColumn key={index}>{item}</TableHeaderColumn>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};

export default CommonTable;
