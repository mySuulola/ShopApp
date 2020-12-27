import React from 'react'
import { Text } from 'react-native'

const CustomText = ({ textColor, textSize, textContent, width, fontWeight }) => {
    return (
        <Text style={[{ color: textColor, fontSize: textSize, width: width ? width : "100%", fontWeight: fontWeight ? fontWeight : "500" }]}>{textContent}</Text>
    )
}

export default CustomText
