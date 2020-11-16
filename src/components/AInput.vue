<template>
  <input @input="hondleInput" :value="value"/>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value: {
      type: [String,Number],
      default: ''
    }
  },
  methods: {
    hondleInput (event) {
      const value = event.target.value
      this.$emit('input', value)
    }
  }
}
</script>
