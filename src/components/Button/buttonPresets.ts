import {TextProps} from 'react-native';

import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';

import {ButtonPreset} from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: {color: ThemeColors; textProps?: TextProps};
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  Primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: {color: 'primaryContrast'},
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: {color: 'gray2'},
    },
  },

  Outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: {color: 'primary'},
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: {color: 'gray2'},
    },
  },
};
