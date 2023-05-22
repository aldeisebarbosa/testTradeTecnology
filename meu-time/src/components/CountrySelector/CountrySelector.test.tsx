import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CountrySelector from './CountrySelector';

describe('CountrySelector', () => {
  it('should render select options based on provided countries', () => {
    const countries = [
      { country_id: 1, country_name: 'Country 1' },
      { country_id: 2, country_name: 'Country 2' },
    ];
    const { getByText } = render(<CountrySelector countries={countries} />);
    expect(getByText('Country 1')).toBeInTheDocument();
    expect(getByText('Country 2')).toBeInTheDocument();
  });

  it('should call handleCountrySelect function with the selected country ID when a country is selected', () => {
    const mockHandleCountrySelect = jest.fn();
    const { getByText } = render(
      <CountrySelector handleCountrySelect={mockHandleCountrySelect} />
    );
    fireEvent.change(getByText('Select a country'), { target: { value: '1' } });
    expect(mockHandleCountrySelect).toHaveBeenCalledWith(1);
  });
});

