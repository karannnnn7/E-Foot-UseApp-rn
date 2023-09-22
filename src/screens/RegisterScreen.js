import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, Keyboard, Animated, Modal, Platform, Dimensions, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, Switch } from 'react-native-paper';
import { useMutation } from '@apollo/client';
import { registerUserMutation } from '../Graphql/Mutations';
import client from '../Graphql/Apollo';
import LogoSvg from '../../assets/svg/Logo.svg';
import FlagSvg from '../../assets/svg/Flag.svg';
import LightIconSvg from '../../assets/svg/LightIcon.svg';
import DownArrowSvg from '../../assets/svg/DownArrow.svg';
import CloseSvg from '../../assets/svg/Close.svg';
import CButton from '../components/CButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import NetInfo from "@react-native-community/netinfo";




const RegisterScreen = ({ navigation }) => {

    const [showPassword, setShowPassword] = useState(true);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [wlRankModalvisible, setWlRankModalVisible] = useState(false);
    const [selectRank, setSelectRank] = useState("No Score");
    const [countryModalvisible, setCountryModalVisible] = useState(false);
    const [selectCountry, setSelectCountry] = useState("Select Country");
    const [animationValue, setanimationValue] = useState(new Animated.Value(1));
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const isSmallScreen = Dimensions.get('screen').height > 850;
    const [userName, setUserName] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [EAid, setEAid] = useState("");
    const [EAidError, setEAidError] = useState("");

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const handleDismissKeyboard = () => {
        Keyboard.dismiss();
    };


    const handleDateChange = (event, selected) => {
        const currentDate = selected || selectedDate;
        setShowDatePicker(Platform.OS === 'ios'); // Hide the picker on iOS after selecting
        setSelectedDate(currentDate);
    };

    const showDatepicker = () => {
        setShowDatePicker(true);
    };




    // For modal
    const showModal = () => {
        setVisible(true);
        Animated.timing(animationValue, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const hideModal = () => {
        setCountryModalVisible(false);
        setWlRankModalVisible(false);
        setanimationValue(new Animated.Value(1));
    };


    //Validation
    const handleUserNameChanged = (text) => {
        setUserName(text);
        if (text.length < 6) {
            setUserNameError('userName must be at least 6 characters');
        } else {
            setUserNameError("");
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

    const handlePasswordChanged = (text) => {
        setPassword(text);
        if (!validatePassword(text)) {
            setPasswordError('password must be at least 8 characters');
        } else {
            setPasswordError("");
        }
    };

    const validatePassword = (text) => {
        // Basic password validation regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{8,20}/;
        return passwordRegex.test(text);
    };

    const handleFirstnameChanged = (text) => {
        setFirstName(text);
        if (text.length < 3) {
            setFirstNameError('firstName is a required field');
        } else {
            setFirstNameError("");
        }
    };

    const handleLastnameChanged = (text) => {
        setLastName(text);
        if (text.length < 3) {
            setLastNameError('lastName is a required field');
        } else {
            setLastNameError("");
        }
    };

    const { loading, error, data } = useMutation(registerUserMutation);

    NetInfo.fetch().then(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        console.log("Is internet reachable?", state.isInternetReachable);
        console.log("Details", state.details);
    });

    const handleRegister = async () => {
        try {

            const input = {
                userName,
                email,
                password,
                firstName,
                lastName,
            }

            const { data } = await client.mutate({
                mutation: registerUserMutation,
                variables: {
                    input,
                },
            });

            console.log('Successfully registered', input);


        } catch (error) {
            console.error('Error:', error); // Log the error for debugging purposes

            if (error.message) {
                Alert.alert('Registration Error', error.message);
            } else {
                Alert.alert('Registration Error', 'An error occurred while registering. Please try again later.');
            };
        };
    };



    return (
        <>
            <View className="bg-[#0B0711] h-full">
                <KeyboardAvoidingView
                    keyboardVerticalOffset={30}
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
                            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>

                                <View className="h-52">
                                    <LinearGradient
                                        colors={['#4A00E8', '#3B3EFF']}
                                        className="h-full absolute top-0 bottom-0 left-0 right-0"
                                    />
                                </View>

                                <View className="z-10">
                                    <View className="-mt-44 mx-5 rounded-3xl p-5 bg-[#261D37]" style={{ height: 1500 }}>
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

                                        <Text className="font-ChakraPetchBold text-2xl text-white mt-10">PLAY FIFA WIN PRIZES 🎁 </Text>

                                        <View className="mt-5">
                                            <Text className="font-ChakraPetchSemiBold text-white text-base">Username</Text>
                                            <TextInput
                                                value={userName}
                                                onChangeText={handleUserNameChanged}
                                                mode='outlined'
                                                className="bg-[#261D37]"
                                                placeholder='Johndoe'
                                                activeOutlineColor='#D1CBD8'
                                                outlineColor='#D1CBD8'
                                                textColor='#fff'
                                            />
                                            {userNameError ? (
                                                <View className="mt-1"><Text className="text-[#FF0000]">{userNameError}</Text></View>
                                            ) : (
                                                null
                                            )}

                                            <Text className="font-ChakraPetchSemiBold text-white text-base mt-5">E-mail</Text>
                                            <TextInput
                                                value={email}
                                                onChangeText={handleEmailChanged}
                                                mode='outlined'
                                                className="bg-[#261D37]"
                                                placeholder='Johndoe@example.com'
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

                                            <Text className="font-ChakraPetchSemiBold text-white text-base mt-5">Password</Text>
                                            <TextInput
                                                value={password}
                                                onChangeText={handlePasswordChanged}
                                                mode='outlined'
                                                className="bg-[#261D37]"
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

                                            <Text className="font-ChakraPetchSemiBold text-white text-base mt-5">First Name</Text>
                                            <TextInput
                                                value={firstName}
                                                onChangeText={handleFirstnameChanged}
                                                mode='outlined'
                                                className="bg-[#261D37]"
                                                placeholder='john'
                                                activeOutlineColor='#D1CBD8'
                                                outlineColor='#D1CBD8'
                                                textColor='#fff'
                                            />
                                            {firstNameError ? (
                                                <View className="mt-1"><Text className="text-[#FF0000]">{firstNameError}</Text></View>
                                            ) : (
                                                null
                                            )}

                                            <Text className="font-ChakraPetchSemiBold text-white text-base mt-5">Last Name</Text>
                                            <TextInput
                                                value={lastName}
                                                onChangeText={handleLastnameChanged}
                                                mode='outlined'
                                                className="bg-[#261D37]"
                                                placeholder='Doe'
                                                activeOutlineColor='#D1CBD8'
                                                outlineColor='#D1CBD8'
                                                textColor='#fff'
                                            />
                                            {lastNameError ? (
                                                <View className="mt-1"><Text className="text-[#FF0000]">{lastNameError}</Text></View>
                                            ) : (
                                                null
                                            )}

                                            <Text className="font-ChakraPetchSemiBold text-white text-base mt-5">Birth Date</Text>
                                            <TouchableOpacity onPress={showDatepicker} className="p-4 border border-[#D1CBD8] mt-1 rounded-sm">
                                                <Text className="text-white">{selectedDate.toDateString()}</Text>
                                            </TouchableOpacity>
                                            {showDatePicker && (
                                                <DateTimePicker
                                                    testID="dateTimePicker"
                                                    value={selectedDate}
                                                    mode="date"
                                                    display='default'
                                                    onChange={handleDateChange}
                                                />
                                            )}

                                            <Text className="font-ChakraPetchSemiBold text-white text-base mt-5">EA ID</Text>
                                            <TextInput
                                                value={EAid}
                                                onChangeText={setEAid}
                                                error={!!EAidError}
                                                mode='outlined'
                                                className="bg-[#261D37]"
                                                placeholder='0000000000'
                                                activeOutlineColor='#D1CBD8'
                                                outlineColor='#D1CBD8'
                                                keyboardType='number-pad'
                                                textColor='#fff'
                                            />
                                            {EAidError ? (
                                                <View className="mt-1"><Text className="text-[#FF0000]">{EAidError}</Text></View>
                                            ) : (
                                                null
                                            )}

                                            <Text className="font-ChakraPetchSemiBold text-white text-base mt-5">E-sports Team</Text>
                                            <TextInput
                                                mode='outlined'
                                                className="bg-[#261D37]"
                                                placeholder='Team E-Foot'
                                                activeOutlineColor='#D1CBD8'
                                                outlineColor='#D1CBD8'
                                                textColor='#fff'
                                            />

                                            <Text className="font-ChakraPetchSemiBold text-white text-base mt-5">WL Rank</Text>
                                            <TouchableOpacity onPress={() => setWlRankModalVisible(!wlRankModalvisible)} className="p-3 border border-[#D1CBD8] mt-1 rounded-sm flex-row items-center justify-between">
                                                <Text className="text-white">{selectRank}</Text>
                                                <DownArrowSvg />
                                            </TouchableOpacity>

                                            {isSmallScreen ? (<Modal
                                                // animationType="slide"
                                                transparent={true}
                                                visible={wlRankModalvisible}
                                            // onRequestClose={() => {
                                            //   setVisible(!visible);
                                            // }}
                                            >

                                                <TouchableOpacity onPress={hideModal}>
                                                    <View className="h-full w-full bg-[#000000bf]" />
                                                </TouchableOpacity>

                                                <View className={`absolute bottom-64 bg-[#261D37] w-96 left-4 rounded-2xl`} >
                                                    <View className="p-3 mt-3">
                                                        <View className="flex-row items-center justify-between mx-5">
                                                            <Text className="text-white text-xl font-ChakraPetchBold">WL Rank</Text>
                                                            <TouchableOpacity onPress={() => hideModal()}>
                                                                <CloseSvg />
                                                            </TouchableOpacity>
                                                        </View>

                                                        <View className="my-5 mx-5">
                                                            <TouchableOpacity onPress={() => {
                                                                setSelectRank('NO WINS')
                                                                hideModal()
                                                            }}>
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">NO WINS</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectRank('0 - 5 WINS')
                                                                hideModal()
                                                            }} className="mt-4">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">0 - 5 WINS</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectRank('5 - 10 WINS')
                                                                hideModal()
                                                            }} className="mt-4">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">5 - 10 WINS</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectRank('10 - 15 WINS')
                                                                hideModal()
                                                            }} className="mt-4">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">10 - 15 WINS</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectRank('15+ WINS')
                                                                hideModal()
                                                            }} className="mt-4">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">15+ WINS</Text>
                                                            </TouchableOpacity>
                                                        </View>

                                                    </View>
                                                </View>
                                            </Modal>) : (<Modal
                                                // animationType="slide"
                                                transparent={true}
                                                visible={wlRankModalvisible}
                                            // onRequestClose={() => {
                                            //   setVisible(!visible);
                                            // }}
                                            >

                                                <TouchableOpacity onPress={hideModal}>
                                                    <View className="h-full w-full bg-[#000000bf]" />
                                                </TouchableOpacity>

                                                <View className={`absolute bottom-64 bg-[#261D37] w-96 left-[5px] rounded-2xl`} >
                                                    <View className="p-3 mt-3">
                                                        <View className="flex-row items-center justify-between mx-5">
                                                            <Text className="text-white text-xl font-ChakraPetchBold">WL Rank</Text>
                                                            <TouchableOpacity onPress={() => hideModal()}>
                                                                <CloseSvg />
                                                            </TouchableOpacity>
                                                        </View>

                                                        <View className="my-5 mx-5">
                                                            <TouchableOpacity onPress={() => {
                                                                setSelectRank('NO WINS')
                                                                hideModal()
                                                            }}>
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">NO WINS</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectRank('0 - 5 WINS')
                                                                hideModal()
                                                            }} className="mt-4">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">0 - 5 WINS</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectRank('5 - 10 WINS')
                                                                hideModal()
                                                            }} className="mt-4">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">5 - 10 WINS</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectRank('10 - 15 WINS')
                                                                hideModal()
                                                            }} className="mt-4">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">10 - 15 WINS</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectRank('15+ WINS')
                                                                hideModal()
                                                            }} className="mt-4">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">15+ WINS</Text>
                                                            </TouchableOpacity>
                                                        </View>

                                                    </View>
                                                </View>
                                            </Modal>)}

                                            <Text className="font-ChakraPetchSemiBold text-white text-base mt-5">Country</Text>
                                            <TouchableOpacity onPress={() => setCountryModalVisible(!countryModalvisible)} className="p-3 border border-[#D1CBD8] mt-1 rounded-sm flex-row items-center justify-between">
                                                <Text className="text-white">{selectCountry}</Text>
                                                <DownArrowSvg />
                                            </TouchableOpacity>

                                            {isSmallScreen ? (<Modal
                                                // animationType="slide"
                                                transparent={true}
                                                visible={countryModalvisible}
                                            // onRequestClose={() => {
                                            //   setVisible(!visible);
                                            // }}
                                            >

                                                <TouchableOpacity onPress={hideModal}>
                                                    <View className="h-full w-full bg-[#000000bf]" />
                                                </TouchableOpacity>

                                                <View className="absolute bottom-12 bg-[#261D37] w-96 left-4 rounded-2xl" >
                                                    <View className="p-3 mt-3">
                                                        <View className="flex-row items-center justify-between mx-5">
                                                            <Text className="text-white text-xl font-ChakraPetchBold">Country</Text>
                                                            <TouchableOpacity onPress={() => hideModal()}>
                                                                <CloseSvg />
                                                            </TouchableOpacity>
                                                        </View>

                                                        <View className="my-5 mx-5">
                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Afghanistan')
                                                                hideModal()
                                                            }}>
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Afghanistan</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Algeria')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Algeria</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Argentina')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Argentina</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Bahamas')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Bahamas</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Bangladesh')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Bangladesh</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Canada')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Canada</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Denmark')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Denmark</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Egypt')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Egypt</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Fiji')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Fiji</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Finland')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Finland</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Germany')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Germany</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('India')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">India</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Netherlands')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Netherlands</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('New Zealand')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">New Zealand</Text>
                                                            </TouchableOpacity>
                                                        </View>

                                                    </View>
                                                </View>
                                            </Modal>) : (<Modal
                                                // animationType="slide"
                                                transparent={true}
                                                visible={countryModalvisible}
                                            // onRequestClose={() => {
                                            //   setVisible(!visible);
                                            // }}
                                            >

                                                <TouchableOpacity onPress={hideModal}>
                                                    <View className="h-full w-full bg-[#000000bf]" />
                                                </TouchableOpacity>

                                                <View className="absolute top-1  bg-[#261D37] w-96 left-[5px] rounded-2xl">
                                                    <View className="p-3 mt-3">
                                                        <View className="flex-row items-center justify-between mx-5">
                                                            <Text className="text-white text-xl font-ChakraPetchBold">Country</Text>
                                                            <TouchableOpacity onPress={() => hideModal()}>
                                                                <CloseSvg />
                                                            </TouchableOpacity>
                                                        </View>

                                                        <View className="my-5 mx-5">
                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Afghanistan')
                                                                hideModal()
                                                            }}>
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Afghanistan</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Algeria')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Algeria</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Argentina')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Argentina</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Bahamas')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Bahamas</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Bangladesh')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Bangladesh</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Canada')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Canada</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Denmark')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Denmark</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Egypt')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Egypt</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Fiji')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Fiji</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Finland')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Finland</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Germany')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Germany</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('India')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">India</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('Netherlands')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">Netherlands</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity onPress={() => {
                                                                setSelectCountry('New Zealand')
                                                                hideModal()
                                                            }} className="mt-5">
                                                                <Text className="font-ChakraPetchSemiBold text-lg text-[#D1CBD8]">New Zealand</Text>
                                                            </TouchableOpacity>
                                                        </View>

                                                    </View>
                                                </View>
                                            </Modal>)}

                                        </View>

                                        <View className="mt-5 flex-row items-center justify-between">
                                            <Text className="font-ChakraPetchBold text-base text-white">Pro Player?</Text>

                                            <Switch
                                                value={isSwitchOn}
                                                onValueChange={onToggleSwitch}
                                                color={'#3B3EFF'}
                                            />
                                        </View>

                                        <View className="mt-7">
                                            <CButton btnText={'Sign Up'} onPress={handleRegister} />
                                        </View>

                                        <TouchableOpacity onPress={() => navigation.navigate('login')} className="flex-row items-center justify-center mt-5">
                                            <Text className="text-white font-ChakraPetchLight text-base">Already have an account? </Text>
                                            <Text className="text-white font-ChakraPetchMedium text-base underline">Log in instead</Text>
                                        </TouchableOpacity>

                                        <View className={`flex-row mt-5 ${isSmallScreen ? 'w-[310px]' : 'w-[289px]'}`}>
                                            <Text className="font-ChakraPetchBold -mt-1 text-sm text-[#1890FF]">Note:</Text>

                                            <Text className="font-ChakraPetchMedium text-xs text-[#1890FF]"> Players must have residence in any of the following territories: Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, Switzerland, Türkiye, Ukraine, United Kingdom.</Text>
                                        </View>

                                    </View>
                                </View>

                                <View className="mt-44" />
                            </ScrollView>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </>
    )
}

export default RegisterScreen;