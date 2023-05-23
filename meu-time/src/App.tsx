import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import CountrySelector from './components/CountrySelector/CountrySelector';
import LeagueSelector from './components/LeagueSelector/LeagueSelector';
import TeamDetails from './components/TeamDetails/TeamDetails';
import TeamSelector from './components/TeamSelector/TeamSelector';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
        <CountrySelector/>
        <LeagueSelector selectedCountryId={0}/>
        <TeamDetails selectedTeamId={0}/>
        <TeamSelector selectedLeagueId={0}/>
      </header>
    </div>
  );
}

export default App;
