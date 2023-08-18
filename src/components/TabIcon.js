import React from 'react';
import { View } from 'react-native';
import ActiveBar from "../../assets/svg/ActiveBar.svg";


const TabIcon = ({ icon, isActive }) => {
    return (
        <View className="justify-between items-center h-full mt-5">
            {isActive ? <ActiveBar /> : <View />}
            <View className="absolute top-2">{icon}</View>
        </View>
    );
};

export default TabIcon;