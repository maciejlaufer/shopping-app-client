import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div>
    Dashboard
    <Link to="/auth">Login</Link>
  </div>
);

export default Dashboard;
