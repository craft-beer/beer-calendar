import axios from 'axios'

export default {
  getRecord() {
    return axios.get('/api/record.json')
                .then(response => response.data)
                .catch(error => error)
  }
}
