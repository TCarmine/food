import axios from "axios"

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:"Bearer ZgZDr2QY27_c4GHy96FqK8k8h_xxJET7ZUAJBw2qR9HOSHgIlcCPP0t32l3ZHbKBV0dJzmmXvpE0z810EbMT-1IRyO172CJSviiW4tAm1Vu4gUuSRxajHPQaFhWSYXYx"
  }
})

