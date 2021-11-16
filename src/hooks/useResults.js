import { useEffect, useState } from "react"
import yelp from "../api/yelp"


export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  const searchApi = async (searchTerm) => {
    try{
      const response  = await yelp.get("/search", {
        params:{
          limit: 50,
          term: searchTerm,
          location: "milano" 
        }
      })
      setResults(response.data.businesses)   // JSON
      } catch (err){
        setErrorMessage("Some error")
      }
  }   
  
  // Call searchApi wehn component is first rendered
  useEffect(()=> {
    searchApi("napoli")
  },[])

  return [searchApi, results, errorMessage]
}