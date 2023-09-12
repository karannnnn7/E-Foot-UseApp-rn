import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../config/Theme';
import { ThemeContext } from '../context/ThemeContext';
import CommonHeader from '../components/CommonHeader';
import SearchSvg from '../../assets/svg/Search.svg';
import SearchLightSvg from '../../assets/svg/SearchLight.svg';
import NotificationSignSvg from '../../assets/svg/NotificationSign.svg';

const NotificationScreen = ({ navigation }) => {

    // const theme = { mode: 'light' };
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    return (
        <>
            <View style={{ backgroundColor: activeColors.background }} className="h-full">
                <CommonHeader navigation={navigation} />

                <View className="mx-5">
                    <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="h-full mt-3">
                        <View>
                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-xl">Notifications</Text>
                        </View>

                        <View>
                            <TextInput
                                mode='outlined'
                                placeholder='Search notification'
                                outlineColor='#0B0711'
                                placeholderTextColor={colors.textPrimary}
                                className={`pl-8`}
                                style={{ backgroundColor: activeColors.cardBackground }}
                            />

                            <View className="absolute top-5 left-4">
                                {theme.mode === 'dark' ? (<SearchSvg />) : (<SearchLightSvg />)}
                            </View>
                        </View>

                        <View style={{ backgroundColor: activeColors.cardBackground }} className="h-auto mt-5 p-5 rounded-lg">
                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-lg">New</Text>

                            <View style={{ backgroundColor: activeColors.NotificationBackground }} className="p-3 mt-3 -mx-5">
                                <TouchableOpacity className="flex-row items-start space-x-4">
                                    <View className="bg-[#1890FF1F] rounded-full p-3">
                                        <NotificationSignSvg />
                                    </View>

                                    <View>
                                        <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-base ">Profile Updated</Text>
                                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base mt-1">You updated your profile picture</Text>
                                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">11 hours ago</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                    <View className="bg-[#1890FF1F] rounded-full p-3">
                                        <NotificationSignSvg />
                                    </View>

                                    <View>
                                        <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-base">Profile Updated</Text>
                                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base mt-1">You updated your profile picture</Text>
                                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">12 hours ago</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                    <View className="bg-[#1890FF1F] rounded-full p-3">
                                        <NotificationSignSvg />
                                    </View>

                                    <View>
                                        <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-base">Profile Updated</Text>
                                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base mt-1">You updated your profile picture</Text>
                                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">21 hours ago</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <Text style={{ color: activeColors.textPrimary }} className="font-Cha-kraPetchMedium text-lg mt-5">Earlier</Text>

                            <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                <View className="bg-[#1890FF1F] rounded-full p-3">
                                    <NotificationSignSvg />
                                </View>

                                <View>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Profile Updated</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base mt-1">You updated your profile picture</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">11 hours ago</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                <View className="bg-[#1890FF1F] rounded-full p-3">
                                    <NotificationSignSvg />
                                </View>

                                <View>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Profile Updated</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base mt-1">You updated your profile picture</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">12 hours ago</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                <View className="bg-[#1890FF1F] rounded-full p-3">
                                    <NotificationSignSvg />
                                </View>

                                <View>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Profile Updated</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base mt-1">You updated your profile picture</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">21 hours ago</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                <View className="bg-[#1890FF1F] rounded-full p-3">
                                    <NotificationSignSvg />
                                </View>

                                <View>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Profile Updated</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base mt-1">You updated your profile picture</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">21 hours ago</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                <View className="bg-[#1890FF1F] rounded-full p-3">
                                    <NotificationSignSvg />
                                </View>

                                <View>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Profile Updated</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base mt-1">You updated your profile picture</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">21 hours ago</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                <View className="bg-[#1890FF1F] rounded-full p-3">
                                    <NotificationSignSvg />
                                </View>

                                <View>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Profile Updated</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base mt-1">You updated your profile picture</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">21 hours ago</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                <View className="bg-[#1890FF1F] rounded-full p-3">
                                    <NotificationSignSvg />
                                </View>

                                <View>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Profile Updated</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base mt-1">You updated your profile picture</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">21 hours ago</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View className="mt-36" />
                    </ScrollView>
                </View>
            </View>
        </>
    )
}

export default NotificationScreen;