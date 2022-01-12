import { render } from '@testing-library/react';
import Hero from '@components/Hero';

describe('Hero Image component that loads an image onto the page', () => {
  it('render an image to the page', () => {
    render(<Hero image="hero.jpg" />);
  });
});
