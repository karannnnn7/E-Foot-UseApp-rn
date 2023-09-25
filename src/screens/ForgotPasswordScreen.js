import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import LogoSvg from '../../assets/svg/Logo.svg';
import FlagSvg from '../../assets/svg/Flag.svg';
import LightIconSvg from '../../assets/svg/LightIcon.svg';
import DarkIconSvg from '../../assets/svg/DarkIcon.svg';
import CButton from '../components/CButton';
import { useMutation } from '@apollo/client';
import { forgotPassMutation } from '../Graphql/Mutations';
import client from '../Graphql/Apollo';

const ForgotPasswordScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleDismissKeyboard = () => {
        Keyboard.dismiss();
    };

    //Email Validation
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

    const { loading, error, data } = useMutation(forgotPassMutation);

    const handleForgotPass = async () => {
        try {
            const { data } = await client.mutate({
                mutation: forgotPassMutation,
                variables: {
                    email,
                }
            });

            //Check if the email was successfullysent.
            if (data && data.email) {
                //Email sent successfully, you can show a success message or navigate to another screen.
                console.log('Email sent' ,data);
            } else {
                //Email not registered or some other error occurred
                console.error('Error Occured or email not registered');
                Alert.alert(
                    'Error',
                    'Email not registered or an error occurred. Please check your email address or try again.'
                    [
                        {Text: 'OK', onPress: () => console.log('OK Pressed')}
                    ],
                )
            };

            console.log('Email Verified', data);
        } catch (error) {
            console.error('Error occured email not registered', error);
        }
    };

    return (
        <View className="bg-[#0B0711] h-full">
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
                                    <LightIconSvg />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text className="font-ChakraPetchBold text-2xl text-white mt-10">Forgot Password? 🔐</Text>

                        <Text className="mt-4 font-ChakraPetchMedium text-base text-[#D1CBD8]">Enter your email and we will send you all the instructions to rest your password</Text>

                        <View className="mt-7">
                            <Text className="font-ChakraPetchSemiBold text-white text-base">Your Email</Text>
                            <TextInput
                                value={email}
                                onChangeText={handleEmailChanged}
                                mode='outlined'
                                className="bg-[#261D37] mt-1"
                                placeholder='Enter your email'
                                activeOutlineColor='#D1CBD8'
                                outlineColor='#D1CBD8'
                                keyboardType='email-address'
                                textColor='#D1CBD8'
                            />
                            {emailError ? (
                                <View className="mt-1"><Text className="text-[#FF0000]">{emailError}</Text></View>
                            ) : (
                                null
                            )}

                        </View>

                        <View className="mt-10">
                            <CButton btnText={'Send reset link'} onPress={handleForgotPass} />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('login')} className="mt-8 items-center">
                            <Text className="font-ChakraPetchSemiBold text-base text-[#FFFFFF] underline">Back to login</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ForgotPasswordScreen;