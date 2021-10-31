import React from 'react';
import styled from 'styled-components';

const Style = styled.footer`
  margin-top: 40px;
  text-align: center;

  div {
    margin-bottom: 20px;
  }
`

const Footer = ({ lastUpdated }) => <Style>
  <p>Last updated at {lastUpdated}</p>
  <div>
    Developed by Sam Bunting
    | <a href="https://sam.bunting.dev" target="_blank" rel="noreferrer">sam.bunting.dev</a>
    {' '}
    | <a href="https://twitter.com/_sambunting" target="_blank" rel="noreferrer">@_sambunting</a>
  </div>
  <div>
    This site is open-source
    | <a href="https://github.com/sambunting/match-for-mnd" target="_blank" rel="noreferrer">GitHub</a>
    { ' ' }
    | <a href="https://github.com/sambunting/match-for-mnd/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">CONTRIBUTING.md</a>
  </div>
</Style>

export default Footer;
