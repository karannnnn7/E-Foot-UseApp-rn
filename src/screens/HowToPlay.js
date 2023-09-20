import React, { useContext } from 'react';
import { View, Text, ScrollView, ImageComponent, Dimensions } from 'react-native';
import { colors } from '../config/Theme';
import { ThemeContext } from '../context/ThemeContext';
import CommonHeader from '../components/CommonHeader';
import HowToPlaySvg from '../../assets/svg/HowToPlay.svg';
import HowToPlayLightSvg from '../../assets/svg/HowToPlayLight.svg';
import Pic1Svg from '../../assets/svg/Pic-1.svg';
import Pic8Svg from '../../assets/svg/Pic-8.svg';
import Pic9Svg from '../../assets/svg/Pic-9.svg';
import Pic10Svg from '../../assets/svg/Pic-10.svg';
import Pic11Svg from '../../assets/svg/Pic-11.svg';
import Pic12Svg from '../../assets/svg/Pic-12.svg';
import Pic13Svg from '../../assets/svg/Pic-13.svg';

const HowToPlay = ({ navigation }) => {

    const isSmallScreen = Dimensions.get('screen').height > 840;
    // const theme = { mode: 'light' };
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    return (
        <>
            <View style={{ backgroundColor: activeColors.background }} className="h-full">
                <CommonHeader navigation={navigation} />

                <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="mt-3 -z-10 h-full">
                    <View>
                        <View className="flex-row items-center space-x-3 mx-5">
                            {theme.mode === 'dark' ? (<HowToPlaySvg width={19.5} height={19.5} />) : (<HowToPlayLightSvg width={19.5} height={19.5} />)}
                            <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xl">How to play?</Text>
                        </View>

                        <View>
                            <View className="items-center mt-5">
                                <Pic1Svg />
                            </View>

                            <View className={`opacity-90 bg-[#261D37] absolute top-5 ${isSmallScreen ? 'left-4' : 'left-1'} w-[382px] h-[276px] border border-[#3B3EFF] rounded-lg`}>
                                <View className="flex-1  items-center justify-center">
                                    <Text className="font-ChakraPetchBold text-[32px] text-[#D1CBD8]">How to Play?</Text>
                                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8] mt-3">Play as a pro not as noob</Text>
                                </View>
                            </View>
                        </View>

                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xl mt-8 mx-5">Getting started </Text>

                        <View>
                            <View className="mt-5 items-center">
                                <Pic8Svg />
                            </View>

                            <View style={{ backgroundColor: activeColors.cardBackground }} className={`mt-5 ${isSmallScreen ? 'mx-4' : 'mx-1'} items-center h-auto p-5 rounded-lg`}>
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">Once you've filled in your profile information, you're ready to get started. You can start a game from the Home menu using the Play Now button, or press Start Game in the menu. Once your challenge has been accepted, play the match on your PC, Play station 4, 5 or Xbox series.</Text>
                            </View>
                        </View>

                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xl mt-8 mx-5">Play now</Text>

                        <View>
                            <View className="mt-5 items-center">
                                <Pic9Svg />
                            </View>

                            <View style={{ backgroundColor: activeColors.cardBackground }} className={`mt-5 ${isSmallScreen ? 'mx-4' : 'mx-1'} h-52 p-5 rounded-lg`}>
                                <View className="flex-row items-center justify-start space-x-10">
                                    <Text className="font-ChakraPetchMedium text-sm text-[#4A00E8]">Step -1 |</Text>
                                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm">Start Game</Text>
                                </View>
                            </View>
                        </View>

                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xl mt-8 mx-5">Reporting result</Text>

                        <View>
                            <View className="mt-5 items-center">
                                <Pic10Svg />
                            </View>

                            <View style={{ backgroundColor: activeColors.cardBackground }} className={`mt-5 ${isSmallScreen ? 'mx-4' : 'mx-1'} h-auto p-5 rounded-lg`}>
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm">Once your match is completed click 'Submit Score' to verify your score. If your score meets the score of your opponent, the points will be allocated to your profile. If the scores do not match a dispute will be created and you need to upload evidence of your score in the dispute section.</Text>
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-5">Remember, it is vital that you be honest when reporting results as lying and cheating the system can put your account in danger of being banned or permanently terminated depending on the degree and consistency of the offenses</Text>
                            </View>
                        </View>

                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xl mt-8 mx-5">Game modes</Text>

                        <View>
                            <View className="mt-5 items-center">
                                <Pic11Svg />
                            </View>

                            <View style={{ backgroundColor: activeColors.cardBackground }} className={`mt-5 ${isSmallScreen ? 'mx-4' : 'mx-1'} h-auto p-5 rounded-lg`}>
                                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchMedium text-lg">What is a FREE Play 1vs1?</Text>
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base mt-2">This match is a training mode, you can play as many FREE games as you want, no points can be won with this game mode.</Text>
                                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchMedium text-lg mt-5">What is E-FOOT ARENA 1vs1?</Text>
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base mt-2">sing this game mode you can win points when you win or draw a game. Play. Each month (1st day of the month) your points will be set to zero. You can only play the same opponent once in 24 hours.</Text>
                            </View>
                        </View>

                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xl mt-8 mx-5">E-FOOT ARENA Leader Board</Text>

                        <View>
                            <View className="mt-5 items-center">
                                <Pic12Svg />
                            </View>

                            <View style={{ backgroundColor: activeColors.cardBackground }} className={`mt-5 ${isSmallScreen ? 'mx-4' : 'mx-1'} h-auto p-5 rounded-lg`}>
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">Playing in the e-foot arena will automatically get you in the leaderboard. Your personal scores of each month will be ranked in our leaderboard. The leaderboard will be promoted and is a perfect chance to get your name out there. In addition, we will offer special prizes and deals to the leaders in the leaderboard throughout the year. Each new version of FIFA the leaderboard will be reset.</Text>
                            </View>
                        </View>

                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xl mt-8 mx-5">Our Shop</Text>

                        <View>
                            <View className="mt-5 items-center">
                                <Pic13Svg />
                            </View>

                            <View style={{ backgroundColor: activeColors.cardBackground }} className={`mt-5 ${isSmallScreen ? 'mx-4' : 'mx-1'} h-auto p-5 rounded-lg`}>
                                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">Our shop will soon be available, where you can use your points to order amazing prizes!</Text>
                            </View>
                        </View>
                    </View>

                    <View className="mt-20" />
                </ScrollView>
            </View>
        </>
    )
}

export default HowToPlay;