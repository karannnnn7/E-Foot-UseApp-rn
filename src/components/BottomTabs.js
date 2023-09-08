import { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions, Platform, View } from "react-native";
import { colors } from "../config/Theme";
import { ThemeContext } from "../context/ThemeContext";
import HomeScreen from "../screens/HomeScreen";
import DashBoardTab from "../screens/DashBoardTab";
import ChatTab from "../screens/ChatTab";
import HomeSvg from '../../assets/svg/Home.svg';
import HomeLightSvg from '../../assets/svg/HomeLight.svg';
import ActiveHomeLightSvg from '../../assets/svg/ActiveHomeLight.svg';
import DashBoardSvg from '../../assets/svg/DashBoard.svg';
import DashBoardLightSvg from '../../assets/svg/DashBoardLight.svg';
import ActiveDashBoardLightSvg from '../../assets/svg/ActiveDashBoardLight.svg';
import ActiveNewGameSvg from '../../assets/svg/ActiveNewGame.svg';
import ActiveNewGameLightSvg from '../../assets/svg/ActiveNewGameLight.svg';
import NewGameSvg from '../../assets/svg/NewGame.svg';
import NewGameLightSvg from '../../assets/svg/NewGameLight.svg';
import CupSvg from '../../assets/svg/Cup.svg';
import CupLightSvg from '../../assets/svg/CupLight.svg';
import ActiveCupSvg from '../../assets/svg/ActiveCup.svg';
import ActiveCupLightSvg from '../../assets/svg/ActiveCupLight.svg';
import ChatSvg from '../../assets/svg/Chat.svg';
import ChatLightSvg from '../../assets/svg/ChatLight.svg';
import ActiveChatSvg from '../../assets/svg/ActiveChat.svg';
import ActiveChatLightSvg from '../../assets/svg/ActiveChatLight.svg';
import TabIcon from "./TabIcon";
import TournamentScreen from "../screens/TournamentScreen";
import StartGameTab from "../screens/StartGameTab";


const BottomTabs = () => {

    const Tab = createBottomTabNavigator();
    // const theme = { mode: 'light' };
    const {theme} = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    const { height, width } = Dimensions.get('window');
    const isiPhoneSE = Platform.OS === 'ios' && height === 667 && width === 375;
    const isLargeScreen = width > 480;
    const isSmallScreen = Dimensions.get('screen').height > 850;

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'home':
                            iconName = (
                                <TabIcon
                                    isActive={focused}
                                    icon={
                                        focused ? (
                                            <View>
                                                <ActiveHomeLightSvg width={23} height={23} />
                                            </View>
                                        ) : (
                                            <View>
                                                {theme.mode === 'dark' ? (<HomeSvg width={23} height={23} />) : (<HomeLightSvg width={23} height={23} />)}
                                            </View>
                                        )
                                    }
                                />
                            );
                            break;

                        case 'dash':
                            iconName = (
                                <TabIcon
                                    isActive={focused}
                                    icon={
                                        focused ? (
                                            <View>
                                                <ActiveDashBoardLightSvg width={23} height={23} />
                                            </View>
                                        ) : (
                                            <View>
                                                {theme.mode === 'dark' ? (<DashBoardSvg width={23} height={23} />) : (<DashBoardLightSvg width={23} height={23} />)}
                                            </View>
                                        )
                                    }
                                />
                            );

                            break;

                        case 'startGame':
                            iconName = (
                                <TabIcon
                                    isActive={focused}
                                    icon={
                                        focused ? (
                                            <View className={`absolute ${isSmallScreen ? '-bottom-14' : '-bottom-14'} -left-14 shadow-sm shadow-[#4517F1]`}>
                                                {theme.mode === 'dark' ? (<ActiveNewGameSvg />) : (<ActiveNewGameLightSvg />)}
                                            </View>
                                        ) : (
                                            <View className={`absolute ${isSmallScreen ? '-bottom-14' : '-bottom-14'} -left-14 shadow-sm shadow-[#4517F1]`}>
                                                {theme.mode === 'dark' ? (<NewGameSvg />) : (<NewGameLightSvg />)}
                                            </View>
                                        )
                                    }
                                />
                            );

                            break;

                        case 'tournament':
                            iconName = (
                                <TabIcon
                                    isActive={focused}
                                    icon={
                                        focused ? (
                                            <View>
                                                {theme.mode === 'dark' ? (<ActiveCupSvg width={23} height={23} />) : (<ActiveCupLightSvg width={23} height={23} />)}
                                            </View>
                                        ) : (
                                            <View>
                                                {theme.mode === 'dark' ? (<CupSvg width={23} height={23} />) : (<CupLightSvg width={23} height={23} />)}
                                            </View>
                                        )
                                    }
                                />
                            );

                            break;

                        case 'chat':
                            iconName = (
                                <TabIcon
                                    isActive={focused}
                                    icon={
                                        focused ? (
                                            <View>
                                                {theme.mode === 'dark' ? (<ActiveChatSvg width={23} height={23} />) : (<ActiveChatLightSvg width={23} height={23} />)}
                                            </View>
                                        ) : (
                                            <View>
                                                {theme.mode === 'dark' ? (<ChatSvg width={23} height={23} />) : (<ChatLightSvg width={23} height={23} />)}
                                            </View>
                                        )
                                    }
                                />
                            );
                            break;

                        default:
                            break;
                    }

                    /* if (route.name === "Notifications") {
                      iconName = focused ? (
                        <CartIcon width={30} height={30} />
                      ) : (
                        <CartActiveIcon />
                      );
                    } */

                    // You can return any component that you like here!
                    return iconName;
                },
                headerShown: false,
                tabBarLabel: '',
                tabBarStyle: {
                    backgroundColor: activeColors.cardBackground,
                    height:
                        Platform.OS === 'android'
                            ? 60
                            : isiPhoneSE
                                ? 55

                                : isLargeScreen
                                    ? 60
                                    : 63,
                    paddingLeft: 5,
                    paddingRight: 5,
                },
                tabBarItemStyle: {
                    marginBottom: Platform.OS === 'android' ? 3 : -10,
                },
            })}
            initialRouteName="home"
        >
            <Tab.Screen
                name="home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="dash"
                component={DashBoardTab}
            />
            <Tab.Screen
                name="startGame"
                component={StartGameTab}
            />
            <Tab.Screen
                name="tournament"
                component={TournamentScreen}
            />
            <Tab.Screen
                name="chat"
                component={ChatTab}
            />
        </Tab.Navigator>
    );
};


export default BottomTabs;