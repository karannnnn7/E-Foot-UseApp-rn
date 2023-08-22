import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Dimensions, Animated, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import CommonHeader from '../components/CommonHeader';
import MyMatchesHeaderSvg from '../../assets/svg/MyMatchesHeader.svg';
import SearchSvg from '../../assets/svg/Search.svg';
import FilterSvg from '../../assets/svg/Filter.svg';
import CloseSvg from '../../assets/svg/Close.svg';
import PendingTab from './RenderTabs/PendingTab';
import AcceptedTab from './RenderTabs/AcceptedTab';
import DisputeTab from './RenderTabs/DisputeTab';
import WinTab from './RenderTabs/WinTab';
import LoseTab from './RenderTabs/LoseTab';
import DrawTab from './RenderTabs/DrawTab';

const MyMatches = ({ navigation }) => {

    const isSmallScreen = Dimensions.get('screen').height > 850;
    const [visible, setVisible] = useState(false);
    const [animationValue, setanimationValue] = useState(new Animated.Value(1));
    const [isDocumentUploaded, setIsDocumentUploaded] = useState(false);
    const [selected, setSelected] = useState('Pending (10)');
    const [activeTabName, setActiveTabName] = useState('Pending (10)');


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

                            <TouchableOpacity onPress={() => setVisible(true)} className="bg-[#261D37] p-4 rounded-lg mt-1">
                                <FilterSvg />
                            </TouchableOpacity>

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

                                <View className="absolute bottom-0 bg-[#261D37] w-full rounded-t-2xl" >
                                    <View className="p-3 mt-3">

                                        <View className="flex-row items-center justify-between mx-5 space-x-3 my-5">
                                            <Text className="font-ChakraPetchBold text-lg text-[#D1CBD8]">Proof Submission</Text>
                                            <TouchableOpacity onPress={() => hideModal()}>
                                                <CloseSvg />
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
                                                <Text className="font-ChakraPetchBold text-base text-[#D1CBD8]">Cancel</Text>
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