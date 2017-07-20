import API from '../../api/record'
import * as types from '../types'

const state = {
  content: [
    // {
    //   name: 'gim',
    //   age: 33
    // }
  ],
}

const getters = {
}

const actions = {
  [types.FETCH_RECORD] (context) {
    API.getRecord()
      .then(record => {
        context.commit(types.RECEIVE_RECORD, { record })
      })
  }
}

const mutations = {
  [types.RECEIVE_RECORD] (state, { record }) {
    state.content = record.content
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
