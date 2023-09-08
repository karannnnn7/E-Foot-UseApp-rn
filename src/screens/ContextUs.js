import React, { useEffect, useState, useContext } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { colors } from '../config/Theme';
import { ThemeContext } from '../context/ThemeContext';
import CommonHeader from '../components/CommonHeader';
import ContectUsSvg from '../../assets/svg/ContectUs.svg';
import ContectUsLightSvg from '../../assets/svg/ContectUsLight.svg';
import Pic7Svg from '../../assets/svg/Pic-7.svg';
import Pic7LightSvg from '../../assets/svg/Pic-7Light.svg';

const ContextUs = ({ navigation }) => {

    const [Name, setName] = useState("");
    const [NameError, setNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    // const theme = { mode: 'light' };
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    useEffect(() => {
        if (NameError || emailError || Name.trim() === '' || email.trim() === '') {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        } ''
    }, [Name, email, NameError, emailError])

    const handleDismissKeyboard = () => {
        Keyboard.dismiss();
    };

    //Validation
    const handleNameChanged = (text) => {
        setName(text);
        if (text.length < 6) {
            setNameError('userName must be at least 6 characters');
        } else {
            setNameError("");
        }
    };

    const handleEmailChanged = (text) => {
        setEmail(text);
        if (!validateEmail(text)) {
            setEmailError('email is a required field');
        } else {
            setEmailError('');
        }
    };

    const validateEmail = (email) => {
        //Basic email validation regex
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };



    return (
        <>
            <View style={{ backgroundColor: activeColors.background }} className="h-full">
                <CommonHeader navigation={navigation} />

                <KeyboardAvoidingView
                    keyboardVerticalOffset={50}
                    behavior={Platform.OS === 'android' ? 'height' : 'padding'}
                    className="flex-1"
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

                            <View className="mt-3 mx-5">
                                <View className="flex-row items-center space-x-3">
                                    {theme.mode === 'dark' ? (<ContectUsSvg width={23} height={23} />) : (<ContectUsLightSvg width={23} height={23} />)}
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-xl">Contact Us</Text>
                                </View>

                                <View className="items-center mt-14">
                                    {theme.mode === 'dark' ? (<Pic7Svg />) : (<Pic7LightSvg />)}
                                </View>

                                <View className="mt-10">
                                    <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-base">Your Name</Text>
                                    <TextInput
                                        value={Name}
                                        onChangeText={handleNameChanged}
                                        mode='outlined'
                                        style={{ backgroundColor: activeColors.cardBackground }}
                                        placeholder='Enter your name'
                                        activeOutlineColor='#D1CBD8'
                                        outlineColor='#D1CBD8'
                                        textColor='#fff'
                                    />
                                    {NameError ? (
                                        <View className="mt-1"><Text className="text-[#FF0000]">{NameError}</Text></View>
                                    ) : (
                                        null
                                    )}

                                    <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-base mt-5">Email</Text>
                                    <TextInput
                                        value={email}
                                        onChangeText={handleEmailChanged}
                                        mode='outlined'
                                        style={{ backgroundColor: activeColors.cardBackground }}
                                        placeholder='Enter your email'
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

                                    <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-base mt-5">Your Message</Text>
                                    <TextInput
                                        mode='outlined'
                                        style={{ backgroundColor: activeColors.cardBackground }}
                                        placeholder='Write your message here....'
                                        activeOutlineColor='#D1CBD8'
                                        outlineColor='#D1CBD8'
                                        textColor='#FFFFFF'
                                        multiline={true}
                                    />
                                </View>

                                {isFormValid ? (
                                    <TouchableOpacity onPress={() => console.log('pressed')} className='h-12  items-center justify-center w-full mt-7'>
                                        <LinearGradient
                                            colors={['#4A00E8', '#3B3EFF']}
                                            className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                                        />
                                        <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Send Message</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity onPress={() => {
                                        console.log('pressed');
                                        Alert('We will contect you soon!');
                                    }} className='h-12  items-center justify-center w-full mt-7 bg-[#98959A] rounded-lg'>
                                        <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Send Message</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </KeyboardAvoidingView>

            </View>
        </>
    )
}

export default ContextUs;