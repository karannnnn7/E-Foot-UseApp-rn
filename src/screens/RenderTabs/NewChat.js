import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView, Animated, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DP1Svg from '../../../assets/svg/DP-1.svg';
import CloseSvg from '../../../assets/svg/Close.svg';

const NewChat = () => {

  const isSmallScreen = Dimensions.get('screen').height > 840;
  const [isVisible, setIsVisible] = useState(false);
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
    setIsVisible(false);
    setanimationValue(new Animated.Value(1));
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="h-full">
        <View className="mt-5 flex-row items-center justify-between mr-3">
          <View>
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Profile</Text>
          </View>

          <View className="flex-row items-center justify-between space-x-16">
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Status</Text>
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Action</Text>
          </View>
        </View>

        <View className="mt-5 flex-row items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <DP1Svg />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <View className={`flex-row items-center ${isSmallScreen ? 'space-x-8' : 'space-x-6'}`}>
            <View className="bg-[#FFC1071F] rounded-md p-1 px-2">
              <Text className="font-ChakraPetchBold text-base text-[#FFC107]">Pending</Text>
            </View>

            <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="p-2 border border-[#D1CBD8] rounded-lg">
              <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Accept</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-5 flex-row items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <DP1Svg />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <View className={`flex-row items-center ${isSmallScreen ? 'space-x-8' : 'space-x-6'}`}>
            <View className="bg-[#FFC1071F] rounded-md p-1 px-2">
              <Text className="font-ChakraPetchBold text-base text-[#FFC107]">Pending</Text>
            </View>

            <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="p-2 border border-[#D1CBD8] rounded-lg">
              <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Accept</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className={`mt-5 flex-row items-center ${isSmallScreen ? 'space-x-7' : 'space-x-4'}`}>
          <View className="flex-row items-center space-x-2">
            <DP1Svg />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <View className="bg-[#54D62C1F] rounded-md p-1 px-2">
            <Text className="font-ChakraPetchBold text-base text-[#54D62C]">Accepted</Text>
          </View>
        </View>

        <View className="mt-5 flex-row items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <DP1Svg />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <View className={`flex-row items-center ${isSmallScreen ? 'space-x-8' : 'space-x-6'}`}>
            <View className="bg-[#FFC1071F] rounded-md p-1 px-2">
              <Text className="font-ChakraPetchBold text-base text-[#FFC107]">Pending</Text>
            </View>

            <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="p-2 border border-[#D1CBD8] rounded-lg">
              <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Accept</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className={`mt-5 flex-row items-center ${isSmallScreen ? 'space-x-7' : 'space-x-4'}`}>
          <View className="flex-row items-center space-x-2">
            <DP1Svg />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <View className="bg-[#54D62C1F] rounded-md p-1 px-2">
            <Text className="font-ChakraPetchBold text-base text-[#54D62C]">Accepted</Text>
          </View>
        </View>

        <View className={`mt-5 flex-row items-center ${isSmallScreen ? 'space-x-7' : 'space-x-4'}`}>
          <View className="flex-row items-center space-x-2">
            <DP1Svg />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <View className="bg-[#54D62C1F] rounded-md p-1 px-2">
            <Text className="font-ChakraPetchBold text-base text-[#54D62C]">Accepted</Text>
          </View>
        </View>

        <View className="mt-5 flex-row items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <DP1Svg />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <View className={`flex-row items-center ${isSmallScreen ? 'space-x-8' : 'space-x-6'}`}>
            <View className="bg-[#FFC1071F] rounded-md p-1 px-2">
              <Text className="font-ChakraPetchBold text-base text-[#FFC107]">Pending</Text>
            </View>

            <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="p-2 border border-[#D1CBD8] rounded-lg">
              <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Accept</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-5 flex-row items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <DP1Svg />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <View className={`flex-row items-center ${isSmallScreen ? 'space-x-8' : 'space-x-6'}`}>
            <View className="bg-[#FFC1071F] rounded-md p-1 px-2">
              <Text className="font-ChakraPetchBold text-base text-[#FFC107]">Pending</Text>
            </View>

            <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="p-2 border border-[#D1CBD8] rounded-lg">
              <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Accept</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          // animationType="slide"
          transparent={true}
          visible={isVisible}
        // onRequestClose={() => {
        //   setVisible(!visible);
        // }}
        >

          <TouchableOpacity onPress={hideModal}>
            <View className="h-full w-full bg-[#000000bf]" />
          </TouchableOpacity>

          <View className={`absolute ${isSmallScreen ? 'top-60' : 'top-44'} bg-[#261D37] w-96 ${isSmallScreen ? 'left-4' : 'left-[5px]'} rounded-2xl`} >
            <View className="p-3 mt-3">
              <View className="my-5 mx-5">
                <View className="items-end mx-5">
                  <TouchableOpacity onPress={() => hideModal()}>
                    <CloseSvg />
                  </TouchableOpacity>
                </View>

                <View className="mt-5 flex-row items-center space-x-4">
                  <DP1Svg />
                  <Text className="font-ChakraPetchBold text-2xl text-[#D1CBD8]">Jenny Wilson</Text>
                </View>

                <View>
                  <View className="flex-row items-center space-x-5">
                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Status:</Text>
                    <View className="bg-[#54D62C1F] p-1 rounded-md">
                      <Text className="font-ChakraPetchBold text-base text-[#54D62C]">Accepted</Text>
                    </View>
                  </View>

                  <View className="flex-row items-center space-x-9 mt-5">
                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Time:</Text>
                    <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">21 hours ago</Text>
                  </View>

                  <View className="flex-row items-center space-x-6 mt-5">
                    <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">Action:</Text>
                    <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Accepted</Text>
                  </View>
                </View>
                <View className="mt-5">
                  <TouchableOpacity onPress={() => console.log('pressed')} className='h-[52px] items-center justify-center w-full'>
                    <LinearGradient
                      colors={['#4A00E8', '#3B3EFF']}
                      className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                    />
                    <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">View profile</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <View className="mt-20" />
      </ScrollView>
    </View>
  )
}

export default NewChat;