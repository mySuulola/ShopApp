import React, { useState } from 'react'
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import Divider from './Divider';
import { APP_GREEN, APP_BLACK } from '../constants';
import CustomText from './CustomText';


const ProductCard = ({ item, navigation }) => {
    const [like, setLike] = useState(false)
    return (
        <View style={{ backgroundColor: "#E5E5E5", width: 150, borderRadius: 12, marginVertical: 10, marginHorizontal: 5, padding: 10, justifyContent: 'center', alignItems: "center", position: "relative" }}>
            <TouchableOpacity
                onPress={() => setLike(!like)}
                style={{ position: "absolute", top: 7, right: 7, padding: 5, backgroundColor: like === true ? '#f148484d' : "#413f3f4d", borderRadius: 20, zIndex: 10 }}>
                <AntDesignIcons name="heart" size={15} color={like === true ? 'red' : 'black'} style={{ padding: 5, }} />
            </TouchableOpacity>

            <Image
                style={{ width: 100, minHeight: 100, marginBottom: 20 }}
                accessibilityLabel={item.title}
                resizeMode="contain"
                source={{
                    uri: item.image,
                }}
            />
            <View style={[styles.row, { width: '100%', paddingHorizontal: 5, flex: 1, }]}>
                <View style={{ width: '70%', height: "100%", justifyContent: "space-between" }}>
                    <View style={{flex: 1, justifyContent: "center"}}>
                        <Text style={{ fontSize: 12, fontWeight: "bold", }}>{item.title}</Text>
                        <Divider width={20} height={2} backgroundColor={APP_GREEN} space={4} />
                    </View>
                    <CustomText fontWeight={"bold"} textColor={APP_BLACK} textSize={12} textContent={`$${item.price}`} />
                </View>
                <View style={{height: '100%', justifyContent: "center", marginBottom: 30}}>
                <TouchableOpacity
                    onPress={() => navigation.push('Detail', {
                        item: item,
                    })}
                    style={{ backgroundColor: "#00B761" }}
                >
                    <AntDesignIcons name="plus" size={20} color="#fff" style={{ padding: 5 }} />
                </TouchableOpacity>
                </View>


            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
})

export default ProductCard;