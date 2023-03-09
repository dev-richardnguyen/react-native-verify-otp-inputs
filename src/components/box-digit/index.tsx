import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EMPTY_ACTION, width } from '../../common/constants';
import { IBoxDigitProps } from './types';

export const BoxDigit = ({
  isValueFocused,
  handleOnPress,
  digit,
  pinCount,
  boxSelectedStyle,
  boxStyle,
  digitStyle,
}: IBoxDigitProps) => {
  const selectedStyle = boxSelectedStyle || { borderColor: 'blue' };
  return (
    <View
      style={[
        styles.box,
        { width: (width - 40 - 20 * (pinCount - 1)) / pinCount },
        boxStyle,
        isValueFocused ? selectedStyle : {},
      ]}
      onStartShouldSetResponder={EMPTY_ACTION}
      onResponderGrant={handleOnPress}
    >
      <Text style={[styles.digit, digitStyle]}>{digit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  box: {
    height: 64,
    maxWidth: 56,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c3c3c3',
  },
  digit: {
    fontSize: 36,
    color: 'black',
  },
});
