import ILocaleCommons from './ILocaleCommons';

export default interface ILocale {
  commons: ILocaleCommons;
  category: {
    registration: {
      title: string;
    };
  };
}
