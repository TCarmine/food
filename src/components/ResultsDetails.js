import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"

const ResultsDetails = ({result}) =>{
  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }}/>
      <Text>
        {result.name}
      </Text>
    </View>
  )
}

const styles= StyleSheet.create({
  imageStyle:{
    width: 250,
    height: 120,
    borderRadius: 4
  },
  nameStyle:{
    fontWeight: "bold",
    fontSize: 16
  }
})

export default ResultsDetails