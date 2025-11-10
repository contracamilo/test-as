import { render, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import { mockTodos } from './mocks/todos';

describe('TodoList', () => {

  it('renders the list of todos', () => {
    const { getByText } = render(<TodoList todos={mockTodos} onToggle={() => {}} />);
    
    mockTodos.forEach(todo => {
      const todoElement = getByText(todo.title);
      expect(todoElement).toBeInTheDocument();
    });
  });

  it('calls the onToggle function when a checkbox is clicked', () => {
    const onToggle = jest.fn();
    const { getByLabelText } = render(<TodoList todos={mockTodos} onToggle={onToggle} />);
    
    mockTodos.forEach(todo => {
      const checkbox = getByLabelText(todo.title) as HTMLInputElement;
      fireEvent.click(checkbox);
      expect(onToggle).toHaveBeenCalledWith(todo.id);
    });
  });
});