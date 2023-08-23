import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import CommonHeader from '../components/CommonHeader';
import DashBoardHeaderSvg from '../../assets/svg/DashBoardHeader.svg';
import GuideSvg from '../../assets/svg/Guide.svg';
import ShowRankSvg from '../../assets/svg/ShowRank.svg';
import CoinSvg from '../../assets/svg/Coin.svg';
import SmallLogoSvg from '../../assets/svg/SmallLogo.svg'

const DashBoardTab = ({ navigation }) => {

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


  return (
    <>
      <View className="bg-[#0B0711] h-full">
        <CommonHeader navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="h-full">
          <View className="mx-6">
            <View className="mt-8 flex-row items-center space-x-3">
              <DashBoardHeaderSvg />
              <Text className="font-ChakraPetchBold text-xl text-[#D1CBD8]">Dashboard</Text>
            </View>

            <View className="mt-5 bg-[#261D37] h-auto p-5 rounded-lg">
              <View className="flex-row items-center space-x-3">
                <Text className="font-ChakraPetchBold text-lg text-[#D1CBD8]">Challenge Win Overview</Text>
                <TouchableOpacity>
                  <GuideSvg />
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

            <View className="mt-5 bg-[#261D37] h-auto p-5 rounded-lg">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center space-x-3">
                  <Text className="font-ChakraPetchBold text-lg text-[#D1CBD8]">E-FOOT Coins</Text>
                  <TouchableOpacity>
                    <GuideSvg />
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
                  <Text className="font-ChakraPetchMedium text-sm text-[#D1CBD8] text-center mt-3">Coins {(coinsCount)}</Text>
                </View>

                <View>
                  <View className="bg-[#D1CBD8] h-[200px] w-14 rounded-xl flex-grow flex flex-col-reverse">
                    <View className="bg-[#4A00E8] h-[10px] rounded-b-xl" style={{ height: winGamesProgressbarHeight }}>

                    </View>
                  </View>
                  <Text className="font-ChakraPetchMedium text-sm text-[#D1CBD8] text-center mt-3">Win {(Winners)}</Text>
                </View>

                <View>
                  <View className="bg-[#D1CBD8] h-[200px] w-14 rounded-xl flex-grow flex flex-col-reverse">
                    <View className="bg-[#4A00E8] h-[10px] rounded-b-xl" style={{ height: LossGamesProgressBarHeight }}>

                    </View>
                  </View>
                  <Text className="font-ChakraPetchMedium text-sm text-[#D1CBD8] text-center mt-3">Loss {(loss)}</Text>
                </View>
              </View>
            </View>

            <View className="mt-5 bg-[#261D37] h-auto p-5 rounded-lg">
              <View className="flex-row items-center space-x-3">
                <Text className="font-ChakraPetchBold text-lg text-[#D1CBD8]">Last 5 matches</Text>
                <TouchableOpacity>
                  <GuideSvg />
                </TouchableOpacity>
              </View>

              <View className="flex-row items-center justify-between mt-5">
                <View>
                  <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Game Name</Text>
                  <View className="mt-3 flex-row items-center space-x-2">
                    <SmallLogoSvg />
                    <View>
                      <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Free Play</Text>
                      <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">1vs1 (traini...</Text>
                    </View>
                  </View>

                  <View className="mt-3 flex-row items-center space-x-2">
                    <SmallLogoSvg />
                    <View>
                      <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Free Play</Text>
                      <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">1vs1 (traini...</Text>
                    </View>
                  </View>

                  <View className="mt-3 flex-row items-center space-x-2">
                    <SmallLogoSvg />
                    <View>
                      <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Free Play</Text>
                      <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">1vs1 (traini...</Text>
                    </View>
                  </View>

                  <View className="mt-3 flex-row items-center space-x-2">
                    <SmallLogoSvg />
                    <View>
                      <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Free Play</Text>
                      <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">1vs1 (traini...</Text>
                    </View>
                  </View>
                </View>

                <View>
                  <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Opponent</Text>
                  <View className="mt-8 items-center">
                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Jenny wilson</Text>
                  </View>

                  <View className="mt-8 items-center">
                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Jenny wilson</Text>
                  </View>

                  <View className="mt-8 items-center">
                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Jenny wilson</Text>
                  </View>

                  <View className="mt-8 items-center">
                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Jenny wilson</Text>
                  </View>
                </View>

                <View>
                  <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Status</Text>
                  <View className="mt-8 items-center">
                    <Text className="font-ChakraPetchMedium text-sm text-[#54D62C]">Win</Text>
                  </View>

                  <View className="mt-8 items-center">
                    <Text className="font-ChakraPetchMedium text-sm text-[#FF4842]">Win</Text>
                  </View>

                  <View className="mt-8 items-center">
                    <Text className="font-ChakraPetchMedium text-sm text-[#54D62C]">Win</Text>
                  </View>

                  <View className="mt-8 items-center">
                    <Text className="font-ChakraPetchMedium text-sm text-[#54D62C]">Win</Text>
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