import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TeamList from "./components/TeamCard";

const App = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("/CollegeBasketballTeams.json")
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error("Error fetching teams:", error));
  }, []);

  return (
    <div className="App">
      <Header />
      <TeamList team={teams} />
    </div>
  );
};

export default App;
