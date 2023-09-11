import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ImageComponent, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../config/Theme';
import { ThemeContext } from '../context/ThemeContext';
import CommonHeader from '../components/CommonHeader';
import ChatSvg from '../../assets/svg/Chat.svg';
import ChatLightSvg from '../../assets/svg/ChatLight.svg';
import SearchSvg from '../../assets/svg/Search.svg';
import SearchLightSvg from '../../assets/svg/SearchLight.svg';
import NewChallengersSvg from '../../assets/svg/NewChallengers.svg';
import NewChallengersLightSvg from '../../assets/svg/NewChallengersLight.svg';
import NewChatSvg from '../../assets/svg/NewChat.svg';
import NewChatLightSvg from '../../assets/svg/NewChatLight.svg';
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
  // const theme = { mode: 'light' };
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

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
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Jenny Wilson</Text>
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm">Okay Done. </Text>
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
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Robert Fox</Text>
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm">Okii</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('chating')} className="mt-5">
            <View className="flex-row items-center space-x-3">
              <View>
                <DP3Svg />
              </View>

              <View>
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Eleneor Salsabil</Text>
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm">Great job!!</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('chating')} className="mt-5">
            <View className="flex-row items-center space-x-3">
              <View>
                <DP4Svg />
              </View>

              <View>
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Jacob Jonas</Text>
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm">You won!</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('chating')} className="mt-5">
            <View className="flex-row items-center space-x-3">
              <View>
                <DP5Svg />
              </View>

              <View>
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Jenny Wilson</Text>
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm">Oh c’on</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('chating')} className="mt-5">
            <View className="flex-row items-center space-x-3">
              <View>
                <DP6Svg />
              </View>

              <View>
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Cooper wilson</Text>
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm">Okay Done. </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('chating')} className="mt-5">
            <View className="flex-row items-center space-x-3">
              <View>
                <DP7Svg />
              </View>

              <View>
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Rebekaa winson</Text>
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm">Okay Done. </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('chating')} className="mt-5">
            <View className="flex-row items-center space-x-3">
              <View>
                <DP3Svg />
              </View>

              <View>
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Rebekaa winson</Text>
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-sm">Okay Done. </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>;
    };
  };

  return (
    <>
      <View style={{ backgroundColor: activeColors.background }} className="h-full">
        <CommonHeader navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="mt-3 h-full">
          <View className="mx-5">
            <View className="flex-row items-center space-x-3">
              {theme.mode === 'dark' ? (<ChatSvg width={21} height={21} />) : (<ChatLightSvg width={21} height={21} />)}

              <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-lg">Challenge a player</Text>
            </View>

            <View className="mt-5 flex-row items-center justify-between space-x-5">
              <View className={`md: max-lg: ${isSmallScreen ? 'w-7/12' : 'w-56'} `}>
                <TextInput
                  mode='outlined'
                  placeholder='Search users'
                  placeholderTextColor={colors.textPrimary}
                  style={{ backgroundColor: activeColors.cardBackground, paddingLeft: 32 }}
                />

                <View className="absolute top-5 left-4">
                  {theme.mode === 'dark' ? (<SearchSvg />) : (<SearchLightSvg />)}
                </View>
              </View>

              <TouchableOpacity onPress={() => {
                setIsSelectedTab('NewChallengers')
                setSelected('NewChallengers')
              }} style={{ backgroundColor: `${selected === 'NewChallengers' ? '#4A00E8' : activeColors.cardBackground}` }}
                className={`p-4 rounded-lg mt-1`}>
                {theme.mode === 'dark' ? (<NewChallengersSvg />) : (<NewChallengersLightSvg />)}
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                setIsSelectedTab('NewChat')
                setSelected('NewChat')
              }} style={{ backgroundColor: `${selected === 'NewChat' ? '#4A00E8' : activeColors.cardBackground}` }}
                className={`p-4 rounded-lg mt-1`}>
                {theme.mode === 'dark' ? (<NewChatSvg />) : (<NewChatLightSvg />)}
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