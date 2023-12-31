import React, { useState, useContext, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated, KeyboardAvoidingView, Keyboard, Dimensions, Modal } from 'react-native';
import { Switch, TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../config/Theme';
import { ThemeContext } from '../context/ThemeContext';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import CommonHeader from '../components/CommonHeader';
import DateTimePicker from '@react-native-community/datetimepicker';
import MyProfileSvg from '../../assets/svg/MyProfile.svg';
import MyProfileLightSvg from '../../assets/svg/MyProfileLight.svg';
import ShieldSvg from '../../assets/svg/shield.svg';
import ShieldLightSvg from '../../assets/svg/shieldLight.svg';
import DpSvg from '../../assets/svg/DP.svg';
import CopyLinkSvg from '../../assets/svg/CopyLink.svg';
import UserSvg from '../../assets/svg/User.svg';
import UserLightSvg from '../../assets/svg/UserLight.svg';
import LinkSvg from '../../assets/svg/Link.svg';
import LinkLightSvg from '../../assets/svg/LinkLight.svg';
import LockSvg from '../../assets/svg/Lock.svg';
import LockLightSvg from '../../assets/svg/LockLight.svg';
import BellSvg from '../../assets/svg/Bell.svg';
import BellLightSvg from '../../assets/svg/BellLight.svg';
import UpASvg from '../../assets/svg/UpA.svg';
import UpALightSvg from '../../assets/svg/UpALight.svg';
import DownASvg from '../../assets/svg/DownA.svg';
import DownALightSvg from '../../assets/svg/DownALight.svg';
import EditDPSvg from '../../assets/svg/EditDP.svg';
import EditSvg from '../../assets/svg/Edit.svg';
import ISvg from '../../assets/svg/I.svg';
import DownArrowSvg from '../../assets/svg/DownArrow.svg';
import CloseSvg from '../../assets/svg/Close.svg';
import CloseLightSvg from '../../assets/svg/CloseLight.svg';
import TrophySvg from '../../assets/svg/Trophy.svg';
import YouTubeSvg from '../../assets/svg/YouTube.svg';
import YouTubeLightSvg from '../../assets/svg/YouTubeLight.svg';
import ChatsSvg from '../../assets/svg/Chats.svg';
import ChatsLightSvg from '../../assets/svg/ChatsLight.svg';
import InstagramSvg from '../../assets/svg/Instagram.svg';
import InstagramLightSvg from '../../assets/svg/InstagramLight.svg';

const MyProfileScreen = ({ navigation }) => {



  const [isGeneralOpen, setIsGeneralOpen] = useState(false);
  const [isGameIDOpen, setIsGameIDOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isUserPreferencesOpen, setIsUserPreferencesOpen] = useState(false);
  const dropdownAnimation = new Animated.Value(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [oldPassword, setOldPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [selectRank, setSelectRank] = useState("No Score");
  const [wlRankModalvisible, setWlRankModalVisible] = useState(false);
  const [animationValue, setanimationValue] = useState(new Animated.Value(1));
  const [isSwitchOneOn, setIsSwitchOneOn] = useState(false);
  const [isSwitchTwoOn, setIsSwitchTwoOn] = useState(false);
  const isSmallScreen = Dimensions.get('screen').height > 850;
  const isLargeScreen = Dimensions.get('screen').width > 480;
  // const theme = { mode: 'light' };
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const onToggleSwitchOne = () => setIsSwitchOneOn(!isSwitchOneOn);
  const onToggleSwitchTwo = () => setIsSwitchTwoOn(!isSwitchTwoOn);

  const handleGenralDropdown = () => {
    setIsGeneralOpen(!isGeneralOpen);
  };

  const handleGameIdDropdown = () => {
    setIsGameIDOpen(!isGameIDOpen);
  };

  const handleChangePasswordDropdown = () => {
    setIsChangePasswordOpen(!isChangePasswordOpen);
  };

  const handleUserPreferencesDropdown = () => {
    setIsUserPreferencesOpen(!isUserPreferencesOpen);
  };

  //Toggle Dropdown Animated
  Animated.timing(dropdownAnimation, {
    toValue: isGeneralOpen ? 0 : 1,
    duration: 300,
    useNativeDriver: false,
  }).start();

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

  const handleConfirmPasswordChanged = (text) => {
    setConfirmPassword(text);
    if (text !== password) {
      setConfirmPasswordError('Password do not match');
    } else {
      setConfirmPasswordError('');
    }
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
    setWlRankModalVisible(false);
    setanimationValue(new Animated.Value(1));
  };


  return (
    <>
      <View style={{ backgroundColor: activeColors.background }} className="h-full">
        <CommonHeader navigation={navigation} />

        <KeyboardAvoidingView
          keyboardVerticalOffset={50}
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          className="flex-1 -z-10"
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

              <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="mt-3 h-full">
                <View className="mx-5">
                  <View className="flex-row items-center space-x-3">
                    {theme.mode === 'dark' ? (<MyProfileSvg width={23} height={23} />) : (<MyProfileLightSvg width={23} height={23} />)}
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-xl">My Profile</Text>
                  </View>

                  <View className="items-center mt-5">
                    {theme.mode === 'dark' ? (<ShieldSvg />) : (<ShieldLightSvg />)}
                    <View className="absolute top-10">
                      <DpSvg />

                      <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-2xl text-center mt-5">Kevin de Vries</Text>

                      <View className="bg-[#FFC1071F] border border-[#FFC107] mx-5 p-2 flex-row items-center justify-center space-x-3 rounded-lg mt-3">
                        <TrophySvg />
                        <Text className="text-[#FFC107] font-ChakraPetchBold text-xl">12</Text>
                      </View>

                      <View className="flex-row items-center justify-around mt-5">
                        <TouchableOpacity>
                          {theme.mode === 'dark' ? (<YouTubeSvg width={32} height={32} />) : (<YouTubeLightSvg width={32} height={32} />)}
                        </TouchableOpacity>

                        <TouchableOpacity>
                          {theme.mode === 'dark' ? (<ChatsSvg width={32} height={32} />) : (<ChatsLightSvg width={32} height={32} />)}
                        </TouchableOpacity>

                        <TouchableOpacity>
                          {theme.mode === 'dark' ? (<InstagramSvg width={31} height={31} />) : (<InstagramLightSvg width={31} height={31} />)}
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                  <View style={{ backgroundColor: activeColors.cardBackground }} className={`bg-transparent border border-[#3B3EFF] rounded-xl p-3 mt-5 flex-row items-center space-x-3`}>
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">https://myprofilelink.efoot.NL.098.Win...</Text>
                    <TouchableOpacity>
                      <CopyLinkSvg />
                    </TouchableOpacity>
                  </View>

                  <View className="mt-5">
                    <TouchableOpacity activeOpacity={1.0} onPress={handleGenralDropdown} style={{ backgroundColor: activeColors.cardBackground }} className={`p-3 flex-row items-center justify-between ${isGeneralOpen ? 'rounded-t-lg' : 'rounded-lg'}`}>
                      <View className="flex-row items-center space-x-3 ml-3">
                        {theme.mode === 'dark' ? (<UserSvg />) : (<UserLightSvg />)}
                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xl">General</Text>
                      </View>

                      <View className="mr-3">
                        {isGeneralOpen ? (<View>
                          {theme.mode === 'dark' ? (<UpASvg />) : (<UpALightSvg />)}
                        </View>) : (<View>
                          {theme.mode === 'dark' ? (<DownASvg />) : (<DownALightSvg />)}
                        </View>)}
                      </View>
                    </TouchableOpacity>

                    {isGeneralOpen && (
                      <Animated.View style={{ backgroundColor: activeColors.cardBackground }} className="h-auto rounded-b-lg p-3">
                        <View>
                          <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mx-3">Profile picture</Text>

                          <View className="items-center mt-3">
                            <EditDPSvg />

                            <TouchableOpacity onPress={() => console.log('pressed')} className="absolute top-10">
                              <EditSvg />
                            </TouchableOpacity>
                          </View>

                          <View className="bg-[#332d1c] mt-5 rounded-lg p-2 flex-row items-center space-x-3 mx-3 px-5">
                            <ISvg />
                            <Text className="font-ChakraPetchMedium text-xs text-[#FFC107]">Allowed JPG, GIF or PNG. Max size of 800kB</Text>
                          </View>

                          <View className="mt-5">
                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm">User name</Text>
                            <TextInput
                              value={userName}
                              onChangeText={handleUserNameChanged}
                              mode='outlined'
                              style={{ backgroundColor: activeColors.cardBackground }}
                              placeholder='Alen Maxwell'
                              activeOutlineColor='#D1CBD8'
                              outlineColor='#D1CBD8'
                              textColor='#D1CBD8'
                            />
                            {userNameError ? (
                              <View className="mt-1"><Text className="text-[#FF0000]">{userNameError}</Text></View>
                            ) : (
                              null
                            )}

                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-5">E-mail</Text>
                            <TextInput
                              value={email}
                              onChangeText={handleEmailChanged}
                              mode='outlined'
                              style={{ backgroundColor: activeColors.cardBackground }}
                              placeholder='Alenmaxwell@gmail.com'
                              activeOutlineColor='#D1CBD8'
                              outlineColor='#D1CBD8'
                              keyboardType='email-address'
                              textColor='#D1DCB8'
                            />
                            {emailError ? (
                              <View className="mt-1"><Text className="text-[#FF0000]">{emailError}</Text></View>
                            ) : (
                              null
                            )}

                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-5">First Name</Text>
                            <TextInput
                              value={firstName}
                              onChangeText={handleFirstnameChanged}
                              mode='outlined'
                              style={{ backgroundColor: activeColors.cardBackground }}
                              placeholder='Alen'
                              activeOutlineColor='#D1CBD8'
                              outlineColor='#D1CBD8'
                              textColor='#D1CBD8'
                            />
                            {firstNameError ? (
                              <View className="mt-1"><Text className="text-[#FF0000]">{firstNameError}</Text></View>
                            ) : (
                              null
                            )}

                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-5">Last Name</Text>
                            <TextInput
                              value={lastName}
                              onChangeText={handleLastnameChanged}
                              mode='outlined'
                              style={{ backgroundColor: activeColors.cardBackground }}
                              placeholder='Maxwell'
                              activeOutlineColor='#D1CBD8'
                              outlineColor='#D1CBD8'
                              textColor='#fff'
                            />
                            {lastNameError ? (
                              <View className="mt-1"><Text className="text-[#FF0000]">{lastNameError}</Text></View>
                            ) : (
                              null
                            )}

                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-5">Birth Date</Text>
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

                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-5">Twitch account</Text>
                            <TextInput
                              mode='outlined'
                              style={{ backgroundColor: activeColors.cardBackground }}
                              placeholder='https://twitch.com'
                              activeOutlineColor='#D1CBD8'
                              outlineColor='#D1CBD8'
                              textColor='#fff'
                            />

                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-5">Instagram account</Text>
                            <TextInput
                              mode='outlined'
                              style={{ backgroundColor: activeColors.cardBackground }}
                              placeholder='https://instagram.com'
                              activeOutlineColor='#D1CBD8'
                              outlineColor='#D1CBD8'
                              textColor='#fff'
                            />

                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-5">Youtube account</Text>
                            <TextInput
                              mode='outlined'
                              style={{ backgroundColor: activeColors.cardBackground }}
                              placeholder='https://youtube.com'
                              activeOutlineColor='#D1CBD8'
                              outlineColor='#D1CBD8'
                              textColor='#fff'
                            />
                          </View>
                        </View>
                      </Animated.View>
                    )}

                    <TouchableOpacity activeOpacity={1.0} onPress={handleGameIdDropdown} style={{ backgroundColor: activeColors.cardBackground }} className={`p-3 flex-row items-center justify-between ${isGameIDOpen ? 'rounded-t-lg' : 'rounded-lg'} mt-5`}>
                      <View className="flex-row items-center space-x-3 ml-3">
                        {theme.mode === 'dark' ? (<LinkSvg />) : (<LinkLightSvg />)}
                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xl">Game Id & Rank</Text>
                      </View>

                      <View className="mr-3">
                        {isGeneralOpen ? (<View>
                          {theme.mode === 'dark' ? (<UpASvg />) : (<UpALightSvg />)}
                        </View>) : (<View>
                          {theme.mode === 'dark' ? (<DownASvg />) : (<DownALightSvg />)}
                        </View>)}
                      </View>
                    </TouchableOpacity>

                    {isGameIDOpen && (
                      <Animated.View style={{ backgroundColor: activeColors.cardBackground }} className="h-auto rounded-b-lg p-3">
                        <View>
                          <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm">Playstation ID</Text>
                          <TextInput
                            mode='outlined'
                            keyboardType='phone-pad'
                            style={{ backgroundColor: activeColors.cardBackground }}
                            placeholder='123'
                            activeOutlineColor='#D1CBD8'
                            outlineColor='#D1CBD8'
                            textColor='#D1CBD8'
                          />

                          <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-5">Xbox ID</Text>
                          <TextInput
                            mode='outlined'
                            keyboardType='phone-pad'
                            style={{ backgroundColor: activeColors.cardBackground }}
                            placeholder='321'
                            activeOutlineColor='#D1CBD8'
                            outlineColor='#D1CBD8'
                            textColor='#D1CBD8'
                          />

                          <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-base mt-5">WL Rank</Text>
                          <TouchableOpacity onPress={() => setWlRankModalVisible(!wlRankModalvisible)} className="p-3 border border-[#D1CBD8] mt-1 rounded-sm flex-row items-center justify-between">
                            <Text style={{ color: activeColors.textTernory }}>{selectRank}</Text>
                            <DownArrowSvg />
                          </TouchableOpacity>

                          <Modal
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

                            <View style={{ backgroundColor: activeColors.cardBackground }} className={`absolute bottom-64 w-[370px] ${isSmallScreen ? 'left-4' : 'left-1'} rounded-2xl`} >
                              <View className="p-3 mt-3">
                                <View className="flex-row items-center justify-between mx-5">
                                  <Text style={{ color: activeColors.textTernory }} className="text-xl font-ChakraPetchBold">WL Rank</Text>
                                  <TouchableOpacity onPress={() => hideModal()}>
                                    {theme.mode === 'dark' ? (<CloseSvg />) : (<CloseLightSvg />)}
                                  </TouchableOpacity>
                                </View>

                                <View className="my-5 mx-5">
                                  <TouchableOpacity onPress={() => {
                                    setSelectRank('NO WINS')
                                    hideModal()
                                  }}>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-lg">NO WINS</Text>
                                  </TouchableOpacity>

                                  <TouchableOpacity onPress={() => {
                                    setSelectRank('0 - 5 WINS')
                                    hideModal()
                                  }} className="mt-4">
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-lg">0 - 5 WINS</Text>
                                  </TouchableOpacity>

                                  <TouchableOpacity onPress={() => {
                                    setSelectRank('5 - 10 WINS')
                                    hideModal()
                                  }} className="mt-4">
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-lg">5 - 10 WINS</Text>
                                  </TouchableOpacity>

                                  <TouchableOpacity onPress={() => {
                                    setSelectRank('10 - 15 WINS')
                                    hideModal()
                                  }} className="mt-4">
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-lg">10 - 15 WINS</Text>
                                  </TouchableOpacity>

                                  <TouchableOpacity onPress={() => {
                                    setSelectRank('15+ WINS')
                                    hideModal()
                                  }} className="mt-4">
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-lg">15+ WINS</Text>
                                  </TouchableOpacity>
                                </View>

                              </View>
                            </View>
                          </Modal>

                          <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-5">EA ID</Text>
                          <TextInput
                            mode='outlined'
                            style={{ backgroundColor: activeColors.cardBackground }}
                            placeholder='12313'
                            activeOutlineColor='#D1CBD8'
                            outlineColor='#D1CBD8'
                            keyboardType='number-pad'
                            textColor='#fff'
                          />

                          <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-5">Esport Team</Text>
                          <TextInput
                            mode='outlined'
                            style={{ backgroundColor: activeColors.cardBackground }}
                            placeholder='E-FOOT.GG'
                            activeOutlineColor='#D1CBD8'
                            outlineColor='#D1CBD8'
                            textColor='#fff'
                          />

                          <View className="items-end">
                            <TouchableOpacity className='h-10 items-center justify-center w-40 mt-3'>
                              <LinearGradient
                                colors={['#4A00E8', '#3B3EFF']}
                                className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                              />
                              <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Save changes</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Animated.View>
                    )}

                    <TouchableOpacity activeOpacity={1.0} onPress={handleChangePasswordDropdown} style={{ backgroundColor: activeColors.cardBackground }} className={`p-3 flex-row items-center justify-between ${isChangePasswordOpen ? 'rounded-t-lg' : 'rounded-lg'} mt-5`}>
                      <View className="flex-row items-center space-x-3 ml-3">
                        {theme.mode === 'dark' ? (<LockSvg />) : (<LockLightSvg />)}
                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xl">Change Password</Text>
                      </View>

                      <View className="mr-3">
                        {isGeneralOpen ? (<View>
                          {theme.mode === 'dark' ? (<UpASvg />) : (<UpALightSvg />)}
                        </View>) : (<View>
                          {theme.mode === 'dark' ? (<DownASvg />) : (<DownALightSvg />)}
                        </View>)}
                      </View>
                    </TouchableOpacity>

                    {isChangePasswordOpen && (
                      <Animated.View style={{ backgroundColor: activeColors.cardBackground }} className="h-auto rounded-b-lg p-3">
                        <View>
                          <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm">Old Password</Text>
                          <TextInput
                            value={oldPassword}
                            mode='outlined'
                            style={{ backgroundColor: activeColors.cardBackground }}
                            placeholder='ALenmaxwell345'
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

                          <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-5">Password</Text>
                          <TextInput
                            value={password}
                            onChangeText={handlePasswordChanged}
                            mode='outlined'
                            style={{ backgroundColor: activeColors.cardBackground }}
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

                          <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-5">Confirm new Password</Text>
                          <TextInput
                            value={confirmPassword}
                            onChangeText={handleConfirmPasswordChanged}
                            mode='outlined'
                            style={{ backgroundColor: activeColors.cardBackground }}
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
                          {confirmPasswordError ? (
                            <View className="mt-1"><Text className="text-[#FF0000]">{passwordError}</Text></View>
                          ) : (
                            null
                          )}

                          <View className="items-end">
                            <TouchableOpacity className='h-10 items-center justify-center w-40 mt-3'>
                              <LinearGradient
                                colors={['#4A00E8', '#3B3EFF']}
                                className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                              />
                              <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Change Password</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Animated.View>
                    )}

                    <TouchableOpacity activeOpacity={1.0} onPress={handleUserPreferencesDropdown} style={{ backgroundColor: activeColors.cardBackground }} className={`p-3 flex-row items-center justify-between ${isUserPreferencesOpen ? 'rounded-t-lg' : 'rounded-lg'} mt-5`}>
                      <View className="flex-row items-center space-x-3 ml-3">
                        {theme.mode === 'dark' ? (<BellSvg />) : (<BellLightSvg />)}
                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xl">User preferences</Text>
                      </View>

                      <View className="mr-3">
                        {isGeneralOpen ? (<View>
                          {theme.mode === 'dark' ? (<UpASvg />) : (<UpALightSvg />)}
                        </View>) : (<View>
                          {theme.mode === 'dark' ? (<DownASvg />) : (<DownALightSvg />)}
                        </View>)}
                      </View>
                    </TouchableOpacity>

                    {isUserPreferencesOpen && (
                      <Animated.View style={{ backgroundColor: activeColors.cardBackground }} className="h-auto rounded-b-lg p-3">
                        <View>
                          <View className={`flex-row items-center justify-between mr-2`}>
                            <Text style={{ color: activeColors.textPrimary, width: responsiveWidth(55) }} className="font-ChakraPetchLight text-base">Chat Notifications(You will get the notification for the chat request and unviewed messages)</Text>

                            <Switch
                              value={isSwitchOneOn}
                              onValueChange={onToggleSwitchOne}
                              color={'#3B3EFF'}
                            />
                          </View>

                          <View className="mt-5 flex-row items-center justify-between mr-2">
                            <Text style={{ color: activeColors.textPrimary, width: responsiveWidth(55) }} className="font-ChakraPetchLight text-base">Challenge (You will get notification for challenge invite challenge accepted and result)</Text>

                            <Switch
                              value={isSwitchTwoOn}
                              onValueChange={onToggleSwitchTwo}
                              color={'#3B3EFF'}
                            />
                          </View>

                          <View className="items-end">
                            <TouchableOpacity className='h-10 items-center justify-center w-40 mt-3'>
                              <LinearGradient
                                colors={['#4A00E8', '#3B3EFF']}
                                className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                              />
                              <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Join Match</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Animated.View>
                    )}
                  </View>
                </View>
              </ScrollView>
            </TouchableOpacity>

            <View className="mt-10" />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </>
  )
}

export default MyProfileScreen;