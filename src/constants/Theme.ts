let fontFamily = {
  regular: 'Montserrat-Regular',
  medium: 'Montserrat-Medium',
  thin: 'Montserrat-Thin',
  light: 'Montserrat-Light',
  bold: 'Montserrat-Bold',
};

const theme = {
  primary: {
    light: {
      color: '#560BAD',
      font: '#000',
    },
    main: {
      color: '#480CA8',
      font: '#000',
    },
    dark: {
      color: '#3A0CA3',
      font: '#fff',
    },
    textColor: '#000',
  },
  secondary: {
    light: {
      color: '#f6a5c0',
      font: '#000',
    },
    main: {
      color: '#f48fb1',
      font: '#000',
    },
    dark: {
      color: '#aa647b',
      font: '#000',
    },
    textColor: '#000',
  },
  error: {
    light: {
      color: '#e57373',
      font: '#fff',
    },
    main: {
      color: '#f44336',
      font: '#fff',
    },
    dark: {
      color: '#d32f2f',
      font: '#fff',
    },
    textColor: '#fff',
  },
  warning: {
    light: {
      color: '#ffb74d',
      font: '#fff',
    },
    main: {
      color: '#ff9800',
      font: '#fff',
    },
    dark: {
      color: '#f57c00',
      font: '#fff',
    },
    textColor: '#fff',
  },
  info: {
    light: {
      color: '#64b5f6',
      font: '#fff',
    },
    main: {
      color: '#2196f3',
      font: '#fff',
    },
    dark: {
      color: '#1976d2',
      font: '#fff',
    },
    textColor: '#fff',
  },
  success: {
    light: {
      color: '#81c784',
      font: '#fff',
    },
    main: {
      color: '#4caf50',
      font: '#fff',
    },
    dark: {
      color: '#388e3c',
      font: '#fff',
    },
    textColor: '#fff',
  },
  background: '#dcdcdc',
  surface: '#fff',
  border: 'black',
  fontFamily: {
    regular: fontFamily.regular,
    medium: fontFamily.medium,
    thin: fontFamily.thin,
    light: fontFamily.light,
    bold: fontFamily.bold,
  },
  typography: {
    title: {
      fontFamily: fontFamily.bold,
      fontSize: 18,
    },
    subtitle: {
      fontFamily: fontFamily.medium,
      fontSize: 14,
    },
    regular: {
      fontFamily: fontFamily.regular,
      fontSize: 14,
    },
    caption: {
      fontFamily: fontFamily.thin,
      fontSize: 12,
    },
  },
};

export default theme;
