import React, { useContext, useState, useMemo, useCallback } from "react";
import { ThemeContext } from "./ThemeContext";

const users = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "Diana Prince",
  "Evan Peters",
  "Fiona Gallagher",
  "George Martin",
  "Hannah Lee",
  "Ian Wright",
  "Jasmine Patel",
  "Kevin Durant",
  "Lara Croft",
  "Michael Scott",
  "Nina Williams",
  "Oscar Isaac",
  "Pam Beesly",
  "Quinn Fabray",
  "Rachel Green",
  "Steve Rogers",
  "Tony Stark",
  "Uma Thurman",
  "Victor Stone",
  "Wanda Maximoff",
  "Xander Harris",
  "Yvonne Strahovski",
  "Zachary Levi"
];


function UserList() {
  const [search, setSearch] = useState("");
  const { toggleTheme } = useContext(ThemeContext);

  // Memoize the filtered user list
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // Memoize the search input handler
  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
