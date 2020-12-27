import React, { useState } from 'react'
import { View, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailsCard from '../components/DetailsCard';
import { APP_BLACK } from '../constants';


const ProductDetail = ({ navigation, route }) => {

    const [itemCount, setItemCount] = useState(1)
    const { item } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.row, styles.paddingtx]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcon
                        name="keyboard-backspace"
                        size={20}
                        color={APP_BLACK}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Landing', { screen: 'Cart' })}>
                    <MaterialCommunityIcon
                        name="cart"
                        size={20}
                        color={APP_BLACK}
                    />
                </TouchableOpacity>


            </View>
            <View style={styles.alignCenter}>
                <Image
                    style={styles.largeImage}
                    accessibilityLabel={item.title}
                    resizeMode="contain"
                    source={{
                        uri: item.image,
                    }}
                />
            </View>
            <DetailsCard
                navigation={navigation}
                itemCount={itemCount}
                setItemCount={setItemCount}
                price={item.price}
                description={item.description}
                title={item.title}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    paddingtx: {
        paddingHorizontal: 10,
        paddingTop: 20
    },
    alignCenter: {
        alignItems: "center"
    },
    largeImage: {
        width: 200,
        minHeight: 300,
        marginBottom: 20
    },

})

export default ProductDetail
