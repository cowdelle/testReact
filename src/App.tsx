import React from "react";
import basketballTeamsData from "./CollegeBasketballTeams.json";
import "./App.css"; // Import CSS file

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

const basketballTeams: TeamProps[] = basketballTeamsData.teams;

function Welcome() {
  return <h1>Basketball Teams List</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="card">
        <h3>Name: {oneTeam.school}</h3>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {basketballTeams.map((oneTeam, index) => (
        <Team key={index} {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
