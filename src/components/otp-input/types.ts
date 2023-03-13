import { ViewStyle, TextStyle } from 'react-native';

export type IVariant = 'default' | 'security' | 'underlined';
export interface IOTPInput {
  onSubmit: (otp: string) => void;
  pinCount?: number;
  boxSelectedStyle?: ViewStyle;
  boxStyle?: ViewStyle;
  digitStyle?: TextStyle;
  boxContainerStyle?: ViewStyle;
  variant?: IVariant;
}
