import React from 'react'

function About() {

  return (
    <React.Fragment>
      <h1 style={aboutStyle}>About</h1>
        <p style={aboutStyle}>This is a practice Todo app v1.0.0.  I plan on implementing it into a larger project in the future.</p>
    </React.Fragment>
  )
}

const aboutStyle = {
  color: 'cyan'
}

export default About;