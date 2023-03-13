import { ViewStyle } from 'react-native';
import { IVariant } from '../otp-input/types';

export interface IBoxDigitProps {
  isValueFocused: boolean;
  handleOnPress: () => void;
  digit: string;
  pinCount: number;
  boxSelectedStyle?: ViewStyle;
  boxStyle?: ViewStyle;
  digitStyle?: ViewStyle;
  variant: IVariant;
}
