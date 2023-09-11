import React, { useState, useContext } from 'react';
import { View, Text, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, Keyboard, Dimensions, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { colors } from '../config/Theme';
import { ThemeContext } from '../context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoSvg from '../../assets/svg/Logo.svg';
import FlagSvg from '../../assets/svg/Flag.svg';
import LightIconSvg from '../../assets/svg/LightIcon.svg';
import DarkIconSvg from '../../assets/svg/DarkIcon.svg';
import GoogleSvg from '../../assets/svg/Google.svg';
import FaceBookSvg from '../../assets/svg/FaceBook.svg';
import CButton from '../components/CButton';

const LoginScreen = ({ navigation }) => {

  const [showPassword, setShowPassword] = useState(true);
  const isSmallScreen = Dimensions.get('screen').height > 850;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const theme = { mode: "light" }
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode]

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

  const handleLogin = async () => {
    if (emailError || passwordError) {
      Alert.alert('incorrect userName and password or create a new account');
    };

    //Validation succeeded, you can now store user data and password

    try {
      //Store userData and password in Async Storage
      await AsyncStorage.setItem('userData', JSON.stringify({ email, password }));

      navigation.navigate('drawer')
    } catch (error) {
      console.log('Error storing Data: ', error);
    };
  };
  


  return (
    <>
      <View style={{ backgroundColor: activeColors.background }} className="h-full">
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
                <View className="-mt-44 mx-5 rounded-3xl p-5" style={{ height: 750, backgroundColor: activeColors.cardBackground }}>
                  <View className="flex-row justify-between items-center">
                    <LogoSvg />
                    <View className="flex-row items-center space-x-3">
                      <TouchableOpacity>
                        <FlagSvg />
                      </TouchableOpacity>
                      <TouchableOpacity >
                        {theme.mode === 'dark' ? (<LightIconSvg />) : (<DarkIconSvg />)}
                      </TouchableOpacity>
                    </View>
                  </View>

                  <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-2xl mt-10">Welcome! Log In to Start .</Text>

                  <View className="mt-5">
                    <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchSemiBold text-base">Email/Username</Text>
                    <TextInput
                      value={email}
                      onChangeText={handleEmailChanged}
                      mode='outlined'
                      style={{ marginTop: 4, backgroundColor: activeColors.cardBackground }}
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

                    <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchSemiBold text-base mt-5">Password</Text>
                    <TextInput
                      value={password}
                      onChangeText={handlePasswordChanged}
                      mode='outlined'
                      placeholder='**********'
                      style={{ marginTop: 4, backgroundColor: activeColors.cardBackground }}
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
                      <Text style={{ color: activeColors.textTernory }} className="text-base font-ChakraPetchSemiBold underline">Forgot password?</Text>
                    </TouchableOpacity>
                  </View>

                  <View className="mt-10">
                    <CButton btnText={'Log In'} onPress={() => navigation.navigate('home')} />
                  </View>

                  <TouchableOpacity onPress={() => navigation.navigate('register')} className="flex-row items-center mt-5">
                    <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchMedium text-base">New on our platform? </Text>
                    <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchMedium text-base underline">Create  a new account </Text>
                  </TouchableOpacity>

                  <View className="flex-row items-center justify-between mt-7">
                    <TouchableOpacity onPress={() => console.log('pressed')} className="flex-row items-center border border-[#D1CBD8] p-3 rounded-lg space-x-2">
                      <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchSemiBold text-base">Login with </Text>
                      <GoogleSvg />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('pressed')} className="flex-row items-center border border-[#D1CBD8] p-3 rounded-lg space-x-2">
                      <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchSemiBold  text-base">Login with </Text>
                      <FaceBookSvg />
                    </TouchableOpacity>
                  </View>

                  {isSmallScreen ? (
                    <View className="absolute bottom-7 right-6">
                      <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchLight text-base">Play FIFA and WIN PRIZES -Play like a PRO 💙</Text>
                    </View>
                  ) : (
                    <View className="absolute bottom-7 right-7">
                      <Text style={{ color: activeColors.textTernory }} className="font-PlayRegular text-sm">Play FIFA and WIN PRIZES -Play like a PRO 💙</Text>
                    </View>
                  )}
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