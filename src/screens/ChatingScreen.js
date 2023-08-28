import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import BackArrowSvg from '../../assets/svg/BackArrow.svg';
import ChatDp1Svg from '../../assets/svg/ChatDp1.svg';
import MenuSvg from '../../assets/svg/Menu.svg';

const ChatingScreen = ({ navigation }) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]);
    }, []);

    const onSend = useCallback((newMessages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, newMessages),
        );
    }, []);

    return (
        <>
            <View className="bg-[#0B0711] h-full">
                <View>
                    <View className="flex-row items-center justify-between mx-5 mt-5">
                        <View className="flex-row items-center space-x-5">
                            <TouchableOpacity>
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

                    <View className="border-b mt-2 border-[#D1CBD8]" />

                    <View className="flex-1">
                        <GiftedChat
                            messages={messages}
                            onSend={newMessages => onSend(newMessages)}
                            user={{
                                _id: 1,
                            }}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}

export default ChatingScreen;