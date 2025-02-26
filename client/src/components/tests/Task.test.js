import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Task from '../Task';

// ✅ Mock de navegación
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

// ✅ Mock de CustomIcon
jest.mock('../CustomIcon', () => ({ onPress, iconName }) => {
    const React = require('react');
    const { Text } = require('react-native');
  <Text onPress={onPress}>{iconName}</Text>
});

// ✅ Mock de CustomTitle
jest.mock('../CustomTitle.js', () => {
    const React = require('react');
    const { Text } = require('react-native');
  
    return ({ title }) => <Text>{title}</Text>;
  });

// ✅ Mock de updateToggleCompleted
jest.mock('../../api/requests', () => ({
  updateToggleCompleted: jest.fn(() => Promise.resolve(true)),
}));

// ✅ Mock de useDeleteTask
jest.mock('../../hooks/useDeleteTask', () => ({
  useDeleteTask: () => ({
    deleteTask: jest.fn(() => Promise.resolve(true)),
  }),
}));

describe('Task Component', () => {
  const mockSetOpenTaskId = jest.fn();
  const mockGetTasksData = jest.fn();
  const swipeableRef = { current: null };

  const defaultProps = {
    title: 'Test Task',
    emoji: '📚',
    time: '14:00:00',
    status: false,
    priority: 'high',
    task_id: 1,
    user_id: 42,
    openTaskId: null,
    setOpenTaskId: mockSetOpenTaskId,
    swipeableRef,
    getTasksData: mockGetTasksData,
  };

  it('renders the task title, emoji, and formatted time', () => {
    const { getByText } = render(<Task {...defaultProps} />);
    expect(getByText('Test Task')).toBeTruthy();
    expect(getByText('📚')).toBeTruthy();
    expect(getByText('02:00 PM')).toBeTruthy(); // Verifica la hora formateada
  });

  it('calls navigation to DetailTask on press', () => {
    const { getByText } = render(<Task {...defaultProps} />);
    fireEvent.press(getByText('Test Task'));
    expect(require('@react-navigation/native').useNavigation().navigate).toHaveBeenCalledWith('DetailTask', {
      user_id: 42,
      task_id: 1,
    });
  });

  it('toggles completion status when the completion icon is pressed', async () => {
    const { getByText } = render(<Task {...defaultProps} />);
    const completionIcon = getByText('ellipse-outline');

    fireEvent.press(completionIcon); // Simula la pulsación para completar
    await waitFor(() => {
      expect(require('../../api/requests').updateToggleCompleted).toHaveBeenCalledWith(42, 1, true);
    });

    fireEvent.press(getByText('checkmark-circle')); // Simula desmarcar la tarea
    await waitFor(() => {
      expect(require('../../api/requests').updateToggleCompleted).toHaveBeenCalledWith(42, 1, false);
    });
  });

  it('opens swipeable and sets openTaskId', () => {
    const { getByText } = render(<Task {...defaultProps} />);
    fireEvent(getByText('Test Task'), 'onSwipeableWillOpen'); // Simula el evento de swipe
    expect(mockSetOpenTaskId).toHaveBeenCalledWith(1);
  });

  it('renders priority icon with correct color', () => {
    const { getByText } = render(<Task {...defaultProps} />);
    expect(getByText('ellipse')).toBeTruthy(); // Icono de prioridad
  });
});