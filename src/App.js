import React, {useState} from 'react';
import LogInContainer from "./screens/logIn/LogInContainer";
import FeedContainer from "./screens/feed/FeedContainer";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";

export const AuthContext = React.createContext();
const Stack = createNativeStackNavigator();

const App = () => {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'LOG_IN':
                    return {
                        ...prevState,
                        isLoggedIn: true,
                    };
            }
        },
        {
            isLoggedIn: false,
        }
    );

    const authContext = React.useMemo(
        () => ({
            logIn: async data => {
                // In a production app, we need to send some data (usually username, password) to server and get a token
                // We will also need to handle errors if sign in failed
                // After getting token, we need to persist the token using `SecureStore`
                // In the example, we'll use a dummy token

                dispatch({type: 'LOG_IN'});
            }
        }),
        []
    );

    return <SafeAreaProvider>
        <NavigationContainer>
            <AuthContext.Provider value={authContext}>
                <Stack.Navigator>
                    {state.isLoggedIn ? (
                        <Stack.Screen name="Feed" component={FeedContainer} options={{title: 'Instagram'}}/>
                    ) : (
                        <Stack.Screen name="LogIn" component={LogInContainer} options={{headerShown: false}}/>
                    )}
                </Stack.Navigator>
            </AuthContext.Provider>
        </NavigationContainer>
    </SafeAreaProvider>;
};

export default App;
