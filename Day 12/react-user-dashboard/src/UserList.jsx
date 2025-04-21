import React, { useEffect, useState } from 'react';
import './styles.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  // Fetch user data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Update document title with user count every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      document.title = `Users: ${filteredUsers.length}`;
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [users, searchTerm]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="loading">Loading users...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="user-list">
        {filteredUsers.map(user => (
          <li key={user.id} className="user-item">{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
