import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';

const SearchInput = ({ iconName, placeholder, fieldValue, setFieldState }) => {
    return (
        <View style={{
            backgroundColor: "#E5E5E5",
            borderRadius: 12,
            alignItems: 'center',
            flexDirection: 'row',
            width: '80%'
        }}>
            <Icon 
            name={"search"} 
            size={25} 
            color="#000" 
            style={{paddingHorizontal: 7}}
            />
            <TextInput 
            value={fieldValue} 
            onChangeText={text => setFieldState(text)} 
            style={{ flex: 1 }} 
            placeholder={placeholder} 
            />
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({})
