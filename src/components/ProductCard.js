import React, { useState } from 'react'
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import Divider from './Divider';
import { APP_GREEN, APP_BLACK, APP_WHITE, APP_GRAY } from '../constants';
import CustomText from './CustomText';

const ProductCard = ({ item, navigation }) => {
    const [like, setLike] = useState(false)
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setLike(!like)}
                style={[styles.likeBtn, { backgroundColor: like === true ? '#f148484d' : "#413f3f4d", }]}>
                <AntDesignIcons
                    name="heart"
                    size={15}
                    color={like === true ? 'red' : APP_BLACK}
                    style={styles.p5} />
            </TouchableOpacity>

            <Image
                style={styles.image}
                accessibilityLabel={item.title}
                resizeMode="contain"
                source={{
                    uri: item.image,
                }}
            />
            <View style={[styles.row, styles.detailContainer]}>
                <View style={styles.priceButtonContainer}>
                    <View style={styles.flexCenter}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Divider
                            width={20}
                            height={2}
                            backgroundColor={APP_GREEN}
                            space={4}
                        />
                    </View>
                    <CustomText f
                        ontWeight={"bold"}
                        textColor={APP_BLACK}
                        textSize={12}
                        textContent={`$${item.price}`}
                    />
                </View>
                <View style={styles.addBtnContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.push('Detail', {
                            item: item,
                        })}
                        style={styles.addBtn}
                    >
                        <AntDesignIcons
                            name="plus"
                            size={20}
                            color={APP_WHITE}
                            style={styles.p5} />
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: APP_GRAY,
        width: 150,
        borderRadius: 12,
        marginVertical: 10,
        marginHorizontal: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: "center",
        position: "relative"
    },
    p5: {
        padding: 5
    },
    image: {
        width: 100,
        minHeight: 100,
        marginBottom: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    addBtnContainer: {
        height: '100%',
        justifyContent: "center",
        marginBottom: 30
    },
    addBtn: {
        backgroundColor: APP_GREEN
    },
    title: {
        fontSize: 12,
        fontWeight: "bold",
    },
    flexCenter: {
        flex: 1,
        justifyContent: "center"
    },
    detailContainer: {
        width: '100%',
        paddingHorizontal: 5,
        flex: 1,
    },
    priceButtonContainer: {
        width: '70%',
        height: "100%",
        justifyContent: "space-between"
    },
    likeBtn: {
        position: "absolute",
        top: 7,
        right: 7,
        padding: 5,
        borderRadius: 20,
        zIndex: 10
    },
})

export default ProductCard;