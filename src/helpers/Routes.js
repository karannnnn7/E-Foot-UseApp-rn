import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import MainScreen from "../screens/MainScreen";
import Drawer from "../components/Drawer";

const Routes = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={'drawer'}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="drawer" component={Drawer} />
        </Stack.Navigator>
    );
};

export default Routes;