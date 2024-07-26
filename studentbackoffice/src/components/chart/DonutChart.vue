<script setup lang="js">
import DonutChart from '../ui/chart-donut/DonutChart.vue';

const data = [
  { name: ' Subscriptions ', AllCourses: Math.floor(Math.random() * 2000) + 500, Subscriptions: Math.floor(Math.random() * 2000) + 500 },
  { name: 'All Courses', AllCourses: Math.floor(Math.random() * 2000) + 500, Subscriptions: Math.floor(Math.random() * 2000) + 500 },
];

const colors = ['#ADD8E6', '#4682B4'];
</script>

<template>
  <DonutChart
    :data="data"
    index="name"
    category="AllCourses"
    :colors="colors"
  />
</template>
