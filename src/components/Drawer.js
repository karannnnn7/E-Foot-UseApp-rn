import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import Customization from "./Customization";
import MainScreen from "../screens/MainScreen";


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
        </Drawer.Navigator>
    );
};


export default Drawer;