import React from 'react';
import Header from '../components/Header.jsx';
import NewsFeed from '../components/NewsFeed.jsx';
import Stats from '../components/Stats.jsx';

const Home = () => {
    return (
      <div className="app">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__body">
          <div className="app__container">
            <NewsFeed />
            <Stats />  
          </div>
        </div>
      </div>
    )
}

export default Home
