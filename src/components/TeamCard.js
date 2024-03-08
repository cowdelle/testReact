import React from "react";

const TeamCard = ({ team }) => {
  const { name, mascot, city, state } = team;

  return (
    <div className="team-card">
      <h2>{name}</h2>
      <p>Mascot: {mascot}</p>
      <p>
        Location: {city}, {state}
      </p>
    </div>
  );
};

export default TeamCard;
