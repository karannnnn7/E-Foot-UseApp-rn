import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import CommonHeader from '../components/CommonHeader';
import DashBoardHeaderSvg from '../../assets/svg/DashBoardHeader.svg';
import GuideSvg from '../../assets/svg/Guide.svg';
import ShowRankSvg from '../../assets/svg/ShowRank.svg';
import CoinSvg from '../../assets/svg/Coin.svg';

const DashBoardTab = ({ navigation }) => {
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
                  <Text className="font-ChakraPetchBold text-xl text-[#FFC107]">11</Text>
                </View>
              </View>

              
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default DashBoardTab;