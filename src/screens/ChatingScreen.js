import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Dimensions } from 'react-native';
import { colors } from '../config/Theme';
import { ThemeContext } from '../context/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';
import BackArrowSvg from '../../assets/svg/BackArrow.svg';
import BackArrowLightSvg from '../../assets/svg/BackArrowLight.svg';
import ChatDp1Svg from '../../assets/svg/ChatDp1.svg';
import MenuSvg from '../../assets/svg/Menu.svg';
import MenuLightSvg from '../../assets/svg/MenuLight.svg';
import ChatPhotoSvg from '../../assets/svg/ChatPhoto.svg';
import PlayButtonSvg from '../../assets/svg/PlayButton.svg';
import PlayButtonLightSvg from '../../assets/svg/PlayButtonLight.svg';
import VoiceSvg from '../../assets/svg/Voice.svg';
import VoiceLightSvg from '../../assets/svg/VoiceLight.svg';
import EmojisSvg from '../../assets/svg/Emojis.svg';
import EmojisLightSvg from '../../assets/svg/EmojisLight.svg';
import DocsSvg from '../../assets/svg/Docs.svg';
import DocsLightSvg from '../../assets/svg/DocsLight.svg';
import CamSvg from '../../assets/svg/Cam.svg';
import CamLightSvg from '../../assets/svg/CamLight.svg';
import SendMessageSvg from '../../assets/svg/SendMessage.svg';

const ChatingScreen = ({ navigation }) => {

    // const theme = { mode: "light" }
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode]
    isSmallScreen = Dimensions.get('screen').height > 850;



    return (
        <>
            <View style={{ backgroundColor: activeColors.background }} className="h-full flex-1">
                <View style={{ backgroundColor: activeColors.cardBackground }} className="pb-5">
                    <View className="flex-row items-center justify-between mx-5 mt-5">
                        <View className="flex-row items-center space-x-5">
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                {theme.mode === 'dark' ? (<BackArrowSvg />) : (<BackArrowLightSvg />)}
                            </TouchableOpacity>

                            <View className="flex-row items-center space-x-3">
                                <ChatDp1Svg />
                                <View>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-xl">Jenny Wilson</Text>
                                    <Text className="font-ChakraPetchMedium text-sm text-[#33D49D]">Online</Text>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity>
                            {theme.mode === 'dark' ? (<MenuSvg />) : (<MenuLightSvg />)}
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="h-full">
                    <View style={{ backgroundColor: activeColors.background }} className="flex-1 mx-3">
                        <View className="flex-row mt-5 space-x-3">
                            <View className="justify-end">
                                <ChatPhotoSvg />
                            </View>

                            <View style={{ backgroundColor: activeColors.cardBackground }} className="p-4 rounded-t-2xl rounded-br-2xl w-80">
                                <Text style={{ color: activeColors.textPrimary }}>Draw a line in the sand drop-dead a date. Thanks Proceduralize weaponize the data </Text>
                                <Text style={{ color: activeColors.textPrimary, marginTop: 10 }}>6:27 PM</Text>
                            </View>
                        </View>

                        <View className="flex-row mt-5 space-x-3">
                            <View className="justify-end">
                                <ChatPhotoSvg />
                            </View>

                            <View style={{ backgroundColor: activeColors.cardBackground }} className="p-4 rounded-t-2xl rounded-br-2xl w-auto">
                                <View className="flex-row items-center space-x-2">
                                    <TouchableOpacity>
                                        {theme.mode === 'dark' ? (<PlayButtonSvg />) : (<PlayButtonLightSvg />)}
                                    </TouchableOpacity>

                                    <View>
                                        {theme.mode === 'dark' ? (<VoiceSvg />) : (<VoiceLightSvg />)}
                                    </View>
                                </View>
                                <Text style={{ color: activeColors.textPrimary, marginTop: 10 }}>6:27 PM</Text>
                            </View>
                        </View>

                        <View className="flex-row mt-7 justify-end space-x-3">
                            <View className="p-4 w-80">
                                <LinearGradient
                                    colors={['#4A00E8', '#3B3EFF']}
                                    className="h-auto absolute top-0 bottom-0 left-0 right-0 rounded-t-2xl rounded-bl-2xl"
                                />
                                <Text className="text-white">Draw a line in the sand drop-dead date. And to Proceduralije weaponize their  data yet ping me. Draw a line in whole</Text>
                                <Text className="text-white mt-2 text-right">6:27 PM</Text>
                            </View>

                            <View className="justify-end">
                                <ChatPhotoSvg />
                            </View>
                        </View>

                        <View className="flex-row mt-7 space-x-3">
                            <View className="justify-end">
                                <ChatPhotoSvg />
                            </View>

                            <View style={{ backgroundColor: activeColors.cardBackground }} className="p-4 rounded-t-2xl rounded-br-2xl w-80">
                                <Text style={{ color: activeColors.textPrimary }}>Great! Thanks. </Text>
                                <Text style={{ color: activeColors.textPrimary, marginTop: 10 }}>6:27 PM</Text>
                            </View>
                        </View>

                        <View className="flex-row mt-7 justify-end space-x-3">
                            <View className="p-4 w-auto">
                                <LinearGradient
                                    colors={['#4A00E8', '#3B3EFF']}
                                    className="h-auto absolute top-0 bottom-0 left-0 right-0 rounded-t-2xl rounded-bl-2xl"
                                />
                                <Text className="text-white text-right">Its my pleasure!</Text>
                                <Text className="text-white mt-2 text-right">6:27 PM</Text>
                            </View>

                            <View className="justify-end">
                                <ChatPhotoSvg />
                            </View>
                        </View>

                        <View className="flex-row mt-5 space-x-3">
                            <View className="justify-end">
                                <ChatPhotoSvg />
                            </View>

                            <View style={{ backgroundColor: activeColors.cardBackground }} className="p-4 rounded-t-2xl rounded-br-2xl w-auto">
                                <View className="flex-row items-center space-x-2">
                                    <TouchableOpacity>
                                        {theme.mode === 'dark' ? (<PlayButtonSvg />) : (<PlayButtonLightSvg />)}
                                    </TouchableOpacity>

                                    <View>
                                        {theme.mode === 'dark' ? (<VoiceSvg />) : (<VoiceLightSvg />)}
                                    </View>
                                </View>
                                <Text style={{ color: activeColors.textPrimary, marginTop: 10 }}>6:27 PM</Text>
                            </View>
                        </View>

                        <View className="flex-row mt-7 justify-end space-x-3">
                            <View className="p-4 w-auto">
                                <LinearGradient
                                    colors={['#4A00E8', '#3B3EFF']}
                                    className="h-auto absolute top-0 bottom-0 left-0 right-0 rounded-t-2xl rounded-bl-2xl"
                                />
                                <Text className="text-white text-right">BBye Cyaa!</Text>
                                <Text className="text-white mt-2 text-right">6:27 PM</Text>
                            </View>

                            <View className="justify-end">
                                <ChatPhotoSvg />
                            </View>
                        </View>
                    </View>

                    <View className="mt-10" />
                </ScrollView>

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={50}
                    className="flex-grow"
                >
                    <View className="flex-row items-center mb-5">
                        <View className="w-80 mx-5">
                            <TextInput
                                placeholder='Message'
                                placeholderTextColor={colors.textPrimary}
                                style={{ backgroundColor: activeColors.cardBackground, padding: 15, borderRadius: 7, paddingLeft: 45 }}
                            />

                            <TouchableOpacity className={`absolute left-3 ${isSmallScreen ? 'top-3' : 'top-4'}`}>
                                {theme.mode === 'dark' ? (<EmojisSvg />) : (<EmojisLightSvg />)}
                            </TouchableOpacity>

                            <TouchableOpacity className="absolute right-14 top-5">
                                {theme.mode === 'dark' ? (<DocsSvg />) : (<DocsLightSvg />)}
                            </TouchableOpacity>

                            <TouchableOpacity className="absolute right-4 top-5">
                                {theme.mode === 'dark' ? (<CamSvg />) : (<CamLightSvg />)}
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity className="p-3 items-center justify-center">
                            <LinearGradient
                                colors={['#4A00E8', '#3B3EFF']}
                                className="h-auto absolute top-0 bottom-0 left-0 right-0 rounded-full"
                            />
                            <SendMessageSvg />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </>
    )
}

export default ChatingScreen;






