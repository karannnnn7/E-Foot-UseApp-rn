import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ImageComponent, ScrollView } from 'react-native';
import CommonHeader from '../components/CommonHeader';
import ChatHeaderSvg from '../../assets/svg/ChatHeader.svg';
import SearchSvg from '../../assets/svg/Search.svg';
import { TextInput } from 'react-native-paper';
import NewChallengersSvg from '../../assets/svg/NewChallengers.svg';
import NewChatSvg from '../../assets/svg/NewChat.svg';
import DP1Svg from '../../assets/svg/DP-1.svg';
import DP2Svg from '../../assets/svg/DP-2.svg';
import DP3Svg from '../../assets/svg/DP-3.svg';
import DP4Svg from '../../assets/svg/DP-4.svg';
import DP5Svg from '../../assets/svg/DP-5.svg';
import DP6Svg from '../../assets/svg/DP-6.svg';
import DP7Svg from '../../assets/svg/DP-7.svg';
import NewChat from './RenderTabs/NewChat';
import NewChallengersTab from './RenderTabs/NewChallengersTab';

const ChatTab = ({ navigation }) => {

  const isSmallScreen = Dimensions.get('screen').height > 840;
  const [isselectedTab, setIsSelectedTab] = useState("");
  const [selected, setSelected] = useState('');

  //For Changing Tabs
  const renderChats = () => {
    switch (isselectedTab) {
      case 'NewChat':
        return <NewChat />;

      case 'NewChallengers':
        return <NewChallengersTab />

      default:
        return <View>
          <TouchableOpacity onPress={() => navigation.navigate('chating')} className="flex-row items-center justify-between mt-5">
            <View className="flex-row items-center space-x-3">
              <View>
                <DP1Svg />
              </View>

              <View>
                <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
                <Text className="font-ChakraPetchMedium text-sm text-[#D1CBD8]">Okay Done. </Text>
              </View>
            </View>

            <View className="items-center space-y-2">
              <Text className="font-ChakraPetchMedium text-xs text-[#33D49D]">11:20 pm</Text>
              <View className="bg-[#33D49D] w-5 h-5 rounded-full items-center justify-center">
                <Text className="text-[#FFFFFF]">2</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('chating')} className="mt-5">
            <View className="flex-row items-center space-x-3">
              <View>
                <DP2Svg />
              </View>

              <View>
                <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Robert Fox</Text>
                <Text className="font-ChakraPetchMedium text-sm text-[#D1CBD8]">Okii</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('chating')} className="mt-5">
            <View className="flex-row items-center space-x-3">
              <View>
                <DP3Svg />
              </View>

              <View>
                <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Eleneor Salsabil</Text>
                <Text className="font-ChakraPetchMedium text-sm text-[#D1CBD8]">Great job!!</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('chating')} className="mt-5">
            <View className="flex-row items-center space-x-3">
              <View>
                <DP4Svg />
              </View>

              <View>
                <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jacob Jonas</Text>
                <Text className="font-ChakraPetchMedium text-sm text-[#D1CBD8]">You won!</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('chating')} className="mt-5">
            <View className="flex-row items-center space-x-3">
              <View>
                <DP5Svg />
              </View>

              <View>
                <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
                <Text className="font-ChakraPetchMedium text-sm text-[#D1CBD8]">Oh c’on</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('chating')} className="mt-5">
            <View className="flex-row items-center space-x-3">
              <View>
                <DP6Svg />
              </View>

              <View>
                <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Cooper wilson</Text>
                <Text className="font-ChakraPetchMedium text-sm text-[#D1CBD8]">Okay Done. </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('chating')} className="mt-5">
            <View className="flex-row items-center space-x-3">
              <View>
                <DP7Svg />
              </View>

              <View>
                <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Rebekaa winson</Text>
                <Text className="font-ChakraPetchMedium text-sm text-[#D1CBD8]">Okay Done. </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('chating')} className="mt-5">
            <View className="flex-row items-center space-x-3">
              <View>
                <DP3Svg />
              </View>

              <View>
                <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Rebekaa winson</Text>
                <Text className="font-ChakraPetchMedium text-sm text-[#D1CBD8]">Okay Done. </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>;
    };
  };

  return (
    <>
      <View className="bg-[#0B0711] h-full">
        <CommonHeader navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="mt-3 h-full">
          <View className="mx-5">
            <View className="flex-row items-center space-x-3">
              <ChatHeaderSvg />

              <Text className="font-ChakraPetchBold text-lg text-[#D1CBD8]">Challenge a player</Text>
            </View>

            <View className="mt-5 flex-row items-center space-x-5">
              <View className={`${isSmallScreen ? 'w-[240px]' : 'w-[220px]'}`}>
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

              <TouchableOpacity onPress={() => {
                setIsSelectedTab('NewChallengers')
                setSelected('NewChallengers')
              }} className={`${selected === 'NewChallengers' ? 'bg-[#4A00E8]' : 'bg-[#261D37]'} p-4 rounded-lg mt-1`}>
                <NewChallengersSvg />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                setIsSelectedTab('NewChat')
                setSelected('NewChat')
              }} className={`${selected === 'NewChat' ? 'bg-[#4A00E8]' : 'bg-[#261D37]'} p-4 rounded-lg mt-1`}>
                <NewChatSvg />
              </TouchableOpacity>
            </View>

            <View className="flex-1">
              {renderChats()}
            </View>
          </View>

          <View className="mt-20" />
        </ScrollView>
      </View>
    </>
  )
}

export default ChatTab;