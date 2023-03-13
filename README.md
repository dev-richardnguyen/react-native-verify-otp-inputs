# react-native-verify-otp-inputs

react-native-verify-otp is a tiny Javascript library which provides an elegant UI for the end user to input OTP

## Installation

```sh
yarn add react-native-verify-otp-inputs
```

## Usage

```js
import { OTPInput } from 'react-native-verify-otp-inputs';

// ...

import * as React from 'react';

import { StyleSheet, View, Alert } from 'react-native';
import { OTPInput } from 'react-native-verify-otp-inputs';

export default function App() {
  return (
    <View style={styles.container}>
      <OTPInput
        onSubmit={(otp: string) => {
          Alert.alert('Done!', otp);
        }}
        pinCount={6}
        boxSelectedStyle={styles.boxSelectedStyle}
        boxStyle={styles.boxStyle}
        digitStyle={styles.digitStyle}
        variant="underlined"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxSelectedStyle: {
    backgroundColor: 'red',
  },
  boxStyle: {
    borderRadius: 8,
  },
  digitStyle: {
    color: 'gray',
  },
});

```

## Parameters
Parameter | required | Description |
--- | --- | --- |
onSubmit | YES | Callback when input digits are done | 
pinCount | NO | Number of digits in the component (**default** is 6) |
boxSelectedStyle | NO | The style of the input field which is focused |
boxStyle | NO | The style of the input field which is NOT focused |
digitStyle | NO | The style of the digit |
boxContainerStyle | NO | The style of container |


## License

MIT

---

