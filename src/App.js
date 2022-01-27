import React, {useState, useEffect} from 'react';
import LogInContainer from "./screens/logIn/LogInContainer";
import FeedContainer from "./screens/feed/FeedContainer";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderLeftButton from "./screens/logIn/components/HeaderLeftButton";

export const AuthContext = React.createContext();
const Stack = createNativeStackNavigator();

const App = () => {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'LOG_IN':
                    return {
                        ...prevState,
                        isLoggedIn: true
                    };
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        isLoggedIn: true
                    };
                case 'LOG_OUT':
                    return {
                        ...prevState,
                        isLoggedIn: false
                    };
            }
        },
        {
            isLoggedIn: false,
        }
    );

    useEffect(() => {
        AsyncStorage.getItem('isLoggedIn')
            .then((value) => {
                value != null ? JSON.parse(value) : null;

                if (value) {
                    dispatch({type: 'RESTORE_TOKEN'});
                }
            })
    }, []);

    const authContext = React.useMemo(
        () => ({
            logIn: async data => {
                AsyncStorage.setItem('isLoggedIn', JSON.stringify(true))
                    .then(() => dispatch({type: 'LOG_IN'}));
            },
            logOut: () => {
                AsyncStorage.setItem('isLoggedIn', JSON.stringify(false))
                    .then(() => dispatch({type: 'LOG_OUT'}));
            }
        }), []);

    return <SafeAreaProvider>
        <NavigationContainer>
            <AuthContext.Provider value={authContext}>
                <Stack.Navigator>
                    {state.isLoggedIn ? (
                        <Stack.Screen
                            name="Feed"
                            component={FeedContainer}
                            options={{
                                title: 'Instagram',
                                headerLeft: () => <HeaderLeftButton logOut={() => authContext.logOut()}/>
                            }}/>
                    ) : (
                        <Stack.Screen
                            name="LogIn"
                            component={LogInContainer}
                            options={{headerShown: false}}/>
                    )}
                </Stack.Navigator>
            </AuthContext.Provider>
        </NavigationContainer>
    </SafeAreaProvider>;
};

export default App;
