import React from 'react';
import DashboardCard from '../components/DashboardCard';
import Header from '../components/Header';
import Stats from '../components/Stats';

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
