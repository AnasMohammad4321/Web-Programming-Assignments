import React, { useEffect, useState } from 'react';

// Function to generate a hash from a string (team name in this case)
const stringToColor = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}

const Leaderboard = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/leaderboard')
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Check the received data here
        setTeams(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Team Name</th>
          <th>Total Games Played</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {teams.map(team => (
          <tr key={team.rank}>
            <td>{team.rank}</td>
            <td>
              <img 
                src={`https://via.placeholder.com/50/${stringToColor(team.teamName).substring(1)}/FFFFFF.png?text=${team.teamName[0]}`} 
                className="icon" 
                alt="icon" 
                style={{ backgroundColor: stringToColor(team.teamName) }}
              />
              {team.teamName}
            </td>
            <td>{team.gamesPlayed}</td>
            <td>{team.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Leaderboard;
