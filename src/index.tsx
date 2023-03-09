import React from 'react';
import { OTPInput as OTPInputComponent } from './components/otp-input';
import { IOTPInput } from './components/otp-input/types';

export function OTPInput(props: IOTPInput) {
  return <OTPInputComponent {...{ ...props }} />;
}
