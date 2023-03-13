import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EMPTY_ACTION, width } from '../../common/constants';
import { IBoxDigitProps } from './types';
import { IVariant } from '../otp-input/types';

export const BoxDigit = ({
  isValueFocused,
  handleOnPress,
  digit,
  pinCount,
  boxSelectedStyle,
  boxStyle,
  digitStyle,
  variant,
}: IBoxDigitProps) => {
  const selectedStyle = useMemo(
    () => boxSelectedStyle || { borderColor: 'blue' },
    [boxSelectedStyle]
  );
  const renderDigitByVariant = useMemo<{
    [variant in IVariant]: JSX.Element;
  }>(() => {
    return {
      default: (
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
      ),
      security: (
        <View
          onStartShouldSetResponder={EMPTY_ACTION}
          onResponderGrant={handleOnPress}
        >
          <View
            style={[
              styles.itemSecurity,
              // eslint-disable-next-line react-native/no-inline-styles
              digit?.length ? { backgroundColor: 'blue', borderWidth: 0 } : {},
              boxStyle,
              // eslint-disable-next-line react-native/no-inline-styles
              isValueFocused ? boxSelectedStyle || { borderColor: 'blue' } : {},
            ]}
          />
        </View>
      ),
      underlined: (
        <View
          style={styles.containerUnderLined}
          onStartShouldSetResponder={EMPTY_ACTION}
          onResponderGrant={handleOnPress}
        >
          <View style={[digit?.length ? {} : styles.hidden]}>
            <Text style={[styles.digit, digitStyle]}>{digit || 0}</Text>
          </View>
          <View
            style={[
              styles.itemUnderLined,
              isValueFocused
                ? // eslint-disable-next-line react-native/no-inline-styles
                  boxSelectedStyle || { backgroundColor: 'blue' }
                : {},
            ]}
          />
        </View>
      ),
    };
  }, [
    boxSelectedStyle,
    boxStyle,
    digit,
    digitStyle,
    handleOnPress,
    isValueFocused,
    pinCount,
    selectedStyle,
  ]);

  return renderDigitByVariant[variant];
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
  itemSecurity: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
  },
  itemUnderLined: {
    height: 3,
    width: 30,
    backgroundColor: 'gray',
  },
  containerUnderLined: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hidden: {
    opacity: 0,
  },
});
