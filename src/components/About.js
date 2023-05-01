import React from 'react';

function About(props) {
    const imageSource = props.imageSource || 'https://via.placeholder.com/215';
    const altText = props.altText || 'blog logo';
    
    return (
      <aside>
        <img src={imageSource} alt={altText} />
        <p>{props.aboutText}</p>
      </aside>
    );
  }

export default About;
