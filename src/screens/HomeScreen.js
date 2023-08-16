import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DrawerMenuSvg from '../../assets/svg/Drawer.svg';
import NotificationSvg from '../../assets/svg/Notification.svg';
import FlagSvg from '../../assets/svg/Flag.svg';
import ProfilePicSvg from '../../assets/svg/ProfilePic.svg';
import GameSvg from '../../assets/svg/Game.svg';
import RightArrowSvg from '../../assets/svg/RightArrow.svg';
import OnlineUserSvg from '../../assets/svg/OnlineUser.svg';
import SearchSvg from '../../assets/svg/Search.svg';
import FilterSvg from '../../assets/svg/Filter.svg';
import TrophySvg from '../../assets/svg/Trophy.svg';
import RankSvg from '../../assets/svg/Rank.svg';
import { TextInput } from 'react-native-paper';

const HomeScreen = () => {
    return (
        <>
            <View className="bg-[#0B0711] h-full">

                {/* Header */}
                <View className="flex-row items-center justify-between mx-5 mt-5">
                    <TouchableOpacity onPress={() => console.log('pressed')}>
                        <DrawerMenuSvg />
                    </TouchableOpacity>

                    <View className="flex-row items-center space-x-5">
                        <TouchableOpacity className="bg-transparent bg-[#140055] border border-[#3B3EFF] rounded-xl p-3">
                            <Text className="text-white text-sm font-PlayBold">0 - 5 WINS</Text>
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


                <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="mt-5 h-full">
                    <View className="mt-10 mx-5 flex-row items-center space-x-2">
                        <GameSvg />
                        <Text className="font-PlayBold text-xl text-[#D1CBD8]">Upcoming games</Text>
                    </View>

                    <View className="mt-5">
                        <View className="items-center">
                            <Image source={require('../../assets/Pic-1.png')} />
                        </View>

                        <View className="opacity-90 bg-[#261D37] mx-4 p-5 rounded-md absolute bottom-0 flex-row items-center justify-between w-[381px] border border-[#3B3EFF]">
                            <View>
                                <Text className="font-PlayBold text-base text-[#D1CBD8]">FREE play 1Vs1 (training)</Text>

                                <Text className="font-PlayRegular text-base text-[#D1CBD8]">Admin efoot | PS5 </Text>

                                <Text className="font-PlayRegular text-sm text-[#D1CBD8]">26-05-23; 04:56</Text>
                            </View>

                            <TouchableOpacity onPress={() => console.log('pressed')} className='h-10 items-center justify-center w-16'>
                                <LinearGradient
                                    colors={['#4A00E8', '#3B3EFF']}
                                    className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                                />
                                <RightArrowSvg />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="mt-10 mx-5 flex-row items-center justify-between">
                        <View className="flex-row items-center space-x-2">
                            <GameSvg />
                            <Text className="font-PlayBold text-xl text-[#D1CBD8]">Games available (2)</Text>
                        </View>

                        <TouchableOpacity onPress={() => console.log('pressed')}>
                            <Text className="font-PlayBold text-base text-[#D1CBD8] underline">Show all</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="mt-5 mx-5 bg-[#261D37] p-4 rounded-lg flex-row items-center justify-between">
                        <View>
                            <Image source={require('../../assets/Pic-2.png')} />
                        </View>

                        <View>
                            <Text className="font-PlayBold text-base text-[#D1CBD8]">FREE play 1Vs1 (training)</Text>
                            <Text className="font-PlayRegular text-base text-[#D1CBD8]">Admin efoot | PS5 </Text>
                            <Text className="font-PlayRegular text-sm text-[#D1CBD8]">26-05-23; 04:56</Text>

                            <TouchableOpacity onPress={() => console.log('pressed')} className='h-10 items-center justify-center w-28 mt-3'>
                                <LinearGradient
                                    colors={['#4A00E8', '#3B3EFF']}
                                    className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                                />
                                <Text className="font-PlayBold text-sm text-[#FFFFFF]">Join Match</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="mt-5 mx-5 bg-[#261D37] p-4 rounded-lg flex-row items-center justify-between">
                        <View>
                            <Image source={require('../../assets/Pic-3.png')} />
                        </View>

                        <View>
                            <Text className="font-PlayBold text-base text-[#D1CBD8]">FREE play 1Vs1 (training)</Text>
                            <Text className="font-PlayRegular text-base text-[#D1CBD8]">Admin efoot | PS5 </Text>
                            <Text className="font-PlayRegular text-sm text-[#D1CBD8]">26-05-23; 04:56</Text>

                            <TouchableOpacity onPress={() => console.log('pressed')} className='h-10 items-center justify-center w-28 mt-3'>
                                <LinearGradient
                                    colors={['#4A00E8', '#3B3EFF']}
                                    className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                                />
                                <Text className="font-PlayBold text-sm text-[#FFFFFF]">Join Match</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="mt-5 mx-5 flex-row items-center space-x-2">
                        <OnlineUserSvg />
                        <Text className="font-PlayBold text-xl text-[#D1CBD8]">Online Users (3)</Text>
                    </View>

                    <View className="mt-5 mx-5 flex-row items-center justify-between">
                        <View className="w-[295px]">
                            <TextInput
                                mode='outlined'
                                placeholder='Search users'
                                placeholderTextColor={'#D1CBD8'}
                                className="bg-[#261D37] pl-8"
                            />

                            <View className="absolute top-5 left-4">
                                <SearchSvg />
                            </View>
                        </View>

                        <TouchableOpacity className="bg-[#261D37] p-4 rounded-lg mt-1">
                            <FilterSvg />
                        </TouchableOpacity>
                    </View>

                    <View className="mt-5 mx-5 bg-[#261D37] p-3 rounded-lg">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center space-x-3">
                                <Image source={require('../../assets/PPic-1.png')} />
                                <Text className="font-PlayBold text-base text-[#D1CBD8]">Patric Haris</Text>
                            </View>

                            <View className="flex-row items-center space-x-5">
                                <View className="flex-row items-center space-x-2 bg-[#FFC1071F] rounded-md p-2">
                                    <TrophySvg />
                                    <Text className="font-PlayBold text-base text-[#FFC107]">12</Text>
                                </View>

                                <View className="flex-row items-center space-x-2 bg-[#1890FF1F] rounded-md p-2">
                                    <RankSvg />
                                    <Text className="font-PlayBold text-base text-[#1890FF]">345</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="mt-5 mx-5 bg-[#261D37] p-3 rounded-lg">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center space-x-3">
                                <Image source={require('../../assets/PPic-2.png')} />
                                <Text className="font-PlayBold text-base text-[#D1CBD8]">Patric Haris</Text>
                            </View>

                            <View className="flex-row items-center space-x-5">
                                <View className="flex-row items-center space-x-2 bg-[#FFC1071F] rounded-md p-2">
                                    <TrophySvg />
                                    <Text className="font-PlayBold text-base text-[#FFC107]">12</Text>
                                </View>

                                <View className="flex-row items-center space-x-2 bg-[#1890FF1F] rounded-md p-2">
                                    <RankSvg />
                                    <Text className="font-PlayBold text-base text-[#1890FF]">345</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="mt-5 mx-5 bg-[#261D37] p-3 rounded-lg">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center space-x-3">
                                <Image source={require('../../assets/PPic-3.png')} />
                                <Text className="font-PlayBold text-base text-[#D1CBD8]">Patric Haris</Text>
                            </View>

                            <View className="flex-row items-center space-x-5">
                                <View className="flex-row items-center space-x-2 bg-[#FFC1071F] rounded-md p-2">
                                    <TrophySvg />
                                    <Text className="font-PlayBold text-base text-[#FFC107]">12</Text>
                                </View>

                                <View className="flex-row items-center space-x-2 bg-[#1890FF1F] rounded-md p-2">
                                    <RankSvg />
                                    <Text className="font-PlayBold text-base text-[#1890FF]">345</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default HomeScreen;