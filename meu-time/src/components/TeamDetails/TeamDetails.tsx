import React, { useState, useEffect } from 'react';
import api from '../../api';

interface Player {
  player_name: string;
  age: number;
  nationality: string;
}

interface TeamDetails {
  formation: string;
  statistics: {
    games: {
      total: number;
    };
    wins: {
      total: number;
    };
  };
}

interface Props {
  selectedTeamId: number;
}

const TeamDetails: React.FC<Props> = ({ selectedTeamId }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [teamDetails, setTeamDetails] = useState<TeamDetails | null>(null);

  useEffect(() => {
    const fetchTeamDetails = async () => {
      try {
        const response = await api.get(`/teams/statistics?team_id=${selectedTeamId}`);
        setTeamDetails(response.data.response[0]);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPlayers = async () => {
      try {
        const response = await api.get(`/players?team_id=${selectedTeamId}`);
        setPlayers(response.data.response);
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedTeamId) {
      fetchTeamDetails();
      fetchPlayers();
    }
  }, [selectedTeamId]);

  return (
    <div>
      <h2>Team Details</h2>
      {teamDetails && (
        <div>
          <h3>Formation: {teamDetails.formation}</h3>
          <h3>Total Games: {teamDetails.statistics.games.total}</h3>
          <h3>Total Wins: {teamDetails.statistics.wins.total}</h3>
        </div>
      )}
      <h3>Players:</h3>
      <ul>
        {players.map((player) => (
          <li key={player.player_name}>
            {player.player_name} - Age: {player.age} - Nationality: {player.nationality}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamDetails;
