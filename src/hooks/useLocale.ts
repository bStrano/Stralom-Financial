import {useContext} from 'react';
import {LocaleContext} from '../providers/LocaleProvider';

function useLocale() {
  return useContext(LocaleContext);
}

export default useLocale;
