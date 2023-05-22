import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LeagueSelector from './LeagueSelector';

describe('LeagueSelector', () => {
  it('should render select options based on provided leagues', () => {
    const leagues = [
      { league_id: 1, league_name: 'League 1' },
      { league_id: 2, league_name: 'League 2' },
    ];
    const { getByText } = render(<LeagueSelector leagues={leagues} />);
    expect(getByText('League 1')).toBeInTheDocument();
    expect(getByText('League 2')).toBeInTheDocument();
  });

  it('should call handleLeagueSelect function with the selected league ID when a league is selected', () => {
    const mockHandleLeagueSelect = jest.fn();
    const { getByText } = render(
      <LeagueSelector handleLeagueSelect={mockHandleLeagueSelect} />
    );
    fireEvent.change(getByText('Select a league'), { target: { value: '1' } });
    expect(mockHandleLeagueSelect).toHaveBeenCalledWith(1);
  });
});
