import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Select a feature to view:</p>
      <ul>
        <li><Link to="/dashboard/101">Feature 101</Link></li>
        <li><Link to="/dashboard/202">Feature 202</Link></li>
        <li><Link to="/dashboard/303">Feature 303</Link></li>
      </ul>
    </div>
  );
};

export default Home;
