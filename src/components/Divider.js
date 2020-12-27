import React from 'react'
import { View } from 'react-native'

const Divider = ({ width, height, backgroundColor, space }) => {
    return (
        <View style={{ width, height, backgroundColor, marginVertical: space }} />
    )
}

export default Divider
