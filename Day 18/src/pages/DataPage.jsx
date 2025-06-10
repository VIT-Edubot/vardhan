import React from "react";
import useFetchData from "../hooks/useFetchData";

const DataPage = () => {
  const { data, error, isLoading, refetch } = useFetchData();

  return (
    <div className="container">
      <h2>Users List</h2>
      <button onClick={refetch}>Refetch</button>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataPage;
