import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from '../CustomButton';

jest.mock('../CustomTitle.js', () => {
  const React = require('react');
  const { Text } = require('react-native');

  return ({ title }) => <Text>{title}</Text>;
});
  
  
  describe('CustomButton Component', () => {
    it('renders the title correctly via CustomTitle', () => {
      const { getByText } = render(<CustomButton title="Click Me" />);
      expect(getByText('Click Me')).toBeTruthy();
    });
  
    it('calls the onPress function when pressed', () => {
      const mockPressHandler = jest.fn();
      const { getByText } = render(<CustomButton title="Press Me" onPress={mockPressHandler} />);
      
      fireEvent.press(getByText('Press Me'));
      expect(mockPressHandler).toHaveBeenCalledTimes(1);
    });
  
    it('applies the container style correctly', () => {
      const containerStyle = { backgroundColor: 'red', padding: 10 };
      const { getByTestId } = render(
        <CustomButton title="Styled Button" container={containerStyle} />
      );
  
      const container = getByTestId('custom-button-container'); 
      expect(container.props.style).toMatchObject(containerStyle);
    });
  });