import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DP1Svg from '../../../assets/svg/DP-1.svg';
import ChatPopupSvg from '../../../assets/svg/ChatPopup.svg';


const NewChallengersTab = () => {

  const isSmallScreen = Dimensions.get('screen').height > 850;
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
    setIsVisible(false)
    setanimationValue(new Animated.Value(1));
  };

  return (
    <View>
      <View className="mt-5">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-3">
            <DP1Svg />
            <View className="w-3 h-3 bg-[#33D49D] rounded-full absolute bottom-1 left-8" />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="p-2 border border-[#D1CBD8] rounded-lg">
            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Challenge</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row items-center space-x-3">
            <DP1Svg />
            <View className="w-3 h-3 bg-[#33D49D] rounded-full absolute bottom-1 left-8" />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="p-2 border border-[#D1CBD8] rounded-lg">
            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Challenge</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row items-center space-x-3">
            <DP1Svg />
            <View className="w-3 h-3 bg-[#33D49D] rounded-full absolute bottom-1 left-8" />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="p-2 border border-[#D1CBD8] rounded-lg">
            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Challenge</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row items-center space-x-3">
            <DP1Svg />
            <View className="w-3 h-3 bg-[#33D49D] rounded-full absolute bottom-1 left-8" />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="p-2 border border-[#D1CBD8] rounded-lg">
            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Challenge</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row items-center space-x-3">
            <DP1Svg />
            <View className="w-3 h-3 bg-[#33D49D] rounded-full absolute bottom-1 left-8" />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="p-2 border border-[#D1CBD8] rounded-lg">
            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Challenge</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row items-center space-x-3">
            <DP1Svg />
            <View className="w-3 h-3 bg-[#33D49D] rounded-full absolute bottom-1 left-8" />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="p-2 border border-[#D1CBD8] rounded-lg">
            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Challenge</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row items-center space-x-3">
            <DP1Svg />
            <View className="w-3 h-3 bg-[#33D49D] rounded-full absolute bottom-1 left-8" />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="p-2 border border-[#D1CBD8] rounded-lg">
            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Challenge</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row items-center space-x-3">
            <DP1Svg />
            <View className="w-3 h-3 bg-[#33D49D] rounded-full absolute bottom-1 left-8" />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="p-2 border border-[#D1CBD8] rounded-lg">
            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Challenge</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row items-center space-x-3">
            <DP1Svg />
            <View className="w-3 h-3 bg-[#33D49D] rounded-full absolute bottom-1 left-8" />
            <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Jenny Wilson</Text>
          </View>

          <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="p-2 border border-[#D1CBD8] rounded-lg">
            <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Challenge</Text>
          </TouchableOpacity>
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
                <View className="items-center">
                  <ChatPopupSvg />

                  <Text className="font-ChakraPetchBold text-2xl text-[#D1CBD8] mt-5">Are you sure?</Text>
                  <Text className="font-ChakraPetchMedium text-sm text-[#D1CBD8] mt-5 w-52 text-center">You want to send the challenge
                    your friend?</Text>
                </View>

                <View>
                  {isSmallScreen ? (<View className="my-10 flex-row items-center justify-center space-x-5">
                    <TouchableOpacity onPress={() => hideModal(true)} className=" items-center border border-[#D1CBD8] p-3 rounded-lg w-36">
                      <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('pressed')} className='h-[52px] items-center justify-center w-36'>
                      <LinearGradient
                        colors={['#4A00E8', '#3B3EFF']}
                        className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                      />
                      <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Yes, send it!</Text>
                    </TouchableOpacity>
                  </View>) : (<View className="my-10 flex-row items-center justify-center space-x-5">
                    <TouchableOpacity onPress={() => hideModal(true)} className=" items-center border border-[#D1CBD8] p-3 rounded-lg w-36">
                      <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('pressed')} className='h-[52px] items-center justify-center w-36'>
                      <LinearGradient
                        colors={['#4A00E8', '#3B3EFF']}
                        className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                      />
                      <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Yes, send it!</Text>
                    </TouchableOpacity>
                  </View>)}
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

export default NewChallengersTab;