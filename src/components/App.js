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
