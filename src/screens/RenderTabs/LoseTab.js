import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../config/Theme';
import SmallLogoSvg from '../../../assets/svg/SmallLogo.svg';
import PPSvg from '../../../assets/svg/PP.svg';


const LoseTab = () => {

  const theme = { mode: 'light' };
  let activeColors = colors[theme.mode];

  return (
    <>
      <View className="mt-5">
        <View style={{ backgroundColor: activeColors.cardBackground }} className="p-4 rounded-md">
          <View className="flex-row items-center mx-5 space-x-5">
            <SmallLogoSvg />
            <View>
              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Game:</Text>
                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">FREE Play 1vs1 (training)</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Console:</Text>
                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">Xbox Series X en S</Text>
              </View>
            </View>
          </View>

          <View className="mt-3 mx-5 flex-row items-center justify-between">
            <View className="space-y-3">
              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Mode:</Text>
                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">FUT 1vs1</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Type:</Text>
                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">Private</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Status:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FF4842]">Lose</Text>
              </View>
            </View>

            <View className="space-y-2">
              <View className="flex-row items-center space-x-2">
                <PPSvg />
                <View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Challenged by</Text>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris Benedict</Text>
                </View>
              </View>

              <View className="flex-row items-center space-x-2">
                <PPSvg />
                <View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Accepted by</Text>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: activeColors.cardBackground }} className="p-4 rounded-md mt-5">
          <View className="flex-row items-center mx-5 space-x-5">
            <SmallLogoSvg />
            <View>
              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Game:</Text>
                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">FREE Play 1vs1 (training)</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Console:</Text>
                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">Xbox Series X en S</Text>
              </View>
            </View>
          </View>

          <View className="mt-3 mx-5 flex-row items-center justify-between">
            <View className="space-y-3">
              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Mode:</Text>
                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">FUT 1vs1</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Type:</Text>
                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">Private</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Status:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FF4842]">Lose</Text>
              </View>
            </View>

            <View className="space-y-2">
              <View className="flex-row items-center space-x-2">
                <PPSvg />
                <View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Challenged by</Text>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris Benedict</Text>
                </View>
              </View>

              <View className="flex-row items-center space-x-2">
                <PPSvg />
                <View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Accepted by</Text>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: activeColors.cardBackground }} className="p-4 rounded-md mt-5">
          <View className="flex-row items-center mx-5 space-x-5">
            <SmallLogoSvg />
            <View>
              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Game:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">FREE Play 1vs1 (training)</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Console:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Xbox Series X en S</Text>
              </View>
            </View>
          </View>

          <View className="mt-3 mx-5 flex-row items-center justify-between">
            <View className="space-y-3">
              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Mode:</Text>
                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">FUT 1vs1</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Type:</Text>
                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">Private</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Status:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FF4842]">Lose</Text>
              </View>
            </View>

            <View className="space-y-2">
              <View className="flex-row items-center space-x-2">
                <PPSvg />
                <View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Challenged by</Text>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris Benedict</Text>
                </View>
              </View>

              <View className="flex-row items-center space-x-2">
                <PPSvg />
                <View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Accepted by</Text>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: activeColors.cardBackground }} className="p-4 rounded-md mt-5">
          <View className="flex-row items-center mx-5 space-x-5">
            <SmallLogoSvg />
            <View>
              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Game:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">FREE Play 1vs1 (training)</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Console:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Xbox Series X en S</Text>
              </View>
            </View>
          </View>

          <View className="mt-3 mx-5 flex-row items-center justify-between">
            <View className="space-y-3">
              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Mode:</Text>
                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">FUT 1vs1</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Type:</Text>
                <Text style={{ color: activeColors.textTernory }} className="font-ChakraPetchBold text-sm">Private</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchLight text-sm">Status:</Text>
                <Text className="font-ChakraPetchBold text-sm text-[#FF4842]">Lose</Text>
              </View>
            </View>

            <View className="space-y-2">
              <View className="flex-row items-center space-x-2">
                <PPSvg />
                <View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Challenged by</Text>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris Benedict</Text>
                </View>
              </View>

              <View className="flex-row items-center space-x-2">
                <PPSvg />
                <View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Accepted by</Text>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-sm">Patric Haris</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default LoseTab;