import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../config/Theme';
import DrawerMenuSvg from '../../assets/svg/Drawer.svg';
import DrawerMenuLightSvg from '../../assets/svg/DrawerMenuLight.svg';
import NotificationSvg from '../../assets/svg/Notification.svg';
import NotificationLightSvg from '../../assets/svg/NotificationLight.svg';
import FlagSvg from '../../assets/svg/Flag.svg';
import ProfilePicSvg from '../../assets/svg/ProfilePic.svg';
import ProfileIconSvg from '../../assets/svg/ProfileIcon.svg';
import ProfileIconLightSvg from '../../assets/svg/ProfileIconLight.svg';
import LightIconSvg from '../../assets/svg/LightIcon.svg';
import DarkIconSvg from '../../assets/svg/DarkIcon.svg';

const CommonHeader = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const theme = { mode: 'light' }
    let activeColors = colors[theme.mode]


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

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <ProfilePicSvg />
                    </TouchableOpacity>

                    {modalVisible && (
                        <View className={`${isDarkTheme ? 'bg-[#FFFFFF]' : 'bg-[#261D37]'} w-24 absolute right-0 top-11 rounded-lg flex-row items-center justify-around`}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('myProfile')
                                setModalVisible(false)
                            }} className="items-center my-2">
                                {isDarkTheme ? (<ProfileIconLightSvg />) : (<ProfileIconSvg />)}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                toggleTheme()
                                setModalVisible(false)
                            }} className="my-3 items-center">
                                {isDarkTheme ? (<DarkIconSvg />) : (<LightIconSvg />)}
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}

export default CommonHeader;