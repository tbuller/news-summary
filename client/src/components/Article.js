import React from 'react';
import { useState } from 'react';

const Article = ({ articles }) => {

  return (
    articles.map(a =>
      <div>
      <div>{a.webTitle}</div>
      </div>
      )
    
  )

}

export default Article;