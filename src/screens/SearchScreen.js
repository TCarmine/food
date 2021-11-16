import React, { useState } from "react"
import { View, Text, StyleSheet} from "react-native"
import SearchBar from "../components/SearchBar"
import yelp from "../api/yelp"
import useResults from "../hooks/useResults"
import ResultsList from "../components/ResultsList"

const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [searchApi, results, errorMessage ] = useResults()
  
const filterResultByPrice = (price) =>{
  return results.filter(result =>{
    return result.price === price
  }) 
}

  return (
    <View style={{ flex:1 }}>
      <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={()=>searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text>: null}

      <Text style={styles.textSytle}>We have found {results.length} results</Text>
      <ResultsList results={filterResultByPrice("$")} title="Cost Effective" /> 
      <ResultsList results={filterResultByPrice("$$")} title="Bit Pricier"  /> 
      <ResultsList results={filterResultByPrice("$$$")} title="Bit Spender" /> 
    </View>
  )
}

const styles = StyleSheet.create({
  textSytle:{
    marginLeft: 15
  }
})

export default SearchScreen