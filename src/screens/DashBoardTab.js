import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { colors } from '../config/Theme';
import CircularProgress from 'react-native-circular-progress-indicator';
import CommonHeader from '../components/CommonHeader';
import DashBoardSvg from '../../assets/svg/DashBoard.svg';
import DashBoardLightSvg from '../../assets/svg/DashBoardLight.svg';
import GuideSvg from '../../assets/svg/Guide.svg';
import GuideLightSvg from '../../assets/svg/GuideLight.svg';
import ShowRankSvg from '../../assets/svg/ShowRank.svg';
import CoinSvg from '../../assets/svg/Coin.svg';
import SmallLogoSvg from '../../assets/svg/SmallLogo.svg'
import PencilSvg from '../../assets/svg/Pencil.svg';
import AddChatSvg from '../../assets/svg/AddChat.svg';

const DashBoardTab = ({ navigation }) => {

  const theme = { mode: 'light' };
  let activeColors = colors[theme.mode];

  //For Coin Progress Bar
  const coinsCount = 65; //Replace this with your dynamic value
  const maxCoins = 100; // Define the maximumm value for which the bar is completely filled

  //Calculate the percentage of coins and use it to set the height of the progressbar 
  const coinsProgressbarHeight = `${(coinsCount / maxCoins) * 100}%`;


  //For Win Progress Bar
  const Winners = 6; //Replace this with your dynamic value
  const maxWinners = 20; //Define the maximum value for which the bar is completely filled

  //Calculate the members of winGames and use it to set the height of the Progress Bar
  const winGamesProgressbarHeight = `${(Winners / maxWinners) * 100}%`

  //For Loss Progress Bar
  const loss = 4; //Replace this with your dynamic value
  const maxLoss = 15; //Define the maximum value for which the bar is completely filled 

  //Calculate the members of lossGames and use it to set the height of the Progres Bar
  const LossGamesProgressBarHeight = `${(loss / maxLoss) * 100}%`

  const isSmallScreen = Dimensions.get('screen').height > 850;


  return (
    <>
      <View style={{ backgroundColor: activeColors.background }} className="h-full">
        <CommonHeader navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="mt-3 h-full">
          <View className="mx-6">
            <View className="flex-row items-center space-x-3">
              {theme.mode === 'dark' ? (<DashBoardSvg width={20} height={20} />) : (<DashBoardLightSvg width={20} height={20} />)}
              <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-xl">Dashboard</Text>
            </View>

            <View style={{ backgroundColor: activeColors.cardBackground }} className="mt-5 h-auto p-5 rounded-lg">
              <View className="flex-row items-center space-x-3">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-lg">Challenge Win Overview</Text>
                <TouchableOpacity>
                  {theme.mode === 'dark' ? (<GuideSvg />) : (<GuideLightSvg />)}
                </TouchableOpacity>
              </View>

              <View className="items-center mt-5">
                <ShowRankSvg />
              </View>

              <View className="bg-[#3c3a4b] p-5 mt-5 flex-row items-center justify-between rounded-lg">
                <View>
                  <View className="flex-row items-center justify-between">
                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Win</Text>
                    <Text className="font-ChakraPetchBold text-xl text-[#229A16]">06</Text>
                  </View>

                  <View className="flex-row items-center justify-between">
                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Loss</Text>
                    <Text className="font-ChakraPetchBold text-xl text-[#FF4842]">05</Text>
                  </View>

                  <View className="flex-row items-center justify-between space-x-4">
                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Total match</Text>
                    <Text className="font-ChakraPetchBold text-xl text-[#D1CBD8]">11</Text>
                  </View>

                  <View className="flex-row items-center justify-between">
                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Total Player</Text>
                    <Text className="font-ChakraPetchBold text-xl text-[#D1CBD8]">14</Text>
                  </View>
                </View>

                <View>
                  <CircularProgress
                    value={66.67}
                    inActiveStrokeColor={'#D1CBD8'}
                    activeStrokeColor={'#54D62C'}
                    inActiveStrokeOpacity={0.2}
                    progressValueColor={'#D1CBD8'}
                    valueSuffix={'%'}
                    rotation={-180}
                  // onAnimationComplete={() => { alert('callback') }}
                  />
                </View>
              </View>
            </View>

            <View style={{ backgroundColor: activeColors.cardBackground }} className="mt-5 h-auto p-5 rounded-lg">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center space-x-3">
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-lg">E-FOOT Coins</Text>
                  <TouchableOpacity>
                    {theme.mode === 'dark' ? (<GuideSvg />) : (<GuideLightSvg />)}
                  </TouchableOpacity>
                </View>

                <View className="bg-[#332d1c] p-1 px-3 flex-row items-center space-x-2 rounded-lg">
                  <CoinSvg />
                  <Text className="font-ChakraPetchBold text-xl text-[#FFC107]">{coinsCount}</Text>
                </View>
              </View>

              <View className="flex-row items-center justify-around mt-5">
                <View>
                  <View className="bg-[#D1CBD8] h-[200px] w-14 rounded-xl flex-grow flex flex-col-reverse">
                    <View className="bg-[#4A00E8] h-[10px] rounded-b-xl" style={{ height: coinsProgressbarHeight }}>

                    </View>
                  </View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm text-center mt-3">Coins {(coinsCount)}</Text>
                </View>

                <View>
                  <View className="bg-[#D1CBD8] h-[200px] w-14 rounded-xl flex-grow flex flex-col-reverse">
                    <View className="bg-[#4A00E8] h-[10px] rounded-b-xl" style={{ height: winGamesProgressbarHeight }}>

                    </View>
                  </View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm text-center mt-3">Win {(Winners)}</Text>
                </View>

                <View>
                  <View className="bg-[#D1CBD8] h-[200px] w-14 rounded-xl flex-grow flex flex-col-reverse">
                    <View className="bg-[#4A00E8] h-[10px] rounded-b-xl" style={{ height: LossGamesProgressBarHeight }}>

                    </View>
                  </View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm text-center mt-3">Loss {(loss)}</Text>
                </View>
              </View>
            </View>

            <View style={{ backgroundColor: activeColors.cardBackground }} className="mt-5 h-auto p-5 rounded-lg">
              <View className="flex-row items-center space-x-3">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-lg">Last 5 matches</Text>
                <TouchableOpacity>
                  {theme.mode === 'dark' ? (<GuideSvg />) : (<GuideLightSvg />)}
                </TouchableOpacity>
              </View>

              <View className="flex-row items-center justify-between mt-5">
                <View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Game Name</Text>
                  <View className="mt-3 flex-row items-center space-x-2">
                    <SmallLogoSvg />
                    <View>
                      <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">Free Play</Text>
                      <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">1vs1 (traini...</Text>
                    </View>
                  </View>

                  <View className="mt-3 flex-row items-center space-x-2">
                    <SmallLogoSvg />
                    <View>
                      <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">Free Play</Text>
                      <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">1vs1 (traini...</Text>
                    </View>
                  </View>

                  <View className="mt-3 flex-row items-center space-x-2">
                    <SmallLogoSvg />
                    <View>
                      <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">Free Play</Text>
                      <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">1vs1 (traini...</Text>
                    </View>
                  </View>

                  <View className="mt-3 flex-row items-center space-x-2">
                    <SmallLogoSvg />
                    <View>
                      <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">Free Play</Text>
                      <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">1vs1 (traini...</Text>
                    </View>
                  </View>
                </View>

                <View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Opponent</Text>
                  <View className="mt-9 items-center">
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">Jenny wilson</Text>
                  </View>

                  <View className="mt-9 items-center">
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">Jenny wilson</Text>
                  </View>

                  <View className="mt-9 items-center">
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">Jenny wilson</Text>
                  </View>

                  <View className="mt-9 items-center">
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">Jenny wilson</Text>
                  </View>
                </View>

                <View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Status</Text>
                  <View className="mt-10 items-center">
                    <Text className="font-ChakraPetchMedium text-sm text-[#54D62C]">Win</Text>
                  </View>

                  <View className="mt-10 items-center">
                    <Text className="font-ChakraPetchMedium text-sm text-[#FF4842]">Win</Text>
                  </View>

                  <View className="mt-10 items-center">
                    <Text className="font-ChakraPetchMedium text-sm text-[#54D62C]">Win</Text>
                  </View>

                  <View className="mt-10 items-center">
                    <Text className="font-ChakraPetchMedium text-sm text-[#54D62C]">Win</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ backgroundColor: activeColors.cardBackground }} className="mt-5 h-auto p-5 rounded-lg">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center space-x-3">
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-lg">User Timeline</Text>
                  <TouchableOpacity>
                    {theme.mode === 'dark' ? (<GuideSvg />) : (<GuideLightSvg />)}
                  </TouchableOpacity>
                </View>

                <TouchableOpacity>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-xl underline">Show all</Text>
                </TouchableOpacity>
              </View>

              <View className="flex-1 flex-row space-x-5 mt-5">
                <View>
                  <View className="h-8 w-8 rounded-full bg-[#1890FF1F] items-center justify-center">
                    <PencilSvg />
                  </View>
                  <View className="items-center">
                    <Text className="text-[#1890FF7A]">|</Text>
                    <Text className="text-[#1890FF7A]">|</Text>
                    <Text className="text-[#1890FF7A]">|</Text>
                    <Text className="text-[#1890FF7A]">|</Text>
                    <Text className="text-[#1890FF7A]">|</Text>
                  </View>

                  <View className="h-8 w-8 rounded-full bg-[#FFC1071F] items-center justify-center">
                    <AddChatSvg />
                  </View>
                  <View className="items-center">
                    <Text className="text-[#FFC1077A]">|</Text>
                    <Text className="text-[#FFC1077A]">|</Text>
                    <Text className="text-[#FFC1077A]">|</Text>
                    <Text className="text-[#FFC1077A]">|</Text>
                    <Text className="text-[#FFC1077A]">|</Text>
                  </View>

                  <View className="h-8 w-8 rounded-full bg-[#FFC1071F] items-center justify-center">
                    <AddChatSvg />
                  </View>
                  <View className="items-center">
                    <Text className="text-[#FFC1077A]">|</Text>
                    <Text className="text-[#FFC1077A]">|</Text>
                    <Text className="text-[#FFC1077A]">|</Text>
                    <Text className="text-[#FFC1077A]">|</Text>
                    <Text className="text-[#FFC1077A]">|</Text>
                  </View>

                  <View className="h-8 w-8 rounded-full bg-[#1890FF1F] items-center justify-center">
                    <PencilSvg />
                  </View>
                </View>

                <View>
                  <View>
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Profile Updated</Text>
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-2">Monday  (12 June)</Text>
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">You updated your profile picture</Text>
                  </View>

                  <View className={`${isSmallScreen ? 'mt-10' : 'mt-12'} w-64`}>
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Added In room</Text>
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-2">12 hours ago</Text>
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">You have been added to the play room
                      by Sam.</Text>
                  </View>

                  <View className={`${isSmallScreen ? 'mt-5' : 'mt-8'} w-64`}>
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Added In room</Text>
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-2">12 hours ago</Text>
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">You have been added to the play room
                      by Sam.</Text>
                  </View>

                  <View className={`${isSmallScreen ? 'mt-3' : 'mt-8'}`}>
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Profile Updated</Text>
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm mt-2">Monday  (12 June)</Text>
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-base">You updated your profile picture</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View className="mt-20" />
        </ScrollView>
      </View>
    </>
  )
}

export default DashBoardTab;