import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../frontend/src/App';

test('renders Dashboard text', () => {
  render(<App />);
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
});
