import React, {useEffect, useState} from 'react';
import LocaleEnum from '../enums/LocaleEnum';
import ILocale from '../locales/ILocale';
import {ILocales} from '../locales/locales';

const initialState = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeLocale: (locale: LocaleEnum) => console.warn('Not implemented yet'),
  locale: undefined,
  intl: undefined,
};

interface ILocaleContext {
  changeLocale: (locale: LocaleEnum) => void;
  locale?: LocaleEnum;
  intl?: ILocale;
}

interface ILocaleProviderProps {
  children: JSX.Element;
  locales: ILocales;
  language: LocaleEnum;
  defaultLocale: LocaleEnum;
}

export const LocaleContext = React.createContext<ILocaleContext>(initialState);
function LocaleProvider({
  children,
  locales,
  language,
  defaultLocale = LocaleEnum.pt_br,
}: ILocaleProviderProps) {
  const [locale, setLocale] = useState<LocaleEnum | undefined>(
    initialState.locale,
  );
  const [intl, setIntl] = useState<ILocale | undefined>(initialState.intl);

  function changeLocale(newLocale: LocaleEnum) {
    setLocale(newLocale);
    console.log('XX', locales, newLocale);
    let newIntl = locales[newLocale];
    if (!newIntl) {
      newIntl = locales[defaultLocale];
    }
    setIntl(newIntl);
  }

  useEffect(() => {
    changeLocale(language);
  }, [language]);

  return (
    <LocaleContext.Provider value={{changeLocale, locale, intl}}>
      {children}
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;
