import React from 'react';

// const About = (props) => {
//   return (
//     <aside>
//       <img src={props.image ? props.image : "https://via.placeholder.com/215"} alt="blog logo" />
//       <p>{props.aboutText}</p>
//     </aside>
//   );
// }

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
