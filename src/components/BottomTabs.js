import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions, Platform, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import DashBoardTab from "../screens/DashBoardTab";
import MyMatchesTab from "../screens/MyMatchesTab";
import StartGameTab from "../screens/StartGameTab";
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


const BottomTabs = () => {

    const Tab = createBottomTabNavigator();

    const { height, width } = Dimensions.get('window');
    const isiPhoneSE = Platform.OS === 'ios' && height === 667 && width === 375;
    const isLargeScreen = width > 480;

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

                        case 'game':
                            iconName = (
                                <NewGameSvg />
                            );

                            break;

                        case 'StartGame':
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
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#261D37',
                    height:
                        Platform.OS === 'android'
                            ? 55
                            : isiPhoneSE
                                ? 55

                                : isLargeScreen
                                    ? 60
                                    : 83,
                    paddingLeft: 5,
                    paddingRight: 5,
                },
                tabBarItemStyle: {
                    marginBottom: Platform.OS === 'android' ? 3 : 0,
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
                name="game"
                component={MyMatchesTab}
            />
            <Tab.Screen
                name="StartGame"
                component={StartGameTab}
            />
            <Tab.Screen
                name="chat"
                component={ChatTab}
            />
        </Tab.Navigator>
    );
};


export default BottomTabs;