import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Modal, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import GameSvg from '../../assets/svg/Game.svg';
import GameLightSvg from '../../assets/svg/GameLight.svg';
import RightArrowSvg from '../../assets/svg/RightArrow.svg';
import OnlineUserSvg from '../../assets/svg/OnlineUser.svg';
import OnlineUserLightSvg from '../../assets/svg/OnlineUserLight.svg';
import SearchSvg from '../../assets/svg/Search.svg';
import SearchLightSvg from '../../assets/svg/SearchLight.svg';
import FilterSvg from '../../assets/svg/Filter.svg';
import FilterLightSvg from '../../assets/svg/FilterLight.svg';
import TrophySvg from '../../assets/svg/Trophy.svg';
import RankSvg from '../../assets/svg/Rank.svg';
import HideLine from '../../assets/svg/HideLine.svg';
import Pic1Svg from '../../assets/svg/Pic-1.svg';
import Pic2Svg from '../../assets/svg/Pic-2.svg';
import Pic3Svg from '../../assets/svg/Pic-3.svg';
import PPic1Svg from '../../assets/svg/PPic-1.svg';
import PPic2Svg from '../../assets/svg/PPic-2.svg';
import PPic3Svg from '../../assets/svg/PPic-3.svg';
import CommonHeader from '../components/CommonHeader';
import useTheme from '../components/useTheme';

const HomeScreen = ({ navigation }) => {

    const isSmallScreen = Dimensions.get('screen').height > 850;
    const [visible, setVisible] = useState(false);
    const {isDarkTheme} = useTheme();
    const [animationValue, setanimationValue] = useState(new Animated.Value(1));


    // For modal
    const showModal = () => {
        setVisible(true);
        Animated.timing(animationValue, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };
    
    const hideModal = () => {
        setVisible(false);
        setanimationValue(new Animated.Value(1));
    };


    return (
        <>
            <View className={`${isDarkTheme ? 'bg-[#EAEAEB]' : 'bg-[#0B0711]'} h-full`}>

                {/* Header */}
                <CommonHeader navigation={navigation} />


                <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="mt-3 h-full">
                    <View className="mx-5 flex-row items-center space-x-2">
                        <GameSvg />
                        <Text className={`font-ChakraPetchBold text-xl text-[#D1CBD8]`}>Upcoming games</Text>
                    </View>

                    <View className="mt-5">
                        <View className="items-center">
                            <Pic1Svg />
                        </View>

                        <View className={`opacity-90 bg-[#261D37] ${isSmallScreen ? 'mx-4' : 'mx-[7px]'} p-5 rounded-md absolute bottom-0 flex-row items-center justify-between w-[381px] border border-[#3B3EFF]`}>
                            <View>
                                <Text className="font-ChakraPetchSemiBold text-base text-[#D1CBD8]">FREE play 1Vs1 (training)</Text>

                                <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Admin efoot | PS5 </Text>

                                <Text className="font-ChakraPetchMedium text-sm text-[#D1CBD8]">26-05-23; 04:56</Text>
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

                    <View className="mt-10 mx-4 flex-row items-center justify-between">
                        <View className="flex-row items-center space-x-2">
                            <GameSvg />
                            <Text className={`font-ChakraPetchBold text-xl text-[#D1CBD8]`}>Games available (2)</Text>
                        </View>

                        <TouchableOpacity onPress={() => console.log('pressed')}>
                            <Text className={`font-ChakraPetchBold text-base text-[#D1CBD8] underline`}>Show all</Text>
                        </TouchableOpacity>
                    </View>

                    <View className={`mt-5 mx-4 bg-[#261D37] p-4 rounded-lg flex-row items-center justify-between`}>
                        <View>
                            <Pic2Svg />
                        </View>

                        <View>
                            <Text className={`font-ChakraPetchBold ${isSmallScreen ? 'text-base' : 'text-sm'} text-[#D1CBD8]`}>FREE play 1Vs1 (training)</Text>
                            <Text className={`font-ChakraPetchMedium ${isSmallScreen ? 'text-base' : 'text-sm'} text-[#D1CBD8]`}>Admin efoot | PS5 </Text>
                            <Text className={`font-ChakraPetchMedium ${isSmallScreen ? 'text-sm' : 'text-xs'} text-[#D1CBD8]`}>26-05-23; 04:56</Text>

                            <TouchableOpacity onPress={() => console.log('pressed')} className='h-10 items-center justify-center w-28 mt-3'>
                                <LinearGradient
                                    colors={['#4A00E8', '#3B3EFF']}
                                    className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                                />
                                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Join Match</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className={`mt-5 mx-4 bg-[#261D37] p-4 rounded-lg flex-row items-center justify-between`}>
                        <View>
                            <Pic3Svg />
                        </View>

                        <View>
                            <Text className={`font-ChakraPetchBold ${isSmallScreen ? 'text-base' : 'text-sm'} text-[#D1CBD8]`}>FREE play 1Vs1 (training)</Text>
                            <Text className={`font-ChakraPetchMedium ${isSmallScreen ? 'text-base' : 'text-sm'} text-[#D1CBD8]`}>Admin efoot | PS5 </Text>
                            <Text className={`font-ChakraPetchMedium ${isSmallScreen ? 'text-sm' : 'text-xs'} text-[#D1CBD8]`}>26-05-23; 04:56</Text>

                            <TouchableOpacity onPress={() => console.log('pressed')} className='h-10 items-center justify-center w-28 mt-3'>
                                <LinearGradient
                                    colors={['#4A00E8', '#3B3EFF']}
                                    className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                                />
                                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Join Match</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                    <View className="mt-5 mx-5 flex-row items-center space-x-2">
                        <OnlineUserSvg />
                        <Text className={`font-ChakraPetchBold text-xl text-[#D1CBD8]`}>Online Users (3)</Text>
                    </View>

                    <View className="mt-5 mx-5 flex-row items-center justify-between">
                        <View className="w-[295px]">
                            <TextInput
                                mode='outlined'
                                placeholder='Search users'
                                placeholderTextColor={`#D1CBD8`}
                                className={`bg-[#261D37] pl-8`}
                            />

                            <View className="absolute top-5 left-4">
                                <SearchSvg />
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => setVisible(true)} className={`bg-[#261D37] p-4 rounded-lg mt-1`}>
                            <FilterSvg />
                        </TouchableOpacity>

                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={visible}
                        // onRequestClose={() => {
                        //   setVisible(!visible);
                        // }}
                        >

                            <TouchableOpacity onPress={hideModal}>
                                <View className="h-full w-full bg-[#000000bf]" />
                            </TouchableOpacity>

                            <View className="absolute bottom-0 bg-[#261D37] w-full rounded-t-2xl" >
                                <View className="p-3 mt-3">
                                    <TouchableOpacity onPress={() => hideModal()} className="items-center">
                                        <HideLine />
                                    </TouchableOpacity>


                                    <View className="flex-row items-center justify-center space-x-3 my-5">
                                        <FilterSvg />
                                        <Text className="font-ChakraPetchBold text-lg text-[#D1CBD8]">Search Filter</Text>
                                    </View>

                                    <Text className="font-ChakraPetchBold text-base text-[#D1CBD8] my-5 mx-5">Win category</Text>

                                    <View className="mx-5 flex-row items-center justify-between">
                                        <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                                            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">0 - 5 WINS</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                                            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">5 - 10 WINS</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                                            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">10 - 15 WINS</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View className="mx-5 mt-5 flex-row items-center justify-between">
                                        <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                                            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">15 - 20 WINS</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                                            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">20-30 WINS</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                                            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">30+ WINS</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <Text className="font-ChakraPetchBold text-base text-[#D1CBD8] my-5 mx-5">Availability  duration</Text>

                                    <View className="mx-5 flex-row items-center justify-between">
                                        <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                                            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">1hr</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                                            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">2hr</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                                            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">3hr</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                                            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">4hr</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                                            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">5hr</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg w-20 items-center mx-5 mt-5">
                                        <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">10+ hr</Text>
                                    </TouchableOpacity>

                                    {isSmallScreen ? (<View className="my-10 mx-5 flex-row items-center justify-between">
                                        <TouchableOpacity onPress={() => hideModal(true)} className=" items-center border border-[#D1CBD8] p-3 rounded-lg w-40">
                                            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Cancel</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => console.log('pressed')} className='h-[52px] items-center justify-center w-40'>
                                            <LinearGradient
                                                colors={['#4A00E8', '#3B3EFF']}
                                                className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                                            />
                                            <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Apply</Text>
                                        </TouchableOpacity>
                                    </View>) : (<View className="my-10 mx-5 flex-row items-center justify-between space-x-5">
                                        <TouchableOpacity onPress={() => hideModal(true)} className=" items-center border border-[#D1CBD8] p-3 rounded-lg w-40">
                                            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Cancel</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => console.log('pressed')} className='h-[52px] items-center justify-center w-40'>
                                            <LinearGradient
                                                colors={['#4A00E8', '#3B3EFF']}
                                                className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                                            />
                                            <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Apply</Text>
                                        </TouchableOpacity>
                                    </View>)}
                                </View>
                            </View>
                        </Modal>
                    </View>

                    <View className={`mt-5 mx-5 bg-[#261D37] p-3 rounded-lg`}>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center space-x-3">
                                <PPic1Svg />
                                <Text className={`font-ChakraPetchBold text-base text-[#D1CBD8]`}>Patric Haris</Text>
                            </View>

                            <View className="flex-row items-center space-x-4">
                                <View className="flex-row items-center space-x-2 bg-[#FFC1071F] rounded-md p-2">
                                    <TrophySvg />
                                    <Text className="font-ChakraPetchBold text-base text-[#FFC107]">12</Text>
                                </View>

                                <View className="flex-row items-center space-x-2 bg-[#1890FF1F] rounded-md p-2">
                                    <RankSvg />
                                    <Text className="font-ChakraPetchBold text-base text-[#1890FF]">345</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className={`mt-5 mx-5 bg-[#261D37] p-3 rounded-lg`}>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center space-x-3">
                                <PPic2Svg />
                                <Text className={`font-ChakraPetchBold text-base text-[#D1CBD8]`}>Patric Haris</Text>
                            </View>

                            <View className="flex-row items-center space-x-4">
                                <View className="flex-row items-center space-x-2 bg-[#FFC1071F] rounded-md p-2">
                                    <TrophySvg />
                                    <Text className="font-ChakraPetchBold text-base text-[#FFC107]">12</Text>
                                </View>

                                <View className="flex-row items-center space-x-2 bg-[#1890FF1F] rounded-md p-2">
                                    <RankSvg />
                                    <Text className="font-ChakraPetchBold text-base text-[#1890FF]">345</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className={`mt-5 mx-5 bg-[#261D37] p-3 rounded-lg`}>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center space-x-3">
                                <PPic3Svg />
                                <Text className={`font-ChakraPetchBold text-base text-[#D1CBD8]`}>Patric Haris</Text>
                            </View>

                            <View className="flex-row items-center space-x-4">
                                <View className="flex-row items-center space-x-2 bg-[#FFC1071F] rounded-md p-2">
                                    <TrophySvg />
                                    <Text className="font-ChakraPetchBold text-base text-[#FFC107]">12</Text>
                                </View>

                                <View className="flex-row items-center space-x-2 bg-[#1890FF1F] rounded-md p-2">
                                    <RankSvg />
                                    <Text className="font-ChakraPetchBold text-base text-[#1890FF]">345</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="mt-10" />
                </ScrollView>

            </View>
        </>
    )
}

export default HomeScreen;