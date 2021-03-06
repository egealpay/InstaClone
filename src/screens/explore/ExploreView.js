import React from "react";
import {Dimensions, ScrollView, StyleSheet, TextInput, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Thumbnail from "./components/Thumbnail";
import SearchBar from "./components/SearchBar";

const ExploreView = props => {
    const insets = useSafeAreaInsets();

    // To render contents as a Grid
    function renderThumbnails() {
        let thumbnails = props.thumbnails.map((thumbnail, index) => <Thumbnail thumbnail={thumbnail} key={index}/>);

        let toRender = [];
        let chunk = []

        for (let i = 0; i < thumbnails.length; i++) {
            chunk.push(thumbnails[i]);

            if (i % 3 === 2) {
                toRender.push(<View style={{flexDirection: 'row'}}>{chunk}</View>);
                chunk = [];
            }
        }

        if (chunk.length > 0) {
            toRender.push(<View style={{flexDirection: 'row'}}>{chunk}</View>);
            chunk = [];
        }


        return toRender;
    }

    return <View style={{
        flex: 1,
        paddingTop: insets.top / 4,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }}>
        <ScrollView>
            <SearchBar onSearchTextInput={(toSearch) => props.onSearchTextInput(toSearch)}/>
            {renderThumbnails()}
        </ScrollView>
    </View>
}

export default ExploreView;
