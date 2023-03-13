import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import App from './App';

describe('App component', () => {
  it('renders home page', () => {
    render(<App />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
