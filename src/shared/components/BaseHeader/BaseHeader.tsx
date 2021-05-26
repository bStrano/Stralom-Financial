import React, {useMemo} from 'react';
import {Header, ICON_CLASS, IIcon, useTheme} from 'react-native-stralom-components';
import {useNavigation} from '@react-navigation/native';

export enum NAVIGATION_TYPE {
  CUSTOM,
  BACK,
  CLOSE,
}

interface IBaseHeaderProps {
  type: NAVIGATION_TYPE;
  iconLeft?: IIcon;
  title: string;
}

function BaseHeader(props: IBaseHeaderProps) {
  const theme = useTheme();
  const navigation = useNavigation();

  const iconLeft = useMemo(() => {
    switch (props.type) {
      case NAVIGATION_TYPE.BACK:
        return {
          name: 'arrow-back',
          class: ICON_CLASS.MaterialIcons,
          onPress: navigation.goBack,
        };
      case NAVIGATION_TYPE.CLOSE:
        return {
          name: 'close',
          class: ICON_CLASS.MaterialIcons,
          onPress: navigation.goBack,
        };
      default:
        return props.iconLeft;
    }
  }, [props.type, props.iconLeft]);

  return <Header {...props} fontColor={theme.primary.main.font} title={props.title} fontFamily={theme.fontFamily.medium} iconLeft={iconLeft} />;
}

export default BaseHeader;
