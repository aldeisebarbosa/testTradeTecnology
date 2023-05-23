import React, { useState } from 'react';
import api from '../../api';

const Login: React.FC = () => {
  const [apiKey, setApiKey] = useState('');

  const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };
  const result = await api.get('https://www.api-football.com/', {email, password});
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para realizar o login com a API key
    // Você pode usar o estado 'apiKey' para fazer as requisições à API-Football
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" value={apiKey} onChange={handleApiKeyChange} placeholder="API Key" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
