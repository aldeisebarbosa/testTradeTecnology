import React, { useState, useEffect } from 'react';
import api from '../../api';

interface League {
  league_id: number;
  league_name: string;
}

interface Props {
  selectedCountryId: number;
}

const LeagueSelector: React.FC<Props> = ({ selectedCountryId }) => {
  const [leagues, setLeagues] = useState<League[]>([]);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await api.get(`/leagues?country_id=${selectedCountryId}`);
        setLeagues(response.data.response);
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedCountryId) {
      fetchLeagues();
    }
  }, [selectedCountryId]);

  const handleLeagueSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLeagueId = parseInt(event.target.value);
    // Lógica para selecionar a liga
    // Você pode usar o ID da liga selecionada para fazer requisições adicionais à API-Football
  };

  return (
    <div>
      <h2>Select League</h2>
      <select onChange={handleLeagueSelect}>
        <option value="">Select a league</option>
        {leagues.map((league) => (
          <option key={league.league_id} value={league.league_id}>
            {league.league_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LeagueSelector;

