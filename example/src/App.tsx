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
