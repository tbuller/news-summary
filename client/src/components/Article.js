import React from 'react';
import { useState } from 'react';
import './Article.css';

const Article = ({ articles }) => {

  return (
    articles.map(a =>
      <div className="container-wrapper">
      <div className="article-card-container" key={a.id}>
      <div className="title-container">
      <div className="title">{a.webTitle}</div>
      </div>
      <div className="img-container">
      <img src={a.fields.thumbnail}></img>
      </div>
      </div>
      </div>
      )
    
  )

}

export default Article;