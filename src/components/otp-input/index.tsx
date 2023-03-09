import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';
import { BoxDigit } from '../box-digit';
import { IOTPInput } from './types';
import {
  EMPTY_VALUE,
  initCode,
  isAutoFillSupported,
  keysValid,
} from '../../common/constants';

export const OTPInput = ({
  onSubmit,
  pinCount = 4,
  boxSelectedStyle,
  boxStyle,
  digitStyle,
  boxContainerStyle,
}: IOTPInput) => {
  const [code, setCode] = useState(initCode(pinCount));
  const [idxFocusing, setIdxFocusing] = useState(0);

  const inputRef = useRef<TextInput>();

  const handleOnPress = (idx: number) => {
    return () => {
      inputRef?.current?.focus?.();
      setIdxFocusing(idx);
    };
  };

  // Handle box digit here
  const handleOnKeyPress = ({
    nativeEvent: { key },
  }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (key === 'Backspace') {
      if (idxFocusing >= 0) {
        if (idxFocusing > 0 && !code[idxFocusing]) {
          setIdxFocusing((preValue: number) => preValue - 1);
        }

        const newCode = code.map((item, idx) =>
          idx === idxFocusing ? '' : item
        );
        setCode(newCode);
      }
      return;
    }

    const keyPressed = key.trim();
    if (idxFocusing <= pinCount - 1 && keysValid(keyPressed)) {
      const keyPressedLength = keyPressed.length;
      if (keyPressedLength === 1) {
        const newCode = [...code];
        newCode[idxFocusing] = keyPressed;
        setCode(newCode);
        if (idxFocusing < pinCount - 1) {
          setIdxFocusing((preValue: number) => preValue + 1);
        }
      } else {
        const newCode = [];
        for (let i = 0; i < keyPressedLength; i++) {
          newCode[i] = keyPressed[i];
        }
        setCode(newCode);
        const idxDigitFocusing =
          keyPressedLength < 1
            ? 0
            : keyPressedLength >= pinCount
            ? pinCount - 1
            : keyPressedLength;
        setIdxFocusing(() => idxDigitFocusing);
      }
    }
  };

  // Handle submit otp here
  const handleSubmit = useCallback(() => {
    try {
      const otp = code.join('');
      if (otp.length === pinCount) {
        inputRef.current?.clear?.();
        setCode(initCode(pinCount));
        setIdxFocusing(0);
        onSubmit?.(otp);
      }
    } catch (error) {}
  }, [code, onSubmit, pinCount]);

  // effect
  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);

  return (
    <View style={styles.container}>
      <View style={[styles.boxContainer, boxContainerStyle]}>
        {initCode(pinCount).map((_: string, idx: number) => {
          const digit = code[idx] || EMPTY_VALUE;

          const isValueFocused = idxFocusing === idx;
          return (
            <BoxDigit
              key={`${idx}`}
              handleOnPress={handleOnPress(idx)}
              {...{
                isValueFocused,
                digit,
                pinCount,
                boxSelectedStyle,
                boxStyle,
                digitStyle,
              }}
            />
          );
        })}
      </View>
      <TextInput
        style={styles.inputContainer}
        onKeyPress={handleOnKeyPress}
        maxLength={pinCount}
        ref={inputRef as React.LegacyRef<TextInput> | undefined}
        textContentType={isAutoFillSupported ? 'oneTimeCode' : 'none'}
        keyboardType="numeric"
        autoFocus
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 72,
  },
  inputContainer: {
    width: 0,
    height: '100%',
    zIndex: -1,
    opacity: 1,
    ...StyleSheet.absoluteFillObject,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
