<script setup>
import AppBar from "./components/app-bar/AppBar.vue";
import SideBar from "./components/side-bar/SideBar.vue";
</script>

<template>
  <AppBar />
  <div class="w-full h-screen flex flex-row">
    <div class="h-lvh hidden sm:block">
      <SideBar />
    </div>
    <router-view  />
  </div>
</template>
