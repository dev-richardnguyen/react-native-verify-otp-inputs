import { ViewStyle, TextStyle } from 'react-native';

export interface IOTPInput {
  onSubmit: (otp: string) => void;
  pinCount?: number;
  boxSelectedStyle?: ViewStyle;
  boxStyle?: ViewStyle;
  digitStyle?: TextStyle;
  boxContainerStyle?: ViewStyle;
}
