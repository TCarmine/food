import React from "react"
import { View, TextInput, StyleSheet} from "react-native"
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" 
               style={styles.iconStyle} 
               color="black" 
      />
      <TextInput 
        style={styles.inputStyle} 
        placeholder="search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle:{
    marginTop: 15,
    backgroundColor: "#A4B2EE",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom:10
  },
  inputStyle:{
    fontSize:20
  },
  iconStyle:{
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  }
})

export default SearchBar