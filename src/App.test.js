import {render, screen} from '@testing-library/react';
import Dashboard from "./views/components/Dashboard";

test('render dashboard page ', () => {
  render(<Dashboard/>);
  const linkElement = screen.getByText(/GitHub Search Application/i);
  expect(linkElement).toBeInTheDocument();
});
