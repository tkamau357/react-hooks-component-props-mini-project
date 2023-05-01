import React from "react";
import Article from "./Article";

function ArticleList(props) {
    const articles = props.articles.map((article) => (
      <Article
        key={article.id}
        title={article.title}
        date={article.date || 'January 1, 1970'}
        preview={article.preview}
      />
    ));
  
    return <main>{articles}</main>;
  }

export default ArticleList;
