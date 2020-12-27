import React from 'react'
import { View, ActivityIndicator, TouchableOpacity, Text,StyleSheet } from 'react-native'
import { APP_GREEN } from '../constants'

const Loader = ({errorMessage,fetchAllPlants }) => {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={APP_GREEN} />
            <Text>{errorMessage}</Text>
            {errorMessage !== "" && (<TouchableOpacity
              onPress={fetchAllPlants}
              style={styles.retryBtn}>
              <Text style={styles.coloredText}>Try Again</Text>
            </TouchableOpacity>)}
          </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    retryBtn: { padding: 10, backgroundColor: APP_GREEN, marginTop: 10, borderRadius: 7 },
    coloredText: {
        color: "#fff",
        textTransform: "uppercase",
      },
})

export default Loader
