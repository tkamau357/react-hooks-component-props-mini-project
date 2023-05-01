// import React from "react";
// import blogData from "../data/blog";
// import Header from "./Header";
// import About from "./About";
// import ArticleList from "./ArticleList";

// console.log(blogData);

// function App() {
//   return (
//     <div className="App">
//       <Header name="Overreacted" />
//       <About image="https://example.com/myimage.jpg" aboutText="Personal blog by John Thairu Kamau. I program with React." />
//       <ArticleList posts={posts} />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import blogData from "../data/blog";

// function Header(props) {
//   return (
//     <header>
//       <h1>{props.blogName}</h1>
//     </header>
//   );
// }

// function About(props) {
//   const imageUrl = props.imageUrl || 'https://via.placeholder.com/215';
//   const imageAlt = props.imageAlt || 'blog logo';

//   return (
//     <aside>
//       <img src={imageUrl} alt={imageAlt} />
//       <p>{props.aboutText}</p>
//     </aside>
//   );
// }

// function ArticleList(props) {
//   const articles = props.articles.map((article) => (
//     <Article
//       key={article.id}
//       title={article.title}
//       date={article.date || 'January 1, 1970'}
//       preview={article.preview}
//     />
//   ));

//   return <main>{articles}</main>;
// }

// function Article(props) {
//   return (
//     <article>
//       <h3>{props.title}</h3>
//       <small>{props.date}</small>
//       <p>{props.preview}</p>
//     </article>
//   );
// }

// function App() {
//   const blogName = 'My Blog';
//   const aboutText = 'Welcome to my blog! Here, I write about all sorts of things.';

//   console.log(blogData);

//   return (
//     <div>
//       <Header blogName={blogName} />
//       <About aboutText={aboutText} />
//       <ArticleList articles={blogData} />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

function App() {
  const articles = [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ];

  return (
    <div>
      <Header blogName="My Blog" />
      <About
        imageSource="https://via.placeholder.com/215"
        altText="blog logo"
        aboutText="This is a blog about interesting things."
      />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
