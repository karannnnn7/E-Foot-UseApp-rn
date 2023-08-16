import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const CButton = ({ onPress, btnText }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} className='h-12 items-center justify-center'>
                <LinearGradient
                    colors={['#4A00E8', '#3B3EFF']}
                    className="h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg"
                />
                <Text className="text-white font-PlayBold text-base">{btnText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CButton;