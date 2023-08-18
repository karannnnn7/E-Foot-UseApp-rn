import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import Customization from "./Customization";


const Drawer = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            initialRouteName="home"
            screenOptions={{ headerShown: false }}
            drawerContent={props => <Customization {...props} />}
        >
            <Drawer.Screen name="home" component={HomeScreen} />
            <Drawer.Screen name="myProfile" component={MyProfileScreen} />
        </Drawer.Navigator>
    );
};


export default Drawer;