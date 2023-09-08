import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Dimensions, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../config/Theme';
import * as DocumentPicker from 'expo-document-picker';
import SmallLogoSvg from '../../../assets/svg/SmallLogo.svg';
import PPSvg from '../../../assets/svg/PP.svg';
import CloseSvg from '../../../assets/svg/Close.svg';
import CloseLightSvg from '../../../assets/svg/CloseLight.svg';

const DisputeTab = () => {

  const isSmallScreen = Dimensions.get('screen').height > 850;
  const [visible, setVisible] = useState(false);
  const [animationValue, setanimationValue] = useState(new Animated.Value(1));
  const [isDocumentUploaded, setIsDocumentUploaded] = useState(false);
  const theme = { mode: 'light' };
  let activeColors = colors[theme.mode];

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

  //For Document Pick form phonestorage
  const handlePickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setIsDocumentUploaded(true); // Set the state to indicate document upload
    }
    alert(result.uri);
    console.log(result);
  };

  return (
    <>
      <View>
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
                <Text className="font-ChakraPetchBold text-sm text-[#1890FF]">Dispute</Text>
              </View>
            </View>

            <View className="space-y-2">
              <View className="flex-row items-center space-x-2">
                <PPSvg />
                <View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Challenged by</Text>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-s">Patric Haris Benedict</Text>
                </View>
              </View>

              <View className="flex-row items-center space-x-2">
                <PPSvg />
                <View>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchMedium text-xs">Accepted by</Text>
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-s">Patric Haris</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="items-center">
            <TouchableOpacity onPress={() => setVisible(true)} className='h-12 items-center justify-center w-[310px] mt-7'>
              <LinearGradient
                colors={['#4A00E8', '#3B3EFF']}
                className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
              />
              <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Resolve Dispute</Text>
            </TouchableOpacity>
          </View>

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

            <View style={{ backgroundColor: activeColors.cardBackground }} className="absolute bottom-0 w-full rounded-t-2xl" >
              <View className="p-3 mt-3">

                <View className="flex-row items-center justify-between mx-5 space-x-3 my-5">
                  <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-lg">Proof Submission</Text>
                  <TouchableOpacity onPress={() => hideModal()}>
                    {theme.mode === 'dark' ? (<CloseSvg />) : (<CloseLightSvg />)}
                  </TouchableOpacity>
                </View>

                <View className="items-center">
                  <TouchableOpacity onPress={handlePickDocument} className='h-12 items-center justify-center w-[350px] mt-7'>
                    <LinearGradient
                      colors={['#4A00E8', '#3B3EFF']}
                      className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                    />
                    <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Upload Proof</Text>
                  </TouchableOpacity>
                </View>

                <View className="bg-[#332d1c] mt-5 mx-5 p-2 rounded-lg">
                  <Text className="font-ChakraPetchBold text-sm text-[#FFC107]">Note:</Text>
                  <Text className="font-ChakraPetchLight text-sm text-[#FFC107]">Upload screenshot or score image of game to resolve dispute. Make sure scores are visible properly Uploaded image will be used for inspecting scores. Once uploaded you can't reupload it again</Text>
                </View>

                {isSmallScreen ? (<View className="my-10 mx-5 flex-row items-center justify-between">
                  <TouchableOpacity onPress={() => hideModal(true)} className=" items-center border border-[#D1CBD8] p-3 rounded-lg w-40">
                    <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-base">Cancel</Text>
                  </TouchableOpacity>

                  {isDocumentUploaded ? (<TouchableOpacity onPress={() => console.log('pressed')} className='h-[52px] items-center justify-center w-40'>
                    <LinearGradient
                      colors={['#4A00E8', '#3B3EFF']}
                      className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                    />
                    <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Submit</Text>
                  </TouchableOpacity>) : (<TouchableOpacity onPress={() => console.log('pressed')} className='h-[52px] items-center justify-center w-40 bg-[#98959A] rounded-lg'>
                    <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Submit</Text>
                  </TouchableOpacity>)}
                </View>) : (<View className="my-10 mx-5 flex-row items-center justify-between space-x-5">
                  <TouchableOpacity onPress={() => hideModal(true)} className=" items-center border border-[#D1CBD8] p-3 rounded-lg w-40">
                    <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Cancel</Text>
                  </TouchableOpacity>

                  {isDocumentUploaded ? (<TouchableOpacity onPress={() => console.log('pressed')} className='h-[52px] items-center justify-center w-40'>
                    <LinearGradient
                      colors={['#4A00E8', '#3B3EFF']}
                      className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                    />
                    <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Apply</Text>
                  </TouchableOpacity>) : (<TouchableOpacity onPress={() => console.log('pressed')} className='h-[52px] items-center justify-center w-40 bg-[#98959A] rounded-lg'>
                    <Text className="font-ChakraPetchBold text-sm text-[#FFFFFF]">Apply</Text>
                  </TouchableOpacity>)}
                </View>)}
              </View>
            </View>
          </Modal>
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
                <Text className="font-ChakraPetchBold text-sm text-[#1890FF]">Dispute</Text>
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

          <View className="items-center">
            <TouchableOpacity onPress={() => setVisible(true)} className='h-12 items-center justify-center w-[310px] mt-7'>
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