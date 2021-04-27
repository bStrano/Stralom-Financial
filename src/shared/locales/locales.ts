import pt_br from './pt_br';
import ILocale from './ILocale';

export interface ILocales {
  pt_br?: ILocale;
}

const locales: ILocales = {
  pt_br: pt_br,
};

export default locales;
