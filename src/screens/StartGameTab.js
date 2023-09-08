import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView, Modal, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../config/Theme';
import { ThemeContext } from '../context/ThemeContext';
import CommonHeader from '../components/CommonHeader';
import StartGameHeaderSvg from '../../assets/svg/StartGameHeader.svg';
import StartGameHeaderLightSvg from '../../assets/svg/StartGameHeaderLight.svg';
import RulesSvg from '../../assets/svg/Rules.svg';
import RulesLightSvg from '../../assets/svg/RulesLight.svg';
import DownASvg from '../../assets/svg/DownA.svg';
import DownALightSvg from '../../assets/svg/DownALight.svg';
import UpASvg from '../../assets/svg/UpA.svg';
import UpALightSvg from '../../assets/svg/UpALight.svg';
import DownArrowSvg from '../../assets/svg/DownArrow.svg';
import CloseSvg from '../../assets/svg/Close.svg';
import CloseLightSvg from '../../assets/svg/CloseLight.svg';

const StartGameTab = ({ navigation }) => {

    const isSmallScreen = Dimensions.get('screen').height > 850;
    const dropdownAnimation = new Animated.Value(0);
    const [isRulesOpen, setIsRulesOpen] = useState(false);
    const [isConsoleModalVisible, setIsConsoleModalVisible] = useState(false);
    const [isGameModeModalVisible, setIsGameModeModalVisible] = useState(false);
    const [isGameTypeModalVisible, setIsGameTypeModalVisible] = useState(false);
    const [selectConsole, setSelectConsole] = useState("select");
    const [selectGameMode, setSelectGameMode] = useState("select");
    const [selectGameType, setSelectGameType] = useState("select");
    const [isEnable, setIsEnable] = useState(false)
    const [animationValue, setanimationValue] = useState(new Animated.Value(1));
    // const theme = { mode: 'light' };
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    useEffect(() => {
        if (selectConsole === 'select' || selectGameMode === 'select' || selectGameType === 'select') {
            setIsEnable(false);
        } else {
            setIsEnable(true);
        }
    }, [selectConsole, selectGameMode, selectGameType])

    const handleRulesOpen = () => {
        setIsRulesOpen(!isRulesOpen);
    };

    const handleGameModeOpen = () => {
        setIsGameModeModalVisible(!isGameModeModalVisible);
    };

    const handleGameTypeOpen = () => {
        setIsGameTypeModalVisible(!isGameTypeModalVisible);
    };

    //Toggle Dropdown Animated
    Animated.timing(dropdownAnimation, {
        toValue: isRulesOpen ? 0 : 1,
        duration: 300,
        useNativeDriver: false,
    }).start();

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
        setIsConsoleModalVisible(false);
        setIsGameModeModalVisible(false);
        setIsGameTypeModalVisible(false);
        setanimationValue(new Animated.Value(1));
    };

    //For Button Enable


    return (
        <>
            <View style={{ backgroundColor: activeColors.background }} className="h-full">
                <CommonHeader navigation={navigation} />

                <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="mt-3 h-full">
                    <View className="mx-5">
                        <View className="flex-row items-center space-x-3">
                            {theme.mode === 'dark' ? (<StartGameHeaderSvg />) : (<StartGameHeaderLightSvg />)}
                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-xl">Start Game</Text>
                        </View>

                        <View>
                            <TouchableOpacity activeOpacity={1.0} onPress={handleRulesOpen} style={{ backgroundColor: activeColors.cardBackground }} className={`p-3 flex-row items-center mt-5 justify-between ${isRulesOpen ? 'rounded-t-lg' : 'rounded-lg'}`}>
                                <View className="flex-row items-center space-x-3 ml-3">
                                    {theme.mode === 'dark' ? (<RulesSvg />) : (<RulesLightSvg />)}
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xl text-[#D1CBD8]">Rules</Text>
                                </View>

                                <View className="mr-3">
                                    {isRulesOpen ? (<View>
                                        {theme.mode === 'dark' ? (<UpASvg />) : (<UpALightSvg />)}
                                    </View>) : (<View>
                                        {theme.mode === 'dark' ? (<DownASvg />) : (<DownALightSvg />)}
                                    </View>)}
                                </View>
                            </TouchableOpacity>

                            {isRulesOpen && (
                                <Animated.View style={{ backgroundColor: activeColors.cardBackground }} className="h-auto rounded-b-lg p-3">
                                    <View className="mx-3">
                                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">Challenge Rules only applicable when entering E-FOOT ARENA Game Mode Please go through it carefully.</Text>
                                    </View>

                                    <View className="mx-3 mt-7">
                                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Type: Friendly | Half Length: 6 Mins</Text>
                                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base mt-3">Game Speed: Normal | Squad Type: Online</Text>
                                    </View>

                                    <View className="bg-[#FFC1071F] mt-5 mx-3 p-2 rounded-lg w-52">
                                        <Text className="font-ChakraPetchMedium text-sm text-[#FFC107]">SOCCER AID NOT ALLOWED</Text>
                                    </View>

                                    <View className="mx-3 mt-5">
                                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm">It’s each player’s responsibility to check the connection and latency of its opponent</Text>
                                    </View>

                                    <View className="bg-[#FFC1071F] mt-5 mx-3 p-2 rounded-lg w-auto">
                                        <Text className="font-ChakraPetchMedium text-sm text-[#FFC107]">** In case of draw: Extra time and penalties if needed</Text>
                                    </View>
                                </Animated.View>
                            )}
                        </View>

                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-xl mt-8">Select your preferences and play!</Text>

                        <View style={{ backgroundColor: activeColors.cardBackground }} className="mt-5 h-auto p-5 rounded-lg">
                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-base mt-5">Console</Text>
                            <TouchableOpacity onPress={() => setIsConsoleModalVisible(!isConsoleModalVisible)} className="p-3 border border-[#D1CBD8] mt-1 rounded-sm flex-row items-center justify-between">
                                <Text style={{ color: activeColors.textPrimary }} >{selectConsole}</Text>
                                {theme.mode === 'dark' ? (<DownArrowSvg />) : (<DownALightSvg />)}
                            </TouchableOpacity>

                            <Modal
                                // animationType="slide"
                                transparent={true}
                                visible={isConsoleModalVisible}
                            // onRequestClose={() => {
                            //   setVisible(!visible);
                            // }}
                            >

                                <TouchableOpacity onPress={hideModal}>
                                    <View className="h-full w-full bg-[#000000bf]" />
                                </TouchableOpacity>

                                <View style={{ backgroundColor: activeColors.cardBackground }} className={`absolute bottom-64 w-96 ${isSmallScreen ? 'left-4' : 'left-[5px]'} rounded-2xl`} >
                                    <View className="p-3 mt-3">
                                        <View className="items-end mx-5">
                                            <TouchableOpacity onPress={() => hideModal()}>
                                                {theme.mode === 'dark' ? (<CloseSvg />) : (<CloseLightSvg />)}
                                            </TouchableOpacity>
                                        </View>

                                        <View className="my-5 mx-5">
                                            <TouchableOpacity onPress={() => {
                                                setSelectConsole('Vipa')
                                                hideModal()
                                            }}>
                                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-lg">Vipa</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => {
                                                setSelectConsole('PS5')
                                                hideModal()
                                            }} className="mt-4">
                                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-lg">PS5</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => {
                                                setSelectConsole('Xbox')
                                                hideModal()
                                            }} className="mt-4">
                                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-lg">Xbox</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => {
                                                setSelectConsole('PC')
                                                hideModal()
                                            }} className="mt-4">
                                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-lg">PC</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>

                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-base mt-5">Game Mode</Text>
                            <TouchableOpacity onPress={() => setIsGameModeModalVisible(!isGameModeModalVisible)} className="p-3 border border-[#D1CBD8] mt-1 rounded-sm flex-row items-center justify-between">
                                <Text style={{ color: activeColors.textPrimary }}>{selectGameMode}</Text>
                                {theme.mode === 'dark' ? (<DownArrowSvg />) : (<DownALightSvg />)}
                            </TouchableOpacity>

                            <Modal
                                // animationType="slide"
                                transparent={true}
                                visible={isGameModeModalVisible}
                            // onRequestClose={() => {
                            //   setVisible(!visible);
                            // }}
                            >

                                <TouchableOpacity onPress={hideModal}>
                                    <View className="h-full w-full bg-[#000000bf]" />
                                </TouchableOpacity>

                                <View style={{ backgroundColor: activeColors.cardBackground }} className={`absolute bottom-64 w-96 ${isSmallScreen ? 'left-4' : 'left-[5px]'} rounded-2xl`} >
                                    <View className="p-3 mt-3">
                                        <View className="items-end mx-5">
                                            <TouchableOpacity onPress={() => hideModal()}>
                                                {theme.mode === 'dark' ? (<CloseSvg />) : (<CloseLightSvg />)}
                                            </TouchableOpacity>
                                        </View>

                                        <View className="my-5 mx-5">
                                            <TouchableOpacity onPress={() => {
                                                setSelectGameMode('Test 1')
                                                hideModal()
                                            }}>
                                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-lg">Test 1</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => {
                                                setSelectGameMode('Test 2')
                                                hideModal()
                                            }} className="mt-4">
                                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-lg">Test 2</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => {
                                                setSelectGameMode('Test 3')
                                                hideModal()
                                            }} className="mt-4">
                                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-lg">Test 3</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => {
                                                setSelectGameMode('Test 4')
                                                hideModal()
                                            }} className="mt-4">
                                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-lg">Test 4</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>

                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-base mt-5">Select challenge type</Text>
                            <TouchableOpacity onPress={() => setIsGameTypeModalVisible(!isGameTypeModalVisible)} className="p-3 border border-[#D1CBD8] mt-1 rounded-sm flex-row items-center justify-between">
                                <Text className="text-white">{selectGameType}</Text>
                                {theme.mode === 'dark' ? (<DownArrowSvg />) : (<DownALightSvg />)}
                            </TouchableOpacity>

                            <Modal
                                // animationType="slide"
                                transparent={true}
                                visible={isGameTypeModalVisible}
                            // onRequestClose={() => {
                            //   setVisible(!visible);
                            // }}
                            >

                                <TouchableOpacity onPress={hideModal}>
                                    <View className="h-full w-full bg-[#000000bf]" />
                                </TouchableOpacity>

                                <View style={{ backgroundColor: activeColors.background }} className={`absolute bottom-64 w-96 ${isSmallScreen ? 'left-4' : 'left-[5px]'} rounded-2xl`} >
                                    <View className="p-3 mt-3">
                                        <View className="items-end mx-5">
                                            <TouchableOpacity onPress={() => hideModal()}>
                                                {theme.mode === 'dark' ? (<CloseSvg />) : (<CloseLightSvg />)}
                                            </TouchableOpacity>
                                        </View>

                                        <View className="my-5 mx-5">
                                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">FUT 1vs1</Text>

                                            <TouchableOpacity onPress={() => {
                                                setSelectGameType('Real Team 1vs1')
                                                hideModal()
                                            }} className="mt-3">
                                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchSemiBold text-lg">Real Team 1vs1</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>

                            <View className="items-center">
                                {isEnable ? (<TouchableOpacity className={`h-12 items-center justify-center ${isSmallScreen ? 'w-[335px]' : 'w-[315px]'} mt-7`}>
                                    <LinearGradient
                                        colors={['#4A00E8', '#3B3EFF']}
                                        className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                                    />
                                    <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Lets Go!</Text>
                                </TouchableOpacity>) : (<TouchableOpacity onPress={() => console.log('pressed')} className='h-12  items-center justify-center w-full mt-7 bg-[#98959A] rounded-lg'>
                                    <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Lets Go!</Text>
                                </TouchableOpacity>)}
                            </View>
                        </View>
                    </View>

                    <View className="mt-20" />
                </ScrollView>
            </View>
        </>
    )
}

export default StartGameTab;