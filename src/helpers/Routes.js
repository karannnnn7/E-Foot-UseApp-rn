import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const Routes = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={'login'}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
        </Stack.Navigator>
    );
};

export default Routes;