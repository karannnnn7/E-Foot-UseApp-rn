import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BackArrowSvg from '../../assets/svg/BackArrow.svg';
import ChatDp1Svg from '../../assets/svg/ChatDp1.svg';
import MenuSvg from '../../assets/svg/Menu.svg';

const ChatingScreen = ({ navigation }) => {

    return (
        <>
            <View className="bg-[#0B0711] h-full">
                <View className="bg-[#261D37] pb-5">
                    <View className="flex-row items-center justify-between mx-5 mt-5">
                        <View className="flex-row items-center space-x-5">
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <BackArrowSvg />
                            </TouchableOpacity>

                            <View className="flex-row items-center space-x-3">
                                <ChatDp1Svg />
                                <View>
                                    <Text className="font-ChakraPetchBold text-xl text-[#D1CBD8]">Jenny Wilson</Text>
                                    <Text className="font-ChakraPetchMedium text-sm text-[#33D49D]">Online</Text>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity>
                            <MenuSvg />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default ChatingScreen;