import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pipeline message', () => {
  render(<App />);
  const element = screen.getByText(/CI\/CD Pipeline Working Successfully!/i);
  expect(element).toBeInTheDocument();
});