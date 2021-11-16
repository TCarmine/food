import React from "react"
import { View, Text} from "react-native"

const ResultShowScreen = ({ navigation }) =>{
  const id = navigation.getParam("id")

  
  
  return (
    <View>
      <Text>
        Result of a restaurant
      </Text>
    </View>
  )
}

export default ResultShowScreen