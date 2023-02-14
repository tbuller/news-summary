import React from 'react';
import { useState } from 'react';
import './Article.css';

const Articles = ({ articles }) => {

  return (
    articles.map(a =>
      <a href={a.webUrl}>
      <button className="article-button">
      <div className="article-card-container" key={a.id}>
      <div className="title-container">
      <div className="title">{a.webTitle}</div>
      </div>
      <div className="img-container">
      <img src={a.fields.thumbnail}></img>
      </div>
      </div>
      </button>
      </a>
      )
    
  )

}

export default Articles;