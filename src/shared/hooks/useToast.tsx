import React, {useCallback, useContext} from 'react';
import Toast from 'react-native-toast-message';
import {LocaleContext} from '../providers/LocaleProvider';

function useToast() {
  let {intl} = useContext(LocaleContext);
  const showError = useCallback(
    (title?: string, subtitle?: string) => {
      Toast.show({
        type: 'error',
        text1: title ? title : intl?.commons.errors.requestTitle,
        text2: subtitle ? subtitle : intl?.commons.errors.requestSubtitle,
        position: 'top',
        visibilityTime: 4000,
        autoHide: true,
      });
    },
    [intl],
  );

  return {showError};
}

export default useToast;
