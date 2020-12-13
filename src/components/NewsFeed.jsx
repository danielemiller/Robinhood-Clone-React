import React, { useState, useEffect } from 'react';
import './NewsFeed.css';
import NewsArticle from './NewsArticle';
import LineGraph from './LineGraph';
import MoreHorizIcon from '@material-ui/core';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import TimeLine from './TimeLine';
import Chip from '@material-ui/core/Chip';
import { Avatar } from '@material-ui/core';

const NewsFeed = () => {
    const [popularTopics, setPopularTopics] = useState([
        'Technology',
        'Top Movies',
        'Upcoming Earnings', 
        'Crypto', 
        'Cannabis', 
        'Healthcare Supplies', 
        'Index ETFs', 
        'Technology', 
        'China', 
        'Pharma'
    ])

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="newsfeed">
          <div className="newsfeed__container">
            <div className="newsfeed__chart_section">
                <div className="newsfeed__price__asset">
                    <h1>$114,656</h1>
                    <p>$44.63 (+0.04%) Today</p>
                </div>
                <div className="newsfeed__chart">
                    <LineGraph />
                    <TimeLine />
                </div>
            </div>
            <div className="newsfeed__buying__section">
                <h2>Buying Power</h2>
                <h2>$4.11</h2>
            </div>
            <div className="newsfeed__market__section">
                <div className="newsfeed__market__box">
                    <p>Markets are closed</p>
                    <h1>Happy Thanksgiving</h1>
                </div>
                <div className="newsfeed__popularlists__section">
                  <div className="newsfeed__popularlists__intro">
                      <h1>Popular Lists</h1>
                      <p>Show More</p>
                  </div>
                </div>
                <div className="newsfeed__popularlists__badges">
                  {popularTopics.map((topic) => (
                    <Chip 
                        className="topic__badge"
                        variant="outlined"
                        label={topic}
                        avatar={<Avatar 
                            src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                        />}
                    />
                  ))}
                </div>              
            </div>
            <div className="newsfeed__articles__section">
              <NewsArticle />
            </div>      
          </div>                          
        </div>
    )
}

export default NewsFeed
