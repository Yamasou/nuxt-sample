<template>
  <div>
    <div>hoge</div>
    <div>
      <button
        @click="countUp"
        >count up</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    countUp() {
      this.$store.commit("increment")
    }
  }
}
</script>
