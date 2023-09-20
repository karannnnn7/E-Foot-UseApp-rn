import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, Dimensions, Animated } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../config/Theme';
import { ThemeContext } from '../context/ThemeContext';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import CommonHeader from '../components/CommonHeader';
import CupSvg from '../../assets/svg/Cup.svg';
import CupLightSvg from '../../assets/svg/CupLight.svg';
import SearchSvg from '../../assets/svg/Search.svg';
import SearchLightSvg from '../../assets/svg/SearchLight.svg';
import FilterSvg from '../../assets/svg/Filter.svg';
import FilterLightSvg from '../../assets/svg/FilterLight.svg';
import HideLine from '../../assets/svg/HideLine.svg';
import Pic4Svg from '../../assets/svg/Pic-4.svg';
import Pic5Svg from '../../assets/svg/Pic-5.svg';
import Pic6Svg from '../../assets/svg/Pic-6.svg';
import PPSvg from '../../assets/svg/PP.svg';

const TournamentScreen = ({ navigation }) => {

  const isSmallScreen = Dimensions.get('screen').height > 850;
  const [visible, setVisible] = useState(false);
  const [animationValue, setanimationValue] = useState(new Animated.Value(1));
  // const theme = { mode: 'light' };
  const { theme } = useContext(ThemeContext);
  let acticeColors = colors[theme.mode];

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
      <View style={{ backgroundColor: acticeColors.background }} className="h-full">

        <CommonHeader navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="mt-3 -z-10 h-full">
          <View className="mx-5 flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              {theme.mode === 'dark' ? (<CupSvg width={20} height={20} />) : (<CupLightSvg width={20} height={20} />)}
              <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-xl">Tournaments (09)</Text>
            </View>

            <TouchableOpacity onPress={() => console.log('pressed')}>
              <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-base underline">Show all</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-5 mx-5 flex-row items-center justify-between">
            <View style={{ width: responsiveWidth(70) }}>
              <TextInput
                mode='outlined'
                placeholder='Search users'
                placeholderTextColor={colors.textPrimary}
                textColor={colors.textPrimary}
                style={{ backgroundColor: acticeColors.cardBackground, paddingLeft: 32 }}
              />

              <View className="absolute top-5 left-4">
                {theme.mode === 'dark' ? (<SearchSvg />) : (<SearchLightSvg />)}
              </View>
            </View>

            <TouchableOpacity onPress={() => setVisible(true)} style={{ backgroundColor: acticeColors.cardBackground }} className="p-4 rounded-lg mt-1">
              {theme.mode === 'dark' ? (<FilterSvg />) : (<FilterLightSvg />)}
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

              <View style={{ backgroundColor: acticeColors.cardBackground }} className="absolute bottom-0 w-full rounded-t-2xl" >
                <View className="p-3 mt-3">
                  <TouchableOpacity onPress={() => hideModal()} className="items-center">
                    <HideLine />
                  </TouchableOpacity>


                  <View className="flex-row items-center justify-center space-x-3 my-5">
                    {theme.mode === 'dark' ? (<FilterSvg />) : (<FilterLightSvg />)}
                    <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-lg">Search Filter</Text>
                  </View>

                  <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-base my-5 mx-5">Device</Text>

                  <View className="mx-5 flex-row items-center space-x-8">
                    <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                      <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-sm">PS5</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                      <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Xbox</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                      <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Play station</Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-base mt-10 mx-5">Availability  duration</Text>

                  <View className="mx-5 flex-row items-center justify-between mt-5">
                    <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                      <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-sm">1hr</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                      <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-sm">2hr</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                      <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-sm">3hr</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                      <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-sm">4hr</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg">
                      <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-sm">5hr</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity className="border border-[#4A00E8] p-3 rounded-lg w-20 items-center mx-5 mt-5">
                    <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-sm">10+ hr</Text>
                  </TouchableOpacity>

                  {isSmallScreen ? (<View className="my-10 mx-5 flex-row items-center justify-between">
                    <TouchableOpacity onPress={() => hideModal(true)} className=" items-center border border-[#D1CBD8] p-3 rounded-lg w-40">
                      <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-base">Cancel</Text>
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
                      <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-base">Cancel</Text>
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

          <View style={{ backgroundColor: acticeColors.cardBackground }} className="mt-5 mx-4 p-4 rounded-lg flex-row justify-between">
            <View>
              <Pic4Svg />
            </View>

            <View>
              <Text style={{ color: acticeColors.textPrimary }} className={`font-ChakraPetchBold ${isSmallScreen ? 'text-base' : 'text-sm'}`}>FREE play 1Vs1 (training)</Text>
              <Text style={{ color: acticeColors.textPrimary }} className={`font-ChakraPetchMedium ${isSmallScreen ? 'text-sm' : 'text-xs'} mt-1`}>Sep 02 . Starting at 6:00 PM</Text>

              <View className="flex-row items-center space-x-3 mt-3">
                <View className="space-x-2 bg-[#FFC1071F] rounded-md p-1 px-2">
                  <Text className="font-ChakraPetchBold text-base text-[#FFC107]">PS5</Text>
                </View>

                <View className="space-x-2 bg-[#1890FF1F] rounded-md p-1 px-2">
                  <Text className="font-ChakraPetchBold text-base text-[#1890FF]">efoot</Text>
                </View>
              </View>

              <View className="flex-row items-center space-x-2 mt-2">
                <PPSvg />
                <View>
                  <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Organized by</Text>
                  <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris</Text>
                </View>
              </View>

              <TouchableOpacity onPress={() => console.log('pressed')} className='h-10 items-center justify-center w-28 mt-3'>
                <LinearGradient
                  colors={['#4A00E8', '#3B3EFF']}
                  className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                />
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Join Match</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ backgroundColor: acticeColors.cardBackground }} className="mt-5 mx-4 p-4 rounded-lg flex-row justify-between">
            <View>
              <Pic5Svg />
            </View>

            <View>
              <Text style={{ color: acticeColors.textPrimary }} className={`font-ChakraPetchBold ${isSmallScreen ? 'text-base' : 'text-sm'}`}>FREE play 1Vs1 (training)</Text>
              <Text style={{ color: acticeColors.textPrimary }} className={`font-ChakraPetchMedium ${isSmallScreen ? 'text-sm' : 'text-xs'} mt-1`}>Sep 02 . Starting at 6:00 PM</Text>

              <View className="flex-row items-center space-x-3 mt-3">
                <View className="space-x-2 bg-[#FFC1071F] rounded-md p-1 px-2">
                  <Text className="font-ChakraPetchBold text-base text-[#FFC107]">PS5</Text>
                </View>

                <View className="space-x-2 bg-[#1890FF1F] rounded-md p-1 px-2">
                  <Text className="font-ChakraPetchBold text-base text-[#1890FF]">efoot</Text>
                </View>
              </View>

              <View className="flex-row items-center space-x-2 mt-2">
                <PPSvg />
                <View>
                  <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Organized by</Text>
                  <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris</Text>
                </View>
              </View>

              <TouchableOpacity onPress={() => console.log('pressed')} className='h-10 items-center justify-center w-28 mt-3'>
                <LinearGradient
                  colors={['#4A00E8', '#3B3EFF']}
                  className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                />
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Join Match</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ backgroundColor: acticeColors.cardBackground }} className="mt-5 mx-4 p-4 rounded-lg flex-row justify-between">
            <View>
              <Pic6Svg />
            </View>

            <View>
              <Text style={{ color: acticeColors.textPrimary }} className={`font-ChakraPetchBold ${isSmallScreen ? 'text-base' : 'text-sm'}`}>FREE play 1Vs1 (training)</Text>
              <Text style={{ color: acticeColors.textPrimary }} className={`font-ChakraPetchMedium ${isSmallScreen ? 'text-sm' : 'text-xs'} mt-1`}>Sep 02 . Starting at 6:00 PM</Text>

              <View className="flex-row items-center space-x-3 mt-3">
                <View className="space-x-2 bg-[#FFC1071F] rounded-md p-1 px-2">
                  <Text className="font-ChakraPetchBold text-base text-[#FFC107]">PS5</Text>
                </View>

                <View className="space-x-2 bg-[#1890FF1F] rounded-md p-1 px-2">
                  <Text className="font-ChakraPetchBold text-base text-[#1890FF]">efoot</Text>
                </View>
              </View>

              <View className="flex-row items-center space-x-2 mt-2">
                <PPSvg />
                <View>
                  <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Organized by</Text>
                  <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris</Text>
                </View>
              </View>

              <TouchableOpacity onPress={() => console.log('pressed')} className='h-10 items-center justify-center w-28 mt-3'>
                <LinearGradient
                  colors={['#4A00E8', '#3B3EFF']}
                  className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                />
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Join Match</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ backgroundColor: acticeColors.cardBackground }} className="mt-5 mx-4 p-4 rounded-lg flex-row justify-between">
            <View>
              <Pic4Svg />
            </View>

            <View>
              <Text style={{ color: acticeColors.textPrimary }} className={`font-ChakraPetchBold ${isSmallScreen ? 'text-base' : 'text-sm'}`}>FREE play 1Vs1 (training)</Text>
              <Text style={{ color: acticeColors.textPrimary }} className={`font-ChakraPetchMedium ${isSmallScreen ? 'text-sm' : 'text-xs'} mt-1`}>Sep 02 . Starting at 6:00 PM</Text>

              <View className="flex-row items-center space-x-3 mt-3">
                <View className="space-x-2 bg-[#FFC1071F] rounded-md p-1 px-2">
                  <Text className="font-ChakraPetchBold text-base text-[#FFC107]">PS5</Text>
                </View>

                <View className="space-x-2 bg-[#1890FF1F] rounded-md p-1 px-2">
                  <Text className="font-ChakraPetchBold text-base text-[#1890FF]">efoot</Text>
                </View>
              </View>

              <View className="flex-row items-center space-x-2 mt-2">
                <PPSvg />
                <View>
                  <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Organized by</Text>
                  <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris</Text>
                </View>
              </View>

              <TouchableOpacity onPress={() => console.log('pressed')} className='h-10 items-center justify-center w-28 mt-3'>
                <LinearGradient
                  colors={['#4A00E8', '#3B3EFF']}
                  className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                />
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Join Match</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ backgroundColor: acticeColors.cardBackground }} className="mt-5 mx-4 p-4 rounded-lg flex-row justify-between">
            <View>
              <Pic5Svg />
            </View>

            <View>
              <Text style={{ color: acticeColors.textPrimary }} className={`font-ChakraPetchBold ${isSmallScreen ? 'text-base' : 'text-sm'}`}>FREE play 1Vs1 (training)</Text>
              <Text style={{ color: acticeColors.textPrimary }} className={`font-ChakraPetchMedium ${isSmallScreen ? 'text-sm' : 'text-xs'} mt-1`}>Sep 02 . Starting at 6:00 PM</Text>

              <View className="flex-row items-center space-x-3 mt-3">
                <View className="space-x-2 bg-[#FFC1071F] rounded-md p-1 px-2">
                  <Text className="font-ChakraPetchBold text-base text-[#FFC107]">PS5</Text>
                </View>

                <View className="space-x-2 bg-[#1890FF1F] rounded-md p-1 px-2">
                  <Text className="font-ChakraPetchBold text-base text-[#1890FF]">efoot</Text>
                </View>
              </View>

              <View className="flex-row items-center space-x-2 mt-2">
                <PPSvg />
                <View>
                  <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Organized by</Text>
                  <Text style={{ color: acticeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris</Text>
                </View>
              </View>

              <TouchableOpacity onPress={() => console.log('pressed')} className='h-10 items-center justify-center w-28 mt-3'>
                <LinearGradient
                  colors={['#4A00E8', '#3B3EFF']}
                  className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                />
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Join Match</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-10" />
        </ScrollView>
      </View>
    </>
  )
}

export default TournamentScreen;