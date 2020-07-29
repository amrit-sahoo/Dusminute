import React from 'react';
import { View, Text, TextInput, StyleSheet, ToastAndroid, Image } from 'react-native';
import Button from '../common/Button';


class SendOtp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View
          style={{ 
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            width: '80%',
            borderColor: 'gray',
            borderBottomWidth: 1,
            fontSize: 21
          }}
        >
          <View style={{ height: 60, justifyContent: 'center'  }}>
            <Text style={{ fontSize: 22, fontWeight: '700' }}>+91</Text>
          </View>
          <TextInput
            style={{ height: 60, fontSize: 20, paddingLeft: 10 }}
            onChangeText={text => this.setState({ value: text })}
            value={this.state.value}
            keyboardType='numeric'
            maxLength={10}
            placeholder='Enter your mobile number'
          />
        </View>
        <Button
          onPress={() => {
            if(this.state.value.length < 10) {
              ToastAndroid.show('Phone number must be 10 digits', ToastAndroid.SHORT);
              return;
            }
            this.props.navigation.navigate('verifyOtp', { mobileNumber: this.state.value }); 
          }}
          text='Get OTP'
          style={{ minWidth: '80%' }}
        />
        <View
          style={{
            position: 'absolute',
            top: '10%',
          }}>
          <Image
            style={{ resizeMode: 'contain', height: 150, width: 150 }}
            source={{ uri: 'https://static.wixstatic.com/media/d48596_020d038bf0aa4dbaa6fd2b65db9d74a9~mv2_d_2953_2126_s_2.png/v1/fill/w_141,h_100,al_c,q_85,usm_0.66_1.00_0.01/HighRes_Dusminute_Logo_PNG.webp'}}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    minHeight: 30,
    width: '100%',
    borderColor: 'gray',
  },
  input: {
    fontSize: 14,
    width: '100%',
    paddingHorizontal: 5,
  },
});

export default SendOtp;