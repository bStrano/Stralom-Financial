import React, {useState} from 'react';
import LocaleEnum from '../enums/LocaleEnum';
import ILocale from '../locales/ILocale';
import locales, {ILocales} from '../locales/locales';

const initialState = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeLocale: (locale: LocaleEnum) => console.warn('Not implemented yet'),
  locale: undefined,
  intl: undefined,
};

interface ILocaleContext {
  changeLocale: (locale: LocaleEnum) => void;
  locale: LocaleEnum | undefined;
  intl: ILocale | undefined;
}

interface ILocaleProviderProps {
  children: JSX.Element;
  locales: ILocales;
}

export const LocaleContext = React.createContext<ILocaleContext>(initialState);
function LocaleProvider(props: ILocaleProviderProps) {
  const [locale, setLocale] = useState<LocaleEnum | undefined>(
    initialState.locale,
  );
  const [intl, setIntl] = useState<ILocale | undefined>(initialState.intl);

  function changeLocale(newLocale: LocaleEnum) {
    setLocale(newLocale);
    setIntl(locales[newLocale]);
  }

  return (
    <LocaleContext.Provider value={{changeLocale, locale, intl}}>
      {props.children}
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;
