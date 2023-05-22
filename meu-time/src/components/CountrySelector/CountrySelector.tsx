import React, { useState, useEffect } from 'react';
import api from '../../api';

interface Country {
  country_id: number;
  country_name: string;
}

const CountrySelector: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await api.get('/countries');
        setCountries(response.data.response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountrySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryId = parseInt(event.target.value);
    // Lógica para selecionar o país
    // Você pode usar o ID do país selecionado para fazer requisições adicionais à API-Football
  };

  return (
    <div>
      <h2>Select Country</h2>
      <select onChange={handleCountrySelect}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.country_id} value={country.country_id}>
            {country.country_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
