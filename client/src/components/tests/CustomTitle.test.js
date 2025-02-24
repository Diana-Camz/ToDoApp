jest.mock('../../styles/fontsTheme.js', () => ({
    fontsTheme: {
      title: { fontSize: 20, fontWeight: 'bold' },
      subtitle: { fontSize: 16 },
    },
  }));

import React from 'react';
import { render } from '@testing-library/react-native';
import CustomTitle from '../CustomTitle';

describe('CustomTitle Component', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(<CustomTitle title="Hello World" type="title" />);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('applies the correct numberOfLines prop', () => {
    const { getByText } = render(<CustomTitle title="Multiline Text" type="subtitle" numberOfLines={2} />);
    expect(getByText('Multiline Text').props.numberOfLines).toBe(2);
  });

  it('applies the correct style from fontsTheme', () => {
    const { getByText } = render(<CustomTitle title="Styled Text" type="title" />);
    const textElement = getByText('Styled Text');

    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 20, fontWeight: 'bold' }),
      ])
    );
  });
});