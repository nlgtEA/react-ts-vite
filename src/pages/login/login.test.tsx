import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Login from '.';

describe('Login page', () => {
  it('renders login form', () => {
    render(<Login />);

    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
});
