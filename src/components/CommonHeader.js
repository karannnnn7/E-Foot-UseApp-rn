import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../config/Theme';
import { ThemeContext } from '../context/ThemeContext';
import DrawerMenuSvg from '../../assets/svg/Drawer.svg';
import DrawerMenuLightSvg from '../../assets/svg/DrawerMenuLight.svg';
import NotificationSvg from '../../assets/svg/Notification.svg';
import NotificationLightSvg from '../../assets/svg/NotificationLight.svg';
import FlagSvg from '../../assets/svg/Flag.svg';
import ProfilePicSvg from '../../assets/svg/ProfilePic.svg';
import LightIconSvg from '../../assets/svg/LightIcon.svg';
import DarkIconSvg from '../../assets/svg/DarkIcon.svg';
import LogOutSvg from '../../assets/svg/LogOut.svg';

const CommonHeader = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);

    // const theme = { mode: 'light' }
    const { theme, updateTheme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    const [isActive, setIsActive] = useState(theme.mode === 'dark');
    const handleTheme = () => {
        updateTheme();
        setIsActive((previousState) => !previousState);
    };

    //For OpenDrawer with Custom Button
    const openDrawer = () => {
        navigation.openDrawer();
    };


    return (
        <View>
            <View className="flex-row items-center justify-between mx-5 my-5">
                <TouchableOpacity onPress={openDrawer}>
                    {theme.mode === 'dark' ? (<DrawerMenuSvg />) : (<DrawerMenuLightSvg />)}
                </TouchableOpacity>

                <View className="flex-row items-center space-x-5">
                    <View style={{ backgroundColor: activeColors.cardBackground }} className={`bg-transparent border border-[#3B3EFF] rounded-xl p-3`}>
                        <Text style={{ color: activeColors.textPrimary }} className={`text-sm font-ChakraPetchBold`}>0 - 5 WINS</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('notification')}>
                        {theme.mode === 'dark' ? (<NotificationSvg />) : (<NotificationLightSvg />)}
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <FlagSvg />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        handleTheme()
                        setIsActive(!isActive)
                        setModalVisible(false)
                    }} className="my-3 items-center">
                        {theme.mode === 'dark' ? (<LightIconSvg />) : (<DarkIconSvg />)}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <ProfilePicSvg />
                    </TouchableOpacity>

                    {modalVisible && (
                        <View style={{ backgroundColor: activeColors.cardBackground }} className={`w-24 absolute right-0 top-11  rounded-lg`}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('myProfile')
                                setModalVisible(false)
                            }} className="items-center my-2">
                                <ProfilePicSvg width={60} height={60} />

                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-1">Daniel Marvin</Text>

                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('login')
                                    setModalVisible(false)
                                    }} className="flex-row items-center space-x-2 mt-2">
                                    <LogOutSvg />

                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Log Out</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}

export default CommonHeader;