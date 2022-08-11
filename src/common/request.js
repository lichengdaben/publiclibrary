import axios from 'axios'
//  const BASE_URL = 'http://192.168.50.117:3000'
// const BASE_URL = 'http://183.6.57.236:30000'
const BASE_URL = '/api'

// create an axios instance
const service = axios.create({
  baseURL: BASE_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})


export default service