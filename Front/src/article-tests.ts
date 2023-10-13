import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from './Components/Article.tsx'; 

test('article visible correctement', () => {
  render(<Article/>); 
  const element = screen.getByText('Avis');
  expect(element).toBeInTheDocument(); 
});



