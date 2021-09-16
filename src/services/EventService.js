import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage, page) {
    return apiClient.get('/auctionitems?_limit=' + perPage + '&_page=' + page)
  },
  //Added new call
  getEvent(id) {
    return apiClient.get('/auctionitems/' + id)
  },
  saveEvent(event) {
    return apiClient.post('/auctionitems', event)
  },
  getEventByKeyword(keyword, perPage, page) {
    return apiClient.get(
      'auctionitems?_limit=' + perPage + '&_page=' + page + '&description=' + keyword
    )
  }
}
