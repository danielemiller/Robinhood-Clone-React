import React from 'react';
import DashboardCard from '../components/DashboardCard';
import Header from '../components/Header';
import LineGraph from '../components/LineGraph';
import NewsFeed from '../components/NewsFeed';
import Stats from '../components/Stats';
import TimeLine from '../components/TimeLine';

const Dashboard = () => {
    return (
        <div>
          <Header />  
          <DashboardCard />
          <Stats />
        </div>
    )
}

export default Dashboard
