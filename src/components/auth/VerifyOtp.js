import React from 'react';
import { View, Text, StyleSheet, ToastAndroid, Image, TouchableOpacity } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Button from '../common/Button';

class VerifyOtp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: null,
    }
  }

  render() {
    const { mobileNumber } = this.props.route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 20,
            color: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          Please enter the OTP sent to
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'rgba(0, 0, 0, 0.8)',
            fontWeight: '700',
            paddingTop: 10
          }}
        >
          +91 {mobileNumber}
        </Text>
        <OTPInputView
          style={{ width: '70%', height: 120 }}
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled = {( code => {
            this.setState({
              otp: code,
            });
          })}
        />
        <Button
          text='Verify'
          style={{ width: 200  }}
          onPress={() => {
            if (this.state.otp) {
              this.props.setSignedIn(true);
            }
          }}
        />
        <View style={{ flexDirection: 'row', paddingTop: 20 }}>
          <Text
            style={{
              fontSize: 16,
              color: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            Didn't receive otp?
          </Text>
          <TouchableOpacity
            style={{
              paddingLeft: 10,
            }}
            onPress={() => {
              ToastAndroid.show('OTP Sent', ToastAndroid.SHORT);
            }}
          >
            <Text 
              style={{
                fontSize: 16,
                color: '#5a85c4',
              }}
            >
              Resend
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 45,
    height: 50
  },

  underlineStyleBase: {
    width: 45,
    height: 50,
    fontSize: 24,
    borderWidth: 0,
    color: 'rgba(0,0,0,0.7)',
    borderBottomWidth: 2,
    borderColor: "rgba(0,0,0,0.2)",
  },

  underlineStyleHighLighted: {
    borderColor: 'tomato',
  },
});


export default VerifyOtp;