import Axios from 'axios'

let apiUrl

const apiUrls = {
  production: 'https://salty-taiga-76954.herokuapp.com/',
  development: 'https://salty-taiga-76954.herokuapp.com/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = Axios.create({
  baseURL: apiUrl,
})

export default api