import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions, Platform, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import DashBoardTab from "../screens/DashBoardTab";
import ChatTab from "../screens/ChatTab";
import HomeSvg from '../../assets/svg/Home.svg';
import ActiveHomeSvg from '../../assets/svg/ActiveHome.svg';
import DashBoardSvg from '../../assets/svg/DashBoard.svg';
import ActiveDashBoardSvg from '../../assets/svg/ActiveDashBoard.svg';
import NewGameSvg from '../../assets/svg/NewGame.svg';
import CupSvg from '../../assets/svg/Cup.svg';
import ActiveCupSvg from '../../assets/svg/ActiveCup.svg';
import ChatSvg from '../../assets/svg/Chat.svg';
import ActiveChatSvg from '../../assets/svg/ActiveChat.svg';
import TabIcon from "./TabIcon";
import MyMatches from "../screens/MyMatches";
import TournamentScreen from "../screens/TournamentScreen";
import StartGameTab from "../screens/StartGameTab";


const BottomTabs = () => {

    const Tab = createBottomTabNavigator();

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
                                            <ActiveHomeSvg width={23} height={23} />
                                        ) : (
                                            <View>
                                                <HomeSvg width={23} height={23} />
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
                                            <ActiveDashBoardSvg width={23} height={23} />
                                        ) : (
                                            <DashBoardSvg width={23} height={23} />
                                        )
                                    }
                                />
                            );

                            break;

                        case 'startGame':
                            iconName = (
                                <View className={`absolute ${isSmallScreen ? 'bottom-0' : '-bottom-8'} shadow-sm shadow-[#4517F1]`}>
                                    <NewGameSvg />
                                </View>
                            );

                            break;

                        case 'tournament':
                            iconName = (
                                <TabIcon
                                    isActive={focused}
                                    icon={
                                        focused ? (
                                            <ActiveCupSvg width={23} height={23} />
                                        ) : (
                                            <CupSvg width={23} height={23} />
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
                                                <ActiveChatSvg width={23} height={23} />
                                            </View>
                                        ) : (
                                            <View>
                                                <ChatSvg width={23} height={23} />
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
                    backgroundColor: '#261D37',
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