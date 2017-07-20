<template>
  <div class="container">
    cal
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as types from '../../store/types'

export default {

  computed: mapState([
    'record'
  ]),

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      if (!this.$store.state.record.content.length) {
        this.$store.dispatch({
          type: types.FETCH_RECORD
        })
      }
    }
  }
}
</script>

<style>
  
</style>
