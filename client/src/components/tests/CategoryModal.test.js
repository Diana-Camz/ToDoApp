import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CategoryModal from '../CategoryModal';

// ✅ Mock de CustomTitle
jest.mock('../CustomTitle.js', () => {
    const React = require('react');
    const { Text } = require('react-native');
  
    return ({ title }) => <Text>{title}</Text>;
  });

// ✅ Mock de CustomButton
jest.mock('../CustomButton', () => ({ title, onPress }) => {
    const React = require('react');
    const { Text } = require('react-native');
  <Text onPress={onPress}>{title}</Text>
});

// ✅ Mock de CustomIcon
jest.mock('../CustomIcon', () => ({ onPress }) => {
    const React = require('react');
    const { Text } = require('react-native');
  <Text onPress={onPress}>CloseIcon</Text>
});

// ✅ Mock de SelectCategory
jest.mock('../SelectCategory', () => ({ title, onPress }) => {
    const React = require('react');
    const { Text } = require('react-native');
  <Text onPress={onPress}>{title}</Text>
});

// ✅ Mock del hook useAllCategories
jest.mock('../../hooks/useAllCategories.js', () => ({
  useAllCategories: () => ({
    allCategories: [
      { id: 1, name: 'Work', image_url: 'work.png' },
      { id: 2, name: 'Personal', image_url: 'personal.png' },
    ],
  }),
}));

describe('CategoryModal Component', () => {
  const mockSetModalVisible = jest.fn();
  const mockSetCategoryText = jest.fn();
  const mockSetSelectedCategories = jest.fn();

  const defaultProps = {
    modalVisible: true,
    setModalVisible: mockSetModalVisible,
    setCategoryText: mockSetCategoryText,
    selectedCategories: [],
    setSelectedCategories: mockSetSelectedCategories,
  };

  it('renders the modal when modalVisible is true', () => {
    const { getByText } = render(<CategoryModal {...defaultProps} />);
    expect(getByText('Select Categories')).toBeTruthy();
  });

  it('renders the categories correctly', async () => {
    const { findByText } = render(<CategoryModal {...defaultProps} />);
    expect(await findByText('Work')).toBeTruthy();
    expect(await findByText('Personal')).toBeTruthy();
  });

  it('closes the modal when the close icon is pressed', () => {
    const { getAllByTestId } = render(<CategoryModal {...defaultProps} />);
    fireEvent.press(getAllByTestId('close-circle-outline'));
    expect(mockSetModalVisible).toHaveBeenCalledWith(false);
  });

  it('calls setCategoryText and closes modal when "Done" is pressed', async () => {
    const updatedProps = { ...defaultProps, selectedCategories: [1] };
    const { getByText } = render(<CategoryModal {...updatedProps} />);
    fireEvent.press(getByText('Done'));

    await waitFor(() => {
      expect(mockSetCategoryText).toHaveBeenCalledWith('Work');
      expect(mockSetModalVisible).toHaveBeenCalledWith(false);
    });
  });

  it('selects and deselects categories when pressed', () => {
    const { getByText } = render(<CategoryModal {...defaultProps} />);
    const workCategory = getByText('Work');

    // Selección de categoría
    fireEvent.press(workCategory);
    expect(mockSetSelectedCategories).toHaveBeenCalledWith([1]);

    // Deselección de categoría
    fireEvent.press(workCategory);
    expect(mockSetSelectedCategories).toHaveBeenCalledWith([]);
  });
});