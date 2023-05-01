import React from 'react';

// const Article = ({ title, date, preview }) => {
//   const formattedDate = date ? new Date(date).toLocaleDateString() : 'January 1, 1970';

//   return (
//     <article>
//       <h3>{title}</h3>
//       <small>{formattedDate}</small>
//       <p>{preview}</p>
//     </article>
//   );
// };

function Article(props) {
    return (
      <article>
        <h3>{props.title}</h3>
        <small>{props.date}</small>
        <p>{props.preview}</p>
      </article>
    );
  }

export default Article;
