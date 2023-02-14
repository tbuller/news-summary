import React from 'react';
import { useState, useEffect } from 'react';
import apiKey from "../apiKey";
import Articles from "./Articles";
import './Home.css';



const Home = () => {
  const[articles, setArticles] = useState([]);
  const[selectedTab, setSelectedTab] = useState("all");

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

  const toggleTab = (tab) => {
    setSelectedTab(tab);
    console.log(articles); 
  }

  return (
    <>
    <h1 className="welcome-message">Welcome to your news summary!</h1>
    <div className="tab-container">   
    <button onClick={() => toggleTab("world")} className="tab">World news</button>
    <button onClick={() => toggleTab("politics")} className="tab">Politics</button>
    <button onClick={() => toggleTab("business")} className="tab">Business</button>
    <button onClick={() => toggleTab("technology")} className="tab">Technology</button>
    <button onClick={() => toggleTab("culture")} className="tab">Culture</button>
    <button onClick={() => toggleTab("all")} className="tab">All articles</button>
    </div>
    <Articles articles={articles} selectedTab={selectedTab} />
    </>
  )
}

export default Home;