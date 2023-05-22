import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('should update API key input value when changed', () => {
    const { getByPlaceholderText } = render(<Login />);
    const apiKeyInput = getByPlaceholderText('API Key');
    fireEvent.change(apiKeyInput, { target: { value: 'YOUR_API_KEY' } });
    expect(apiKeyInput.value).toBe('YOUR_API_KEY');
  });

  it('should call handleLogin function with the entered API key when form is submitted', () => {
    const mockHandleLogin = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <Login handleLogin={mockHandleLogin} />
    );
    const apiKeyInput = getByPlaceholderText('API Key');
    fireEvent.change(apiKeyInput, { target: { value: 'YOUR_API_KEY' } });
    fireEvent.click(getByText('Login'));
    expect(mockHandleLogin).toHaveBeenCalledWith('YOUR_API_KEY');
  });
});
