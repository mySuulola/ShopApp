import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';
import { APP_BLACK } from '../constants';

const SearchInput = ({ iconName, placeholder, fieldValue, setFieldState }) => {
    return (
        <View style={styles.container}>
            <Icon
                name={iconName}
                size={25}
                color={APP_BLACK}
                style={styles.px7}
            />
            <TextInput
                value={fieldValue}
                onChangeText={text => setFieldState(text)}
                style={styles.flex}
                placeholder={placeholder}
            />
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    container: {
        backgroundColor: "#E5E5E5",
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%'
    },
    px7: {
        paddingHorizontal: 7
    },
})
