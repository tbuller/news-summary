import React from 'react';
import { useState, useEffect } from 'react';
import apiKey from "../apiKey";
import Articles from "./Articles";



const Home = () => {
  const[articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
    try {
    const response = await fetch(`https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=thumbnail`);
    const data = await response.json();
    setArticles(data.response.results);
    } catch (error) {
      console.log(error);
    }}  
    fetchArticles();
  }, [])

  const showArticles = () => {
    console.log(articles);
  }

  return (
    <>
    <h1 className="welcome-message">Welcome to your news summary!</h1>
    <Articles articles={articles}/>
    <button onClick={showArticles()}>click</button>
    </>
  )
}

export default Home;