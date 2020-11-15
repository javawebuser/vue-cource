<template>
  <!-- 动态路由调用路由中的值 -->
  <div>{{ name }}</div>
</template>

<script>
export default {
  //
  props: {
    name: {
      type: String,
      default: "**"
    }
  },
  // 动态路由 当页面不变更只动态的改变参数userName时，beforeRouteUpdate便会触发
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
    next()
  }
}
</script>
