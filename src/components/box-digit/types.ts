import { ViewStyle } from 'react-native';

export interface IBoxDigitProps {
  isValueFocused: boolean;
  handleOnPress: () => void;
  digit: string;
  pinCount: number;
  boxSelectedStyle?: ViewStyle;
  boxStyle?: ViewStyle;
  digitStyle?: ViewStyle;
}
