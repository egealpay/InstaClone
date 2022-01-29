import React, {useEffect} from 'react';
import LogInContainer from "./screens/logIn/LogInContainer";
import FeedContainer from "./screens/feed/FeedContainer";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderLeftButton from "./screens/feed/components/HeaderLeftButton";
import HeaderRightButton from "./screens/feed/components/HeaderRightButton";
import ExploreContainer from "./screens/explore/ExploreContainer";

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

    // When user opens the app, check if the user logged in before.
    // Logged In information is stored by using AsyncStorage.
    // If the user was logged in, navigate him/her directly to feed page. Else, show log in page.
    useEffect(() => {
        AsyncStorage.getItem('isLoggedIn')
            .then((value) => {
                value != null ? JSON.parse(value) : null;

                if (value) {
                    dispatch({type: 'RESTORE_TOKEN'});
                }
            })
    }, []);

    // If user log in or log out, update logged in information in AsyncStorage
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
                        <>
                            <Stack.Screen
                                name="Feed"
                                component={FeedContainer}
                                options={{
                                    title: 'Instagram',
                                    headerLeft: () => <HeaderLeftButton/>,
                                    headerRight: () => <HeaderRightButton/>
                                }}/>
                            <Stack.Screen
                                name="Explore"
                                component={ExploreContainer}
                                options={{
                                    title: 'Explore',
                                }}/>
                        </>
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
