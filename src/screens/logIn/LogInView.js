import {Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from "react-native";
import React from "react";
import {InstagramTextLogo} from "../../assets";

const LogInView = props => {
    return <View style={styles.viewContainer}>
        <Image
            style={styles.logo}
            resizeMode={"contain"}
            source={InstagramTextLogo}
        />
        <TextInput
            style={styles.input}
            placeholder="Username"
            autoCapitalize={'none'}
            onChangeText={props.onUserNameChanged}
            value={props.username}/>
        <TextInput
            style={[styles.input, {marginTop: 16}]}
            placeholder="Password"
            autoCapitalize={'none'}
            onChangeText={props.onPasswordChanged}
            value={props.password}
            secureTextEntry={true}/>
        <TouchableOpacity onPress={props.onLogInPressed}>
            <View style={styles.logInButton}>
                <Text style={{
                    color: '#FFF',
                    fontSize: 16
                }}>Log In</Text>
            </View>
        </TouchableOpacity>
        {props.displayErrorAlert && Alert.alert(
            "Warning",
            "Username or password cannot be empty!",
            [{text: "OK", onPress: () => props.onDismissErrorAlert()}]
        )}
    </View>
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        width: Dimensions.get('window').width,
        height: 140
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#dedede',
        padding: 10,
        backgroundColor: '#F5F5F5',
        marginHorizontal: 32
    },
    logInButton: {
        marginTop: 32,
        marginHorizontal: 32,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7abbff'
    }
});

export default LogInView;
