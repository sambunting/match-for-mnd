import React from 'react';
import styled from 'styled-components';

const Style = styled.footer`
  margin-top: 40px;
  text-align: center;
`

const Footer = () => <Style>
  Developed by Sam Bunting
  | <a href="https://sam.bunting.dev" target="_blank" rel="noreferrer">sam.bunting.dev</a>
  {' '}
  | <a href="https://twitter.com/_sambunting" target="_blank" rel="noreferrer">@_sambunting</a>
</Style>

export default Footer;
