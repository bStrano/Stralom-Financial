import TransactionCategoryScreen
    from '../src/modules/Transactions/views/screens/Category/List/TransactionCategoryScreen';
import renderer from 'react-test-renderer';
import React from 'react';
import TransactionCategoryRegisterScreen
    from '../src/modules/Transactions/views/screens/Category/Register/TransactionCategoryRegisterScreen';
import pt_br from '../src/shared/locales/pt_br';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useFocusEffect: () => jest.fn(),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

const mockPT_BR = pt_br;
jest.mock('../src/shared/hooks/useLocale', () => {
  return () => ({intl: mockPT_BR});
});

describe('TransactionCategory', () => {
  test('Lister Category Screen', () => {
    const categoryScreen = renderer.create(<TransactionCategoryScreen />).toJSON();
    expect(categoryScreen).toMatchSnapshot();
  });

  test('Register Screen', () => {
    const categoryScreen = renderer.create(<TransactionCategoryRegisterScreen />).toJSON();
    expect(categoryScreen).toMatchSnapshot();
  });
});
