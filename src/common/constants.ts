import { Platform } from 'react-native';
import { Dimensions } from 'react-native';

export const EMPTY_ACTION = () => true;
export const { width } = Dimensions.get('screen');
export const EMPTY_VALUE = '';
export const initCode = (otpLength: number) => new Array(otpLength).fill('');
export const keysValid = (str: string) => /^\d+$/gi.test(str);

const majorVersionIOS = parseInt(String(Platform.Version), 10);
export const isAutoFillSupported =
  Platform.OS === 'ios' && majorVersionIOS >= 12;
