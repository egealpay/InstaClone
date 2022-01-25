import React from "react";
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import Feather from "react-native-vector-icons/Feather"
import {SampleImage10MB} from "../../assets";

const FeedView = props => {

    return <SafeAreaView style={{flex: 1}}>
        <ScrollView>
            <View style={{flexDirection: 'row', marginHorizontal: 16, alignItems: 'center'}}>
                <Image
                    style={{height: 50, width: 50, borderRadius: 25,}}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
                    }}
                />
                <Text style={{marginLeft: 16, fontWeight: '500', fontSize: 16,}}>Username</Text>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Feather name={"more-horizontal"} size={24}/>
                </View>
            </View>
            <Image
                style={{
                    width: Dimensions.get('window').width,
                    height: 350,
                    marginVertical: 16
                }}
                resizeMode={"cover"}
                source={SampleImage10MB}
            />
            <View style={{flexDirection: 'row', marginHorizontal: 16, alignItems: 'center'}}>
                <Feather name={"heart"} size={28}/>
                <Feather name={"message-circle"} size={28} style={{marginLeft: 16}}/>
                <Feather name={"send"} size={28} style={{marginLeft: 16}}/>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Feather name={"bookmark"} size={28}/>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
}

export default FeedView;
