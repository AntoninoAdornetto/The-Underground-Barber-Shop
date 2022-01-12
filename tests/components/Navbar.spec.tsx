import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import Navbar from '@components/Navbar';

let container: any = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container?.remove();
  container = null;
});

describe('Check navbar funcationality', () => {
  it("Should render the array of strings as anchor elements with #ID's as href", () => {
    const navigation: string[] = ['Home', 'About', 'Contact'];
    render(<Navbar navOptions={navigation} />, container);
    const links = screen.getAllByRole('link');
    links.forEach((item, i) => {
      expect(item).toHaveAttribute('href', `#${navigation[i].toLowerCase()}`);
    });
  });
});
