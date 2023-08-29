import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DrawerMenuSvg from '../../assets/svg/Drawer.svg';
import NotificationSvg from '../../assets/svg/Notification.svg';
import FlagSvg from '../../assets/svg/Flag.svg';
import ProfilePicSvg from '../../assets/svg/ProfilePic.svg';
import ProfileIconSvg from '../../assets/svg/ProfileIcon.svg';
import LightIconSvg from '../../assets/svg/LightIcon.svg';
import DarkIconSvg from '../../assets/svg/DarkIcon.svg';


const CommonHeader = ({ navigation, onPress }) => {

    const [modalVisible, setModalVisible] = useState(false);

    //For OpenDrawer with Custom Button
    const openDrawer = () => {
        navigation.openDrawer();
    };


    return (
        <View>
            <View className="flex-row items-center justify-between mx-5 my-5">
                <TouchableOpacity onPress={openDrawer}>
                    <DrawerMenuSvg />
                </TouchableOpacity>

                <View className="flex-row items-center space-x-5">
                    <View className="bg-transparent bg-[#2c2544] border border-[#3B3EFF] rounded-xl p-3">
                        <Text className="text-white text-sm font-ChakraPetchBold">0 - 5 WINS</Text>
                    </View>

                    <TouchableOpacity>
                        <NotificationSvg />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <FlagSvg />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <ProfilePicSvg />
                    </TouchableOpacity>

                    {modalVisible && (
                        <View className="bg-[#261D37] w-24 absolute right-0 top-11 rounded-lg flex-row items-center justify-around">
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('myProfile')
                                setModalVisible(false)
                            }} className="items-center my-2">
                                <ProfileIconSvg />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onPress} className="my-3 items-center">
                                <LightIconSvg />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}

export default CommonHeader;