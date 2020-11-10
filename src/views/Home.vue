<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换页面到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    handleClick(type) {
      if (type === "back") {
        // 返回上一页
        // this.$router.back()
        this.$router.go(-1)
        // 下一页
        // this.$router.go(1)
      } else if (type === "push") {
        // 可以用路径跳转也可以用命名路由跳转
        // 1.路径跳转
        // this.$router.push("/parent")
        // 2.命名跳转
        this.$router.push({
          // 根据命名路由进行跳转
          name: "parent",
          // 根据路径进行跳转 使用这种方式下面的params方法将会失效
          // path: `/patent/${'long'}/${'22'}`, 
          // 参数传递以路径的形式 路由的path必须为'/???/:name'的格式才能进行跳转
          params:{
            name: 'long',
            age: '22'
          }
          // 参数传递以？的形式
          // query: {
          //   name: "long"
          // }
        })
      } else if (type === "replace") {
        // 故名思意就是把当前页面替换，并不进行路由跳转
        this.$router.replace({
          name: "parent"
        })
      }
    }
  }
};
</script>
