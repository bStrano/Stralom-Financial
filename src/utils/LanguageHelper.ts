import {NativeModules, Platform} from 'react-native';
import LocaleEnum from '../enums/LocaleEnum';

class LanguageHelper {
  static getLanguage(): LocaleEnum {
    if (Platform.OS === 'ios') {
      return (
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      );
    } else {
      return NativeModules.I18nManager.localeIdentifier;
    }
  }

  static getEnumLanguage() {
    return LocaleEnum[this.getLanguage()];
  }
}

export default LanguageHelper;
