import React from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Feature data for ID: {id}</p>
    </div>
  );
};

export default Dashboard;
