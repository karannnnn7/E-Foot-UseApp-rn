import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Routes = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={'login'}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
        </Stack.Navigator>
    );
};

export default Routes;