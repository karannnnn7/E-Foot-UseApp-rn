import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DrawerLogoSvg from '../../assets/svg/DrawerLogo.svg';
import CloseSvg from '../../assets/svg/Close.svg';
import MyProfileSvg from '../../assets/svg/MyProfile.svg';
import MyMatchSvg from '../../assets/svg/MyMatch.svg';
import ContectUsSvg from '../../assets/svg/ContectUs.svg';
import HowToPlaySvg from '../../assets/svg/HowToPlay.svg';
import YouTubeSvg from '../../assets/svg/YouTube.svg';
import ChatsSvg from '../../assets/svg/Chats.svg';
import MailSvg from '../../assets/svg/Mail.svg';
import InstagramSvg from '../../assets/svg/Instagram.svg';

const Customization = ({ navigation }) => {

    const closeDrawer = () => {
        navigation.closeDrawer();
    };

    return (
        <>
            <View className="bg-[#261D37] h-full">
                <View className="flex-row items-center justify-between">
                    <View className="mt-5 mx-3 flex-row items-center space-x-2">
                        <DrawerLogoSvg />
                        <Text className="font-ChakraPetchBold text-3xl text-[#D1CBD8] mt-2">E-Foot.NL</Text>
                    </View>

                    <TouchableOpacity onPress={closeDrawer} className="mt-5 mr-3">
                        <CloseSvg />
                    </TouchableOpacity>
                </View>

                <View className="mx-5 mt-10">
                    <TouchableOpacity className="flex-row items-center space-x-3 my-5">
                        <MyProfileSvg />
                        <Text className="font-ChakraPetchMedium text-2xl text-[#D1CBD8]">My profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center space-x-3 my-5">
                        <MyMatchSvg />
                        <Text className="font-ChakraPetchMedium text-2xl text-[#D1CBD8]">My Matches</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center space-x-3 my-5">
                        <ContectUsSvg />
                        <Text className="font-ChakraPetchMedium text-2xl text-[#D1CBD8]">Contact Us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center space-x-3 my-5">
                        <HowToPlaySvg />
                        <Text className="font-ChakraPetchMedium text-2xl text-[#D1CBD8]">How to play?</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-grow justify-end my-5">
                    <TouchableOpacity className="items-center">
                        <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Terms Of Use - Privacy Policy</Text>
                    </TouchableOpacity>

                    <View className="flex-row items-center justify-center space-x-5 mt-8">
                        <TouchableOpacity>
                            <YouTubeSvg />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <ChatsSvg />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <MailSvg />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <InstagramSvg />
                        </TouchableOpacity>
                    </View>

                    <View className="items-center mt-16"> 
                        <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Made with  💙 Adept Digitals</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Customization;