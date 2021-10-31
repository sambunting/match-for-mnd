import React from 'react';
import styled from 'styled-components';

const Style = styled.table`
  width: 100%;
  display: grid;
  grid-template-columns: auto 60px;
`

const Text = styled.div`
  margin-bottom: 10px;
`

const Table = ({ data }) => <Style>
  {data.map((row) =>
    <>
      <Text>{row.name}</Text>
      <Text><a href={row.source} target="_blank" rel="noreferrer">Source</a></Text>
    </>
  )}
</Style>

export default Table;
