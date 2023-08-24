import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DrawerMenuSvg from '../../assets/svg/Drawer.svg';
import NotificationSvg from '../../assets/svg/Notification.svg';
import FlagSvg from '../../assets/svg/Flag.svg';
import ProfilePicSvg from '../../assets/svg/ProfilePic.svg';


const CommonHeader = ({ navigation }) => {


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
                    <TouchableOpacity className="bg-transparent bg-[#2c2544] border border-[#3B3EFF] rounded-xl p-3">
                        <Text className="text-white text-sm font-ChakraPetchBold">0 - 5 WINS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <NotificationSvg />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <FlagSvg />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ProfilePicSvg />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CommonHeader;