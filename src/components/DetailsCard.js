import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import CustomText from '../components/CustomText';
import { APP_BLACK, APP_GRAY, APP_GREEN, APP_WHITE } from '../constants';

const DetailsCard = ({ navigation, itemCount, setItemCount, price, description, title }) => {
    return (
        <View style={styles.detailsContainer}>
            <View style={styles.top} >
                <View style={styles.firstHeader} />
                <Text>Best Choice</Text>
            </View>
            <View style={[styles.row, styles.mb10]}>
                <CustomText
                    fontWeight={"bold"}
                    width={"60%"}
                    textColor={APP_BLACK}
                    textSize={20}
                    textContent={title}
                />
                <View style={styles.priceContainer}>
                    <Text style={styles.whiteText}>${price}</Text>
                </View>
            </View>
            <CustomText
                fontWeight={"bold"}
                textColor={APP_BLACK}
                textSize={15}
                textContent={"About"}
            />
            <Text>{description}</Text>

            <View style={[styles.row, styles.flexEnd]}>
                <View style={styles.top}>
                    <TouchableOpacity
                        style={styles.countButton}
                        onPress={() => {
                            if (itemCount > 1) {
                                setItemCount(itemCount - 1)
                            }
                        }}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.itemCountText} >{itemCount}</Text>
                    <TouchableOpacity
                        style={styles.countButton}
                        onPress={() => setItemCount(itemCount + 1)}>
                        <Text> + </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Landing', { screen: 'Cart' })}
                    style={styles.buyBtn}>
                    <CustomText 
                        fontWeight={"bold"} 
                        textColor={APP_WHITE} 
                        textSize={15} 
                        textContent={"Buy"} 
                        />
                </TouchableOpacity>

            </View>
            <View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    detailsContainer: { backgroundColor: APP_GRAY, flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 },
    top: { flexDirection: "row", alignItems: "center" },
    firstHeader: { width: 15, height: 2, marginRight: 5, backgroundColor: APP_BLACK },
    mb10: { marginBottom: 10 },
    priceContainer: { backgroundColor: APP_GREEN, paddingHorizontal: 20, paddingVertical: 5, height: 40, alignItems: "center", justifyContent: "center", borderTopLeftRadius: 51, borderBottomLeftRadius: 51 },
    whiteText: { color: APP_WHITE },
    flexEnd: { alignItems: "flex-end", flex: 1 },
    itemCountText: { fontSize: 20, marginRight: 15, },
    countButton: {
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "solid",
        height: 30,
        width: 35,
        marginRight: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    buyBtn: { backgroundColor: APP_GREEN, paddingHorizontal: 50, paddingVertical: 10, borderRadius: 40 }



})

export default DetailsCard
