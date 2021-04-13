import {useContext} from 'react';
import {LocaleContext} from '../providers/LocaleProvider';
import ILocale from '../locales/ILocale';

interface IUserLocale {
  intl?: ILocale;
}

function useLocale() {
  let {intl} = useContext(LocaleContext);

  let res: IUserLocale = {
    intl,
  };
  return res;
}

export default useLocale;
