import React from 'react';
import { useState } from 'react';
import './Article.css';

const Article = ({ articles }) => {

  return (
    articles.map(a =>
      <div className="article-card-container" key={a.id}>
      <div className="title-container">
      <div>{a.webTitle}</div>
      </div>
      <div className="img-container">
      <img src={a.fields.thumbnail}></img>
      </div>
      </div>
      )
    
  )

}

export default Article;