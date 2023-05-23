import axios, { AxiosResponse } from 'axios';

const API_KEY = 'a7d327b5c1mshd5bcd9a2dedf6a2p1bf294jsncda99d213a41'; // Insira sua API key aqui

interface ApiResponse<T> {
  data: T | null;
  error?: string;
}

// Função genérica para fazer a chamada GET à API
async function get<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse<T> = await axios.get(url, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      },
    });

    return {
      data: response.data,
    };
  } catch (error) {
    return {
      data: null,
      error: 'Failed to fetch data from the API.',
    };
  }
}

export async function getLeaguesByCountry(countryId: number) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?country_id=${countryId}`;
  return get(url);
}

export async function getTeamsByLeague(leagueId: number) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/teams?league_id=${leagueId}`;
  return get(url);
}

export async function getTeamDetails(teamId: number) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/teams?id=${teamId}`;
  return get(url);
}

export async function getPlayersByTeam(teamId: number) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/players?team_id=${teamId}`;
  return get(url);
}
