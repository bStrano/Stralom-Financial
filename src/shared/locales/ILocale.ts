import ILocaleCommons from './ILocaleCommons';

export default interface ILocale {
  commons: ILocaleCommons;
  category: {
    registration: {
      title: string;
    };
    delete: {
      title: string;
      confirmation: string;
    };
  };
}
