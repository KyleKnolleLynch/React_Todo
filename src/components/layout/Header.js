import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="about">About</Link>
    </header>
  )
}

//  Header Style
const headerStyle = {
  textAlign: 'center',
  background: '#333',
  color: 'darkcyan',
  borderBottom: '2px darkmagenta solid',
  padding: '20px',
  marginBottom: '30px'
}

const linkStyle = {
  color: 'darkcyan',
  textDecoration: 'none'
}

export default Header;