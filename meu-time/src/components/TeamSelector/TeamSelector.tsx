import React, { useState, useEffect } from 'react';
import api from '../../api';

interface Team {
  team_id: number;
  team_name: string;
}

interface Props {
  selectedLeagueId: number;
}

const TeamSelector: React.FC<Props> = ({ selectedLeagueId }) => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await api.get(`/teams?league_id=${selectedLeagueId}`);
        setTeams(response.data.response);
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedLeagueId) {
      fetchTeams();
    }
  }, [selectedLeagueId]);

  const handleTeamSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTeamId = parseInt(event.target.value);
    // Lógica para selecionar o time
    // Você pode usar o ID do time selecionado para fazer requisições adicionais à API-Football
  };

  return (
    <div>
      <h2>Select Team</h2>
      <select onChange={handleTeamSelect}>
        <option value="">Select a team</option>
        {teams.map((team) => (
          <option key={team.team_id} value={team.team_id}>
            {team.team_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TeamSelector;

