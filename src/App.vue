<template>
  <v-app>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-app>
</template>x`

<script>
export default {
  name: "App",

  components: {},

  data: () => ({})
};
</script>

<style>
.centered {
  text-align: center;
  margin: 0 auto;
  width: 80%;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-leave-active {
  transition: opacity 0.5s ease;
  opacity: 0;
}
</style>
