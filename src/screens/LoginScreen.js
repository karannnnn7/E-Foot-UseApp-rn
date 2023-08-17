import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LogoSvg from '../../assets/svg/Logo.svg';
import FlagSvg from '../../assets/svg/Flag.svg';
import LightSvg from '../../assets/svg/Light.svg';
import GoogleSvg from '../../assets/svg/Google.svg';
import FaceBookSvg from '../../assets/svg/FaceBook.svg';
import { TextInput } from 'react-native-paper';
import CButton from '../components/CButton';

const LoginScreen = ({ navigation }) => {

  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleEmailChanged = (text) => {
    setEmail(text);
    if (!validateEmail(text)) {
      setEmailError('email is a required field');
    } else {
      setEmailError("");
    }
  };

  const validateEmail = (email) => {
    //Basic email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handlePasswordChanged = (text) => {
    setPassword(text);
    if (!validatePassword(text)) {
      setPasswordError('password must be at least 8 characters');
    } else {
      setPasswordError("");
    }
  };

  const validatePassword = (text) => {
    //Bacis Password validation regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{8,20}/;
    return passwordRegex.test(text);
  };


  return (
    <>
      <View className="bg-[#0B0711] h-full">
        <KeyboardAvoidingView
          keyboardVerticalOffset={50}
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            className="w-full flex-grow"
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            <TouchableOpacity
              onPress={handleDismissKeyboard}
              activeOpacity={1}
              className="flex-grow"
            >

              <View className="h-52">
                <LinearGradient
                  colors={['#4A00E8', '#3B3EFF']}
                  className="h-full absolute top-0 bottom-0 left-0 right-0"
                />
              </View>

              <View className="z-10">
                <View className="-mt-44 mx-5 rounded-3xl p-5 bg-[#261D37]" style={{ height: 750 }}>
                  <View className="flex-row justify-between items-center">
                    <LogoSvg />
                    <View className="flex-row items-center space-x-3">
                      <TouchableOpacity>
                        <FlagSvg />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <LightSvg />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <Text className="font-PlayBold text-2xl text-white mt-10">Welcome! Log In to Start .</Text>

                  <View className="mt-5">
                    <Text className="font-PlayBold text-white text-base">Email/Username</Text>
                    <TextInput
                      value={email}
                      onChangeText={handleEmailChanged}
                      mode='outlined'
                      className="bg-[#261D37] mt-1"
                      placeholder='Enter your email/username'
                      activeOutlineColor='#D1CBD8'
                      outlineColor='#D1CBD8'
                      keyboardType='email-address'
                      textColor='#fff'
                    />
                    {emailError ? (
                      <View className="mt-1"><Text className="text-[#FF0000]">{emailError}</Text></View>
                    ) : (
                      null
                    )}

                    <Text className="font-PlayBold text-white text-base mt-5">Password</Text>
                    <TextInput
                      value={password}
                      onChangeText={handlePasswordChanged}
                      mode='outlined'
                      className="bg-[#261D37] mt-1"
                      placeholder='**********'
                      activeOutlineColor='#D1CBD8'
                      outlineColor='#D1CBD8'
                      keyboardType='email-address'
                      textColor='#fff'
                      secureTextEntry={showPassword}
                      right={
                        <TextInput.Icon
                          onPress={() => setShowPassword(!showPassword)}
                          icon={showPassword ? 'eye' : 'eye-off'}
                          iconColor="#8C8987"
                        />
                      }
                    />
                    {passwordError ? (
                      <View className="mt-1"><Text className="text-[#FF0000]">{passwordError}</Text></View>
                    ) : (
                      null
                    )}

                    <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')} className="mt-3 items-end">
                      <Text className="text-white text-base font-PlayBold underline">Forgot password?</Text>
                    </TouchableOpacity>
                  </View>

                  <View className="mt-10">
                    <CButton btnText={'Log In'} onPress={() => navigation.navigate('home')} />
                  </View>

                  <TouchableOpacity onPress={() => navigation.navigate('register')} className="flex-row items-center mt-5">
                    <Text className="text-white font-PlayRegular text-base">New on our platform? </Text>
                    <Text className="text-white font-PlayBold text-base underline">Create  a new account </Text>
                  </TouchableOpacity>

                  <View className="flex-row items-center justify-between mt-7">
                    <TouchableOpacity onPress={() => console.log('pressed')} className="flex-row items-center border border-[#D1CBD8] p-3 rounded-lg space-x-2">
                      <Text className="font-PlayBold text-white text-base">Login with </Text>
                      <GoogleSvg />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('pressed')} className="flex-row items-center border border-[#D1CBD8] p-3 rounded-lg space-x-2">
                      <Text className="font-PlayBold text-white text-base">Login with </Text>
                      <FaceBookSvg />
                    </TouchableOpacity>
                  </View>

                  <View className="absolute bottom-7 right-6">
                    <Text className="font-PlayRegular text-white text-base">Play FIFA and WIN PRIZES -Play like a PRO 💙</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default LoginScreen;