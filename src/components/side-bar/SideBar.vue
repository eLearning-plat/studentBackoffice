<template>
  <Menu :model="items" class="w-full h-full md:w-[15rem]">
    <template #submenuheader="{ item }">
      <span class="text-blue-500 font-bold leading-none">{{ item.label }}</span>
    </template>
    <template #item="{ item, props }">
      <a v-ripple class="flex items-center" v-bind="props.action" @click="navigateToPage(item.label)">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
      </a>
    </template>
  </Menu>
</template>

<script setup>
import Menu from "primevue/menu";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter(); // Use the useRouter hook to access the router instance

// Method to navigate based on the item's label
function navigateToPage(label) {
  const path = `/${label.toLowerCase()}`; // Convert label to lowercase and prepend with '/'
  router.push(path); // Use Vue Router's push method to navigate
}

const items = ref([
  {
    separator: true,
  },
  {
    label: "Management",
    items: [
      {
        label: "Students",
        icon: "pi pi-graduation-cap",
      },
      {
        label: "Teachers",
        icon: "pi pi-user",
      },
      {
        label: "Courses",
        icon: "pi pi-book",
      },
    ],
  },
  {
    label: "Website",
    items: [
      {
        label: "Informations",
        icon: "pi pi-info-circle",
      },
      {
        label: "News",
        icon: "pi pi-megaphone",
      },
      {
        label: "Corners",
        icon: "pi pi-box",
      },
      {
        label: "Blog",
        icon: "pi pi-pen-to-square",
      },
    ],
  },
  {
    label: "Community",
    items: [
      {
        label: "Messages",
        icon: "pi pi-envelope",
      },
      {
        label: "Charity",
        icon: "pi pi-wallet",
      }
    ],
  },
  {
    separator: true,
  },
]);
</script>
