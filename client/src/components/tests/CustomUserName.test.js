import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomUserName from '../CustomUserName';

jest.mock('../CustomTitle.js', () => {
    const React = require('react');
    const { Text } = require('react-native');
  
    return ({ title }) => <Text>{title}</Text>;
  });

// ✅ Mock de imageMapping para controlar la imagen devuelta
jest.mock('../../data/imageMapping', () => ({
  avatar2: require('../../../assets/avatar2.webp'),
}));

describe('CustomUserName Component', () => {
  const mockProps = {
    name: 'John',
    lastname: 'Doe',
    image_url: 'avatar2',
  };

  it('renders the user name and lastname', () => {
    const { getByText } = render(<CustomUserName {...mockProps} screen="home" />);
    expect(getByText('John Doe')).toBeTruthy(); 
  });

  it('renders welcome text on the home screen', () => {
    const { getByText } = render(<CustomUserName {...mockProps} screen="home" />);
    expect(getByText('Hello! what will we do today?')).toBeTruthy(); 
  });

  it('does not render welcome text on other screens', () => {
    const { queryByText } = render(<CustomUserName {...mockProps} screen="profile" />);
    expect(queryByText('Hello! what will we do today?')).toBeNull();
  });

  it('renders the log out button on the home screen', () => {
    const { getByText } = render(<CustomUserName {...mockProps} screen="home" />);
    expect(getByText('Log out')).toBeTruthy(); 
  });

  it('does not render the log out button on other screens', () => {
    const { queryByText } = render(<CustomUserName {...mockProps} screen="settings" />);
    expect(queryByText('Log out')).toBeNull();
  });

  it('renders the correct image source', () => {
    const { getByTestId } = render(<CustomUserName {...mockProps} screen="home" />);
    const image = getByTestId('image');
    expect(image.props.source).toMatchObject({ uri: expect.any(String) }); 
  });
});