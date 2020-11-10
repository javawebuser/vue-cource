<template>
  <div>
    I am parent
    {{ $route.params.name }}
    {{ $route.params.age }}
    <router-view/>
  </div>
</template>

<script>
export default {}
</script>
