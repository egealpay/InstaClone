import {StyleSheet, TextInput} from "react-native";
import React, {useState} from "react";

const SearchBar = props => {
    const [searchInput, setSearchInput] = useState();

    return <TextInput
        style={styles.input}
        placeholder="Search"
        autoCapitalize={'none'}
        onChangeText={(value) => {
            setSearchInput(value);
            props.onSearchTextInput(value);
        }}
        value={searchInput}/>;
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#dedede',
        padding: 10,
        backgroundColor: '#F5F5F5',
        marginHorizontal: 16,
        marginBottom: 8
    }
});

export default SearchBar;
