import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CommonHeader from '../components/CommonHeader';
import ProfileHeaderSvg from '../../assets/svg/ProfileHeader.svg';
import FrameSvg from '../../assets/svg/Frame.svg';
import DpSvg from '../../assets/svg/DP.svg';
import CopyLinkSvg from '../../assets/svg/CopyLink.svg';
import UserSvg from '../../assets/svg/User.svg';
import LinkSvg from '../../assets/svg/Link.svg';
import LockSvg from '../../assets/svg/Lock.svg';
import BellSvg from '../../assets/svg/Bell.svg';
import DownASvg from '../../assets/svg/DownA.svg';

const MyProfileScreen = ({ navigation }) => {
  return (
    <>
      <View className="bg-[#0B0711] h-full">
        <CommonHeader navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="h-full">
          <View className="mx-5">
            <View className="flex-row items-center space-x-3 mt-10">
              <ProfileHeaderSvg />
              <Text className="font-ChakraPetchBold text-xl text-[#D1CBD8]">My Profile</Text>
            </View>

            <View className="items-center mt-5">
              <FrameSvg />
            </View>

            <View className="bg-transparent bg-[#2c2544] border border-[#3B3EFF] rounded-xl p-3 mt-5 flex-row items-center justify-between">
              <Text className="font-ChakraPetchMedium text-base text-[#D1CBD8]">https://myprofilelink.efoot.NL.098.Win...</Text>
              <TouchableOpacity>
                <CopyLinkSvg />
              </TouchableOpacity>
            </View>

            <View className="mt-5">
              <TouchableOpacity className="bg-[#261D37] p-3 flex-row items-center justify-between rounded-lg">
                <View className="flex-row items-center space-x-3 ml-3">
                  <UserSvg />
                  <Text className="font-ChakraPetchMedium text-xl text-[#D1CBD8]">General</Text>
                </View>

                <View className="mr-3">
                  <DownASvg />
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="bg-[#261D37] p-3 flex-row items-center justify-between rounded-lg mt-5">
                <View className="flex-row items-center space-x-3 ml-3">
                  <LinkSvg />
                  <Text className="font-ChakraPetchMedium text-xl text-[#D1CBD8]">Game Id & Rank</Text>
                </View>

                <View className="mr-3">
                  <DownASvg />
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="bg-[#261D37] p-3 flex-row items-center justify-between rounded-lg mt-5">
                <View className="flex-row items-center space-x-3 ml-3">
                  <LockSvg />
                  <Text className="font-ChakraPetchMedium text-xl text-[#D1CBD8]">Change Password</Text>
                </View>

                <View className="mr-3">
                  <DownASvg />
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="bg-[#261D37] p-3 flex-row items-center justify-between rounded-lg mt-5">
                <View className="flex-row items-center space-x-3 ml-3">
                  <BellSvg />
                  <Text className="font-ChakraPetchMedium text-xl text-[#D1CBD8]">User preferences</Text>
                </View>

                <View className="mr-3">
                  <DownASvg />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default MyProfileScreen;