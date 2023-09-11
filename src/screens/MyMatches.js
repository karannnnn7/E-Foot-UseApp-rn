import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../config/Theme';
import { ThemeContext } from '../context/ThemeContext';
import CommonHeader from '../components/CommonHeader';
import MyMatchSvg from '../../assets/svg/MyMatch.svg';
import MyMatchLightSvg from '../../assets/svg/MyMatchLight.svg';
import SearchSvg from '../../assets/svg/Search.svg';
import SearchLightSvg from '../../assets/svg/SearchLight.svg';
import FilterSvg from '../../assets/svg/Filter.svg';
import FilterLightSvg from '../../assets/svg/FilterLight.svg';
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
    // const theme = { mode: 'light' };
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];




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
            <View style={{ backgroundColor: activeColors.background }} className="h-full">
                <CommonHeader navigation={navigation} />

                <View className="mx-5">
                    <View className="flex-row items-center space-x-3 mt-3">
                        {theme.mode === 'dark' ? (<MyMatchSvg width={24} height={24} />) : (<MyMatchLightSvg width={24} height={24} />)}
                        <Text style={{ color: activeColors.textPrimary }} className="font-ChakraPetchBold text-xl">My Matches</Text>
                    </View>

                    <View className="mt-3">
                        <View>
                            <View>
                                <TextInput
                                    mode='outlined'
                                    placeholder='Search users'
                                    placeholderTextColor={colors.textPrimary}
                                    textColor={colors.textPrimary}
                                    style={{ backgroundColor: activeColors.cardBackground, paddingLeft: 32 }}
                                />

                                <View className="absolute top-5 left-4">
                                    {theme.mode === 'dark' ? (<SearchSvg />) : (<SearchLightSvg />)}
                                </View>
                            </View>

                            {/* <TouchableOpacity onPress={() => console.log('pressed')} style={{ backgroundColor: activeColors.cardBackground }} className="p-4 rounded-lg mt-1">
                                {theme.mode === 'dark' ? (<FilterSvg />) : (<FilterLightSvg />)}
                            </TouchableOpacity> */}


                        </View>
                    </View>

                    <View>
                        <View className="mt-5 flex-row items-center justify-between">
                            <TouchableOpacity onPress={() => {
                                setSelected('Pending (10)')
                                setActiveTabName('Pending (10)')
                            }} style={{ backgroundColor: `${selected === 'Pending (10)' ? '#171ad4' : activeColors.cardBackground}` }}
                                className={`p-3 rounded-lg `}>
                                <Text style={{ color: `${selected === 'Pending (10)' ? '#D1CBD8' : activeColors.textPrimary}` }} className="font-ChakraPetchBold text-sm">Pending (10)</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                setSelected('Accepted (10)')
                                setActiveTabName('Accepted (10)')
                            }} style={{ backgroundColor: `${selected === 'Accepted (10)' ? '#171ad4' : activeColors.cardBackground}` }}
                                className={`p-3 rounded-lg`}>
                                <Text style={{ color: `${selected === 'Accepted (10)' ? '#D1CBD8' : activeColors.textPrimary}` }} className="font-ChakraPetchBold text-sm">Accepted (10)</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                setSelected('Dispute (7)')
                                setActiveTabName('Dispute (7)')
                            }} style={{ backgroundColor: `${selected === 'Dispute (7)' ? '#171ad4' : activeColors.cardBackground}` }}
                                className={`p-3 rounded-lg`}>
                                <Text style={{ color: `${selected === 'Dispute (7)' ? '#D1CBD8' : activeColors.textPrimary}` }} className="font-ChakraPetchBold text-sm">Dispute (7)</Text>
                            </TouchableOpacity>
                        </View>

                        <View className="mt-5 flex-row items-center space-x-7">
                            <TouchableOpacity onPress={() => {
                                setSelected('Win (9)')
                                setActiveTabName('Win (9)')
                            }} style={{ backgroundColor: `${selected === 'Win (9)' ? '#171ad4' : activeColors.cardBackground}` }}
                                className={`p-3 rounded-lg`}>
                                <Text style={{ color: `${selected === 'Win (9)' ? '#D1CBD8' : activeColors.textPrimary}` }} className="font-ChakraPetchBold text-sm">Win (9)</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                setSelected('lose (9)')
                                setActiveTabName('lose (9)')
                            }} style={{ backgroundColor: `${selected === 'lose (9)' ? '#171ad4' : activeColors.cardBackground}` }}
                                className={`p-3 rounded-lg`}>
                                <Text style={{ color: `${selected === 'lose (9)' ? '#D1CBD8' : activeColors.textPrimary}` }} className="font-ChakraPetchBold text-sm">lose (9)</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                setSelected('Draw (10)')
                                setActiveTabName('Draw (10)')
                            }} style={{ backgroundColor: `${selected === 'Draw (10)' ? '#171ad4' : activeColors.cardBackground}` }}
                                className={`p-3 rounded-lg`}>
                                <Text style={{ color: `${selected === 'Draw (10)' ? '#D1CBD8' : activeColors.textPrimary}` }} className="font-ChakraPetchBold text-sm">Draw (10)</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} bounces={false} className="mt-8 h-full">
                        {renderContent()}
                        <View className="mb-96" />
                    </ScrollView>
                </View>
            </View >
        </>
    )
}

export default MyMatches;