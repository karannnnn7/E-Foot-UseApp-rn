import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import Customization from "./Customization";
import MainScreen from "../screens/MainScreen";
import ContextUs from "../screens/ContextUs";
import MyMatches from "../screens/MyMatches";
import MyProfileScreen from "../screens/MyProfileScreen";


const Drawer = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            initialRouteName="main"
            screenOptions={{ headerShown: false }}
            drawerContent={props => <Customization {...props} />}
        >
            <Drawer.Screen name="home" component={HomeScreen} />
            <Drawer.Screen name="main" component={MainScreen} />
            <Drawer.Screen name="contectUs" component={ContextUs} />
            <Drawer.Screen name="myMatches" component={MyMatches} />
            <Drawer.Screen name="myProfile" component={MyProfileScreen} />
        </Drawer.Navigator>
    );
};


export default Drawer;