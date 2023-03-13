import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Home from '.';

describe('Home page', () => {
  it('renders home page', () => {
    render(<Home />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
