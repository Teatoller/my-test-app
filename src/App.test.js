import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    // screen.debug();
    // screen.getByRole('');
    const linkElement = screen.getByText('Search:');
    expect(linkElement).toBeInTheDocument();

    // expect(screen.getByText('Search:')).toBeInTheDocument();

    expect(screen.getByRole('textbox')).toBeInTheDocument();

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });

  test('renders App component', async () => {
    render(<App />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();
    // screen.debug();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    // screen.debug();
  });
});

