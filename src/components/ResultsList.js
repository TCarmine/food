import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import ResultsDetails from "./ResultsDetails"

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal ={true}
        data = {results}
        keyExtractor={results => results.id}
        renderItem = {({ item }) => {
          console.log(item)
          const {name, price} =  item
          return <ResultsDetails result = {item}/>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle:{
    fontSize: 18,
    fontWeight:"bold",
    padding: 15
  }
})

export default ResultsList