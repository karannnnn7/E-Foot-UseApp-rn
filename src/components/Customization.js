import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../config/Theme';
import { ThemeContext } from '../context/ThemeContext';
import DrawerLogoSvg from '../../assets/svg/DrawerLogo.svg';
import CloseSvg from '../../assets/svg/Close.svg';
import CloseLightSvg from '../../assets/svg/CloseLight.svg';
import MyProfileSvg from '../../assets/svg/MyProfile.svg';
import MyProfileLightSvg from '../../assets/svg/MyProfileLight.svg';
import MyMatchSvg from '../../assets/svg/MyMatch.svg';
import MyMatchLightSvg from '../../assets/svg/MyMatchLight.svg';
import ContectUsSvg from '../../assets/svg/ContectUs.svg';
import ContectUsLightSvg from '../../assets/svg/ContectUsLight.svg';
import HowToPlaySvg from '../../assets/svg/HowToPlay.svg';
import HowToPlayLightSvg from '../../assets/svg/HowToPlayLight.svg';
import YouTubeSvg from '../../assets/svg/YouTube.svg';
import YouTubeLightSvg from '../../assets/svg/YouTubeLight.svg';
import ChatsSvg from '../../assets/svg/Chats.svg';
import ChatsLightSvg from '../../assets/svg/ChatsLight.svg';
import MailSvg from '../../assets/svg/Mail.svg';
import MailLightSvg from '../../assets/svg/MailLight.svg';
import InstagramSvg from '../../assets/svg/Instagram.svg';
import InstagramLightSvg from '../../assets/svg/InstagramLight.svg';

const Customization = ({ navigation }) => {

    // const theme = { mode: 'light' };
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    const closeDrawer = () => {
        navigation.closeDrawer();
    };

    return (
        <>
            <View style={{ backgroundColor: activeColors.cardBackground }} className="h-full">
                <View className="flex-row items-center justify-between">
                    <TouchableOpacity onPress={() => navigation.navigate('main')} className="mt-5 mx-3 flex-row items-center space-x-2">
                        <DrawerLogoSvg />
                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-3xl mt-2">E-Foot.NL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={closeDrawer} className="mt-5 mr-3">
                        {theme.mode === 'dark' ? (<CloseSvg />) : (<CloseLightSvg />)}
                    </TouchableOpacity>
                </View>

                <View className="mx-5 mt-10">
                    <TouchableOpacity onPress={() => navigation.navigate('myProfile')} className="flex-row items-center space-x-3 my-5">
                        {theme.mode === 'dark' ? (<MyProfileSvg />) : (<MyProfileLightSvg />)}
                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-2xl">My profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('myMatches')} className="flex-row items-center space-x-3 my-5">
                        {theme.mode === 'dark' ? (<MyMatchSvg />) : (<MyMatchLightSvg />)}
                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-2xl">My Matches</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate('contectUs')
                        closeDrawer
                    }} className="flex-row items-center space-x-3 my-5">
                        {theme.mode === 'dark' ? (<ContectUsSvg />) : (<ContectUsLightSvg />)}
                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-2xl">Contact Us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('howToPlay')} className="flex-row items-center space-x-3 my-5">
                        {theme.mode === 'dark' ? (<HowToPlaySvg />) : (<HowToPlayLightSvg />)}
                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-2xl">How to play?</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-grow justify-end my-5">
                    <TouchableOpacity className="items-center">
                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">Terms Of Use - Privacy Policy</Text>
                    </TouchableOpacity>

                    <View className="flex-row items-center justify-center space-x-5 mt-8">
                        <TouchableOpacity>
                            {theme.mode === 'dark' ? (<YouTubeSvg />) : (<YouTubeLightSvg />)}
                        </TouchableOpacity>

                        <TouchableOpacity>
                            {theme.mode === 'dark' ? (<ChatsSvg />) : (<ChatsLightSvg />)}
                        </TouchableOpacity>

                        <TouchableOpacity>
                            {theme.mode === 'dark' ? (<MailSvg />) : (<MailLightSvg />)}
                        </TouchableOpacity>

                        <TouchableOpacity>
                            {theme.mode === 'dark' ? (<InstagramSvg />) : (<InstagramLightSvg />)}
                        </TouchableOpacity>
                    </View>

                    <View className="items-center mt-16">
                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">Made with  💙 Adept Digitals</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Customization;