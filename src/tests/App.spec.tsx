import { render, screen } from '@testing-library/react';
import App from '../App';
import { fetchTodos } from '../services/todoService';

jest.mock('../services/todoService');
jest.mock('../helpers/helpers');


describe('App', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('renders loading message when todos are being fetched', () => {
    (fetchTodos as jest.Mock).mockResolvedValue([]);
    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders error message when todos fail to fetch', async () => {
    const errorMessage = 'Failed to fetch todos';
    (fetchTodos as jest.Mock).mockRejectedValue(errorMessage);
    render(<App />);
    expect(await screen.findByText('Oops try again later!')).toBeInTheDocument();
  });
});