import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import CommonHeader from '../components/CommonHeader';
import SearchSvg from '../../assets/svg/Search.svg';
import NotificationSignSvg from '../../assets/svg/NotificationSign.svg';

const NotificationScreen = ({ navigation }) => {
    return (
        <>
            <View className="bg-[#0B0711] h-full">
                <CommonHeader navigation={navigation} />

                <View className="mx-5">
                    <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="h-full mt-3">
                        <View>
                            <Text className="font-ChakraPetchBold text-xl text-[#D1CBD8]">Notifications</Text>
                        </View>

                        <View>
                            <TextInput
                                mode='outlined'
                                placeholder='Search notification'
                                outlineColor='#0B0711'
                                placeholderTextColor={`#D1CBD8`}
                                className={`bg-[#261D37] pl-8`}
                            />

                            <View className="absolute top-5 left-4">
                                <SearchSvg />
                            </View>
                        </View>

                        <View className="bg-[#261D37] h-auto mt-5 p-5 rounded-lg">
                            <Text className="font-ChakraPetchMedium text-lg text-[#D1CBD8]">New</Text>

                            <View className="bg-[#352A4B] p-3 mt-3 -mx-5">
                                <TouchableOpacity className="flex-row items-start space-x-4">
                                    <View className="bg-[#1890FF1F] rounded-full p-3">
                                        <NotificationSignSvg />
                                    </View>

                                    <View>
                                        <Text className="font-ChakraPetchBold text-base text-white">Profile Updated</Text>
                                        <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8] mt-1">You updated your profile picture</Text>
                                        <Text className="font-ChakraPetchMedium text-xs text-[#D1CBD8]">11 hours ago</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                    <View className="bg-[#1890FF1F] rounded-full p-3">
                                        <NotificationSignSvg />
                                    </View>

                                    <View>
                                        <Text className="font-ChakraPetchBold text-base text-white">Profile Updated</Text>
                                        <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8] mt-1">You updated your profile picture</Text>
                                        <Text className="font-ChakraPetchMedium text-xs text-[#D1CBD8]">12 hours ago</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                    <View className="bg-[#1890FF1F] rounded-full p-3">
                                        <NotificationSignSvg />
                                    </View>

                                    <View>
                                        <Text className="font-ChakraPetchBold text-base text-white">Profile Updated</Text>
                                        <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8] mt-1">You updated your profile picture</Text>
                                        <Text className="font-ChakraPetchMedium text-xs text-[#D1CBD8]">21 hours ago</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <Text className="font-Cha-kraPetchMedium text-lg text-[#D1CBD8] mt-5">Earlier</Text>

                            <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                <View className="bg-[#1890FF1F] rounded-full p-3">
                                    <NotificationSignSvg />
                                </View>

                                <View>
                                    <Text className="font-ChakraPetchBold text-base text-white">Profile Updated</Text>
                                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8] mt-1">You updated your profile picture</Text>
                                    <Text className="font-ChakraPetchMedium text-xs text-[#D1CBD8]">11 hours ago</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                <View className="bg-[#1890FF1F] rounded-full p-3">
                                    <NotificationSignSvg />
                                </View>

                                <View>
                                    <Text className="font-ChakraPetchBold text-base text-white">Profile Updated</Text>
                                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8] mt-1">You updated your profile picture</Text>
                                    <Text className="font-ChakraPetchMedium text-xs text-[#D1CBD8]">12 hours ago</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                <View className="bg-[#1890FF1F] rounded-full p-3">
                                    <NotificationSignSvg />
                                </View>

                                <View>
                                    <Text className="font-ChakraPetchBold text-base text-white">Profile Updated</Text>
                                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8] mt-1">You updated your profile picture</Text>
                                    <Text className="font-ChakraPetchMedium text-xs text-[#D1CBD8]">21 hours ago</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                <View className="bg-[#1890FF1F] rounded-full p-3">
                                    <NotificationSignSvg />
                                </View>

                                <View>
                                    <Text className="font-ChakraPetchBold text-base text-white">Profile Updated</Text>
                                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8] mt-1">You updated your profile picture</Text>
                                    <Text className="font-ChakraPetchMedium text-xs text-[#D1CBD8]">21 hours ago</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                <View className="bg-[#1890FF1F] rounded-full p-3">
                                    <NotificationSignSvg />
                                </View>

                                <View>
                                    <Text className="font-ChakraPetchBold text-base text-white">Profile Updated</Text>
                                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8] mt-1">You updated your profile picture</Text>
                                    <Text className="font-ChakraPetchMedium text-xs text-[#D1CBD8]">21 hours ago</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                <View className="bg-[#1890FF1F] rounded-full p-3">
                                    <NotificationSignSvg />
                                </View>

                                <View>
                                    <Text className="font-ChakraPetchBold text-base text-white">Profile Updated</Text>
                                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8] mt-1">You updated your profile picture</Text>
                                    <Text className="font-ChakraPetchMedium text-xs text-[#D1CBD8]">21 hours ago</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-start space-x-4 mt-7">
                                <View className="bg-[#1890FF1F] rounded-full p-3">
                                    <NotificationSignSvg />
                                </View>

                                <View>
                                    <Text className="font-ChakraPetchBold text-base text-white">Profile Updated</Text>
                                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8] mt-1">You updated your profile picture</Text>
                                    <Text className="font-ChakraPetchMedium text-xs text-[#D1CBD8]">21 hours ago</Text>
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