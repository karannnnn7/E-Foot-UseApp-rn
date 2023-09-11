import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../config/Theme';
import { ThemeContext } from '../../context/ThemeContext';
import SmallLogoSvg from '../../../assets/svg/SmallLogo.svg';
import PPSvg from '../../../assets/svg/PP.svg';

const PendingTab = () => {

    // const theme = { mode: 'light' };
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    return (
        <>
            <View className="mt-8">
                <View style={{ backgroundColor: activeColors.cardBackground }} className="p-4 rounded-md">
                    <View className="flex-row items-center mx-5 space-x-5">
                        <SmallLogoSvg />
                        <View>
                            <View className="flex-row items-center space-x-1">
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Game:</Text>
                                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">FREE Play 1vs1 (training)</Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Console:</Text>
                                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">Xbox Series X en S</Text>
                            </View>
                        </View>
                    </View>

                    <View className="mt-3 mx-5 flex-row items-center justify-between space-x-5">
                        <View className="space-y-3">
                            <View className="flex-row items-center space-x-1">
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Mode:</Text>
                                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">FUT 1vs1</Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Type:</Text>
                                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">Private</Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Status:</Text>
                                <Text className="font-ChakraPetchBold text-sm text-[#FFC107]">Pending</Text>
                            </View>
                        </View>

                        <View className="space-y-2">
                            <View className="flex-row items-center space-x-2">
                                <PPSvg />
                                <View>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Challenged by</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Patric Haris Benedict</Text>
                                </View>
                            </View>

                            <View className="flex-row items-center space-x-2">
                                <PPSvg />
                                <View>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Accepted by</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Patric Haris</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="items-center">
                        <TouchableOpacity onPress={() => console.log('pressed')} className='h-12 items-center justify-center w-[310px] mt-7'>
                            <LinearGradient
                                colors={['#4A00E8', '#3B3EFF']}
                                className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                            />
                            <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ backgroundColor: activeColors.cardBackground }} className="p-4 rounded-md mt-5">
                    <View className="flex-row items-center mx-5 space-x-5">
                        <SmallLogoSvg />
                        <View>
                            <View className="flex-row items-center space-x-1">
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Game:</Text>
                                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">FREE Play 1vs1 (training)</Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Console:</Text>
                                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">Xbox Series X en S</Text>
                            </View>
                        </View>
                    </View>

                    <View className="mt-3 mx-5 flex-row items-center justify-between space-x-5">
                        <View className="space-y-3">
                            <View className="flex-row items-center space-x-1">
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Mode:</Text>
                                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">FUT 1vs1</Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Type:</Text>
                                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">Private</Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Status:</Text>
                                <Text className="font-ChakraPetchBold text-sm text-[#FFC107]">Pending</Text>
                            </View>
                        </View>

                        <View className="space-y-2">
                            <View className="flex-row items-center space-x-2">
                                <PPSvg />
                                <View>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Challenged by</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris Benedict</Text>
                                </View>
                            </View>

                            <View className="flex-row items-center space-x-2">
                                <PPSvg />
                                <View>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Accepted by</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="items-center">
                        <TouchableOpacity onPress={() => console.log('pressed')} className='h-12 items-center justify-center w-[310px] mt-7'>
                            <LinearGradient
                                colors={['#4A00E8', '#3B3EFF']}
                                className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                            />
                            <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default PendingTab;