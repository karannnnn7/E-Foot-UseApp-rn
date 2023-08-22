import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SmallLogoSvg from '../../../assets/svg/SmallLogo.svg';
import PPSvg from '../../../assets/svg/PP.svg';

const DisputeTab = () => {
  return (
    <>
      <View>
        <View className="bg-[#261D37] p-4 rounded-md">
          <View className="flex-row items-center mx-5 space-x-5">
            <SmallLogoSvg />
            <View>
              <View className="flex-row items-center space-x-1">
                <Text className="font-ChakraPetchLight text-sm text-[#D1CBD8]">Game:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">FREE Play 1vs1 (training)</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text className="font-ChakraPetchLight text-sm text-[#D1CBD8]">Console:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Xbox Series X en S</Text>
              </View>
            </View>
          </View>

          <View className="mt-3 mx-5 flex-row items-center justify-between">
            <View className="space-y-3">
              <View className="flex-row items-center space-x-1">
                <Text className="font-ChakraPetchLight text-sm text-[#D1CBD8]">Mode:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">FUT 1vs1</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text className="font-ChakraPetchLight text-sm text-[#D1CBD8]">Type:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Private</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text className="font-ChakraPetchLight text-sm text-[#D1CBD8]">Status:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#1890FF]">Dispute</Text>
              </View>
            </View>

            <View className="space-y-2">
              <View className="flex-row items-center space-x-2">
                <PPSvg />
                <View>
                  <Text className="font-ChakraPetchMedium text-xs text-[#D1CBD8]">Challenged by</Text>
                  <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Patric Haris Benedict</Text>
                </View>
              </View>

              <View className="flex-row items-center space-x-2">
                <PPSvg />
                <View>
                  <Text className="font-ChakraPetchMedium text-xs text-[#D1CBD8]">Accepted by</Text>
                  <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Patric Haris</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="items-center">
            <TouchableOpacity onPress={() => console.log('pressed')} className='h-12 items-center justify-center w-[310px] mt-7'>
              <LinearGradient
                colors={['#4A00E8', '#3B3EFF']}
                className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
              />
              <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Resolve Dispute</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-[#261D37] p-4 rounded-md mt-5">
          <View className="flex-row items-center mx-5 space-x-5">
            <SmallLogoSvg />
            <View>
              <View className="flex-row items-center space-x-1">
                <Text className="font-ChakraPetchLight text-sm text-[#D1CBD8]">Game:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">FREE Play 1vs1 (training)</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text className="font-ChakraPetchLight text-sm text-[#D1CBD8]">Console:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Xbox Series X en S</Text>
              </View>
            </View>
          </View>

          <View className="mt-3 mx-5 flex-row items-center justify-between">
            <View className="space-y-3">
              <View className="flex-row items-center space-x-1">
                <Text className="font-ChakraPetchLight text-sm text-[#D1CBD8]">Mode:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">FUT 1vs1</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text className="font-ChakraPetchLight text-sm text-[#D1CBD8]">Type:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Private</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text className="font-ChakraPetchLight text-sm text-[#D1CBD8]">Status:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#1890FF]">Dispute</Text>
              </View>
            </View>

            <View className="space-y-2">
              <View className="flex-row items-center space-x-2">
                <PPSvg />
                <View>
                  <Text className="font-ChakraPetchMedium text-xs text-[#D1CBD8]">Challenged by</Text>
                  <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Patric Haris Benedict</Text>
                </View>
              </View>

              <View className="flex-row items-center space-x-2">
                <PPSvg />
                <View>
                  <Text className="font-ChakraPetchMedium text-xs text-[#D1CBD8]">Accepted by</Text>
                  <Text className="font-ChakraPetchBold text-sm text-[#D1CBD8]">Patric Haris</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="items-center">
            <TouchableOpacity onPress={() => console.log('pressed')} className='h-12 items-center justify-center w-[310px] mt-7'>
              <LinearGradient
                colors={['#4A00E8', '#3B3EFF']}
                className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
              />
              <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Resolve Dispute</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  )
}

export default DisputeTab;