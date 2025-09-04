import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Component', () => {
  test('renders title and subtitle correctly', () => {
    const title = "Test Dashboard";
    const subtitle = "Welcome to testing!";
    
    render(<Header title={title} subtitle={subtitle} />);
    
    expect(screen.getByText("Test Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Welcome to testing!")).toBeInTheDocument();
  });

  test('renders with default props', () => {
    render(<Header title="Default Title" />);
    
    expect(screen.getByText("Default Title")).toBeInTheDocument();
  });

  test('has correct CSS class', () => {
    render(<Header title="Test" subtitle="Test subtitle" />);
    
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('header');
  });
});