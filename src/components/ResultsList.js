import React from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import ResultsDetails from "./ResultsDetails"
import { withNavigation } from "react-navigation"

const ResultsList = ({ title, results, navigation }) => {
  if(!results.length){
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal ={true}
        showsHorizontalScrollIndicator={false}
        data = {results}
        keyExtractor={results => results.id}
        renderItem = {({ item }) => {
          console.log(item)
          const {name, price} =  item
          return (
            <> 
              <TouchableOpacity 
                onPress={()=> navigation.navigate("ResultShow",{id: item.id})}
              >
              <ResultsDetails result = {item}/>
              </TouchableOpacity> 
            </> 
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle:{
    fontSize: 18,
    fontWeight:"bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container:{
    marginBottom: 10
  }
})

export default withNavigation(ResultsList)