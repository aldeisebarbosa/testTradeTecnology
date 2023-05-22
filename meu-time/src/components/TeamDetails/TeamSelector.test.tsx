import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TeamSelector from './TeamSelector';

describe('TeamSelector', () => {
  it('should render select options based on provided teams', () => {
    const teams = [
      { team_id: 1, team_name: 'Team 1' },
      { team_id: 2, team_name: 'Team 2' },
    ];
    const { getByText } = render(<TeamSelector teams={teams} />);
    expect(getByText('Team 1')).toBeInTheDocument();
    expect(getByText('Team 2')).toBeInTheDocument();
  });

  it('should call handleTeamSelect function with the selected team ID when a team is selected', () => {
    const mockHandleTeamSelect = jest.fn();
    const { getByText } = render(
      <TeamSelector handleTeamSelect={mockHandleTeamSelect} />
    );
    fireEvent.change(getByText('Select a team'), { target: { value: '1' } });
    expect(mockHandleTeamSelect).toHaveBeenCalledWith(1);
  });
});

