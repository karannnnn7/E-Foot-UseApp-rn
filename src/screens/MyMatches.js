import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import CommonHeader from '../components/CommonHeader';
import MyMatchesHeaderSvg from '../../assets/svg/MyMatchesHeader.svg';
import SearchSvg from '../../assets/svg/Search.svg';
import FilterSvg from '../../assets/svg/Filter.svg';
import PendingTab from './RenderTabs/PendingTab';
import AcceptedTab from './RenderTabs/AcceptedTab';
import DisputeTab from './RenderTabs/DisputeTab';
import WinTab from './RenderTabs/WinTab';
import LoseTab from './RenderTabs/LoseTab';
import DrawTab from './RenderTabs/DrawTab';

const MyMatches = ({ navigation }) => {

    const isSmallScreen = Dimensions.get('screen').height > 850;
    const [selected, setSelected] = useState('Pending (10)');
    const [activeTabName, setActiveTabName] = useState('Pending (10)');




    //For Changing Tab Content
    const renderContent = () => {

        switch (activeTabName) {
            case 'Pending (10)':
                return <PendingTab />;

            case 'Accepted (10)':
                return <AcceptedTab />;

            case 'Dispute (7)':
                return <DisputeTab />;

            case 'Win (9)':
                return <WinTab />;

            case 'lose (9)':
                return <LoseTab />;

            case 'Draw (10)':
                return <DrawTab />;

            default:
                return null;
        };
    };


    return (
        <>
            <View className="bg-[#0B0711] h-full">
                <CommonHeader navigation={navigation} />

                <View className="mx-5">
                    <View className="flex-row items-center space-x-3 mt-10">
                        <MyMatchesHeaderSvg />
                        <Text className="font-ChakraPetchBold text-xl text-[#D1CBD8]">My Matches</Text>
                    </View>

                    <View className="mt-3">
                        <View className="flex-row items-center justify-between">
                            <View className="w-[295px]">
                                <TextInput
                                    mode='outlined'
                                    placeholder='Search users'
                                    placeholderTextColor={'#D1CBD8'}
                                    className="bg-[#261D37] pl-8"
                                />

                                <View className="absolute top-5 left-4">
                                    <SearchSvg />
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => console.log('pressed')} className="bg-[#261D37] p-4 rounded-lg mt-1">
                                <FilterSvg />
                            </TouchableOpacity>

                            
                        </View>
                    </View>

                    <View>
                        <View className="mt-5 flex-row items-center justify-between">
                            <TouchableOpacity onPress={() => {
                                setSelected('Pending (10)')
                                setActiveTabName('Pending (10)')
                            }} className={`p-3 rounded-lg ${selected === 'Pending (10)' ? 'bg-[#171ad4]' : 'bg-[#261D37]'}`}>
                                <Text className="font-ChakraPetchBold text-sm text-[#D1DCD8]">Pending (10)</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                setSelected('Accepted (10)')
                                setActiveTabName('Accepted (10)')
                            }} className={`p-3 rounded-lg ${selected === 'Accepted (10)' ? 'bg-[#171ad4]' : 'bg-[#261D37]'}`}>
                                <Text className="font-ChakraPetchBold text-sm text-[#D1DCD8]">Accepted (10)</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                setSelected('Dispute (7)')
                                setActiveTabName('Dispute (7)')
                            }} className={`p-3 rounded-lg ${selected === 'Dispute (7)' ? 'bg-[#171ad4]' : 'bg-[#261D37]'}`}>
                                <Text className="font-ChakraPetchBold text-sm text-[#D1DCD8]">Dispute (7)</Text>
                            </TouchableOpacity>
                        </View>

                        <View className="mt-5 flex-row items-center space-x-7">
                            <TouchableOpacity onPress={() => {
                                setSelected('Win (9)')
                                setActiveTabName('Win (9)')
                            }} className={`p-3 rounded-lg ${selected === 'Win (9)' ? 'bg-[#171ad4]' : 'bg-[#261D37]'}`}>
                                <Text className="font-ChakraPetchBold text-sm text-[#D1DCD8]">Win (9)</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                setSelected('lose (9)')
                                setActiveTabName('lose (9)')
                            }} className={`p-3 rounded-lg ${selected === 'lose (9)' ? 'bg-[#171ad4]' : 'bg-[#261D37]'}`}>
                                <Text className="font-ChakraPetchBold text-sm text-[#D1DCD8]">lose (9)</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                setSelected('Draw (10)')
                                setActiveTabName('Draw (10)')
                            }} className={`p-3 rounded-lg ${selected === 'Draw (10)' ? 'bg-[#171ad4]' : 'bg-[#261D37]'}`}>
                                <Text className="font-ChakraPetchBold text-sm text-[#D1DCD8]">Draw (10)</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                        <ScrollView showsVerticalScrollIndicator={false} bounces={false} className=" mt-8 h-full">
                            {renderContent()}
                            <View className="mb-96" />
                        </ScrollView>
                </View>
            </View>
        </>
    )
}

export default MyMatches;