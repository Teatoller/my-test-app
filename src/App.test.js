import { render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('App', () => {
  test('renders App component', async () => {
    render(<App />);
 
    // wait for the user to resolve
    // needs only be used in our special case
    await screen.findByText(/Signed in as/);
 
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
 
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
 
    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
  });
});

describe('App', () => {
  test('renders App component', async () => {
    render(<App />);
 
    // wait for the user to resolve
    await screen.findByText(/Signed in as/);
 
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    // screen.debug();
 
    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
    // screen.debug();
    expect(
      screen.getByText(/Searches for JavaScript/)
    ).toBeInTheDocument();
  });
});

