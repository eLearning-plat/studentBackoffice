<template>
  <div class="flex flex-col gap-6 w-full m-3 rounded-md">
    <header class="bg-gray-100 m-3 p-6 rounded-lg flex items-center gap-4">
      <!-- <Avatar icon="pi pi-user" class="w-16 h-16" size="xlarge" shape="circle" /> -->
      <Avatar 
      src="./logo.svg" label='user'  class="mr-2 p-2"
  size="xlarge"
/>

      <div class="grid gap-1 mt-4">
        <h2 class="text-xl font-semibold">Acme User</h2>
        <p class="text-muted-foreground">Software Engineer</p>
      </div>
    </header>
    <div class="flex flex-wrap w-full">
  <!-- Partie 2/3 -->
  <div class="w-full md:w-2/3 p-3">
    <div class="p-4 border-gray-200 border-2 rounded-md">
      <Card class="md:col-span-1">
        <CardHeader>
          <CardTitle><h4 class="text-red-500">About</h4></CardTitle>
          <div>student ...</div>
        </CardHeader>
        <CardContent class="grid gap-4">
          <div class="grid gap-1">
            <div class="text-sm font-medium text-sky-400">Location</div>
            <div>San Francisco, CA</div>
          </div>
          <div class="grid gap-1">
            <div class="text-sm font-medium text-sky-400">Job Title</div>
            <div>Software Engineer</div>
          </div>
          <div class="grid gap-1">
            <div class="text-sm font-medium text-sky-400">date of birth</div>
            <div>05-12-1998</div>
          </div>
          <div class="grid gap-1">
            <div class="text-sm font-medium text-sky-400">Skills</div>
            <div class="flex flex-wrap gap-2">
              <div>React</div>
              <div>Next.js</div>
              <div>TypeScript</div>
              <div>Tailwind CSS</div>
            </div>
          </div>
          <div class="grid gap-1">
            <div class="text-sm font-medium text-sky-400">Interests</div>
            <div class="flex flex-wrap gap-2">
              <div>Web Development</div>
              <div>Open Source</div>
              <div>Design</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>

  <!-- Partie 1/3 -->
  <div class="w-full md:w-1/3 p-3">
    <div class="p-4 border-gray-200 border-2 rounded-md">
      <Card class="md:col-span-1">
        <CardHeader>
          <CardTitle><h4 class="text-red-500">Document</h4></CardTitle>    
        </CardHeader>
        <CardContent class="grid gap-4">
          <div class="flex flex-wrap  items-center gap-4 w-full">
            <Avatar icon="pi-clone" class="w-12 shrink-0 rounded" size="large" />
            <!-- <img class="w-12 shrink-0 rounded" :src="./assets/logo.svg" :alt="option.name" /> -->
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">option.name </span>
                <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]"> option.category </span>
            </div>
           
        </div>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <Avatar icon="pi pi-clone" class="w-12 shrink-0 rounded" size="large" />
            <!-- <img class="w-12 shrink-0 rounded" :src="./assets/logo.svg" :alt="option.name" /> -->
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">option.name </span>
                <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]"> option.category </span>
            </div>
           
        </div>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <Avatar icon="pi pi-clone" class="w-12 shrink-0 rounded" size="large" />
            <!-- <img class="w-12 shrink-0 rounded" :src="./assets/logo.svg" :alt="option.name" /> -->
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">option.name </span>
                <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]"> option.category </span>
            </div>
           
        </div>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <Avatar icon="pi pi-clone" class="w-12 shrink-0 rounded" size="large" />
            <!-- <img class="w-12 shrink-0 rounded" :src="./assets/logo.svg" :alt="option.name" /> -->
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">option.name </span>
                <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]"> option.category </span>
            </div>
           
        </div>
        <div class="flex flex-wrap  items-center gap-4 w-full">
            <Avatar icon="pi pi-clone" class="w-12 shrink-0 rounded" size="large" />
            <!-- <img class="w-12 shrink-0 rounded" :src="./assets/logo.svg" :alt="option.name" /> -->
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">option.name </span>
                <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]"> option.category </span>
            </div>
           
        </div>
        </CardContent>
      </Card>
    </div>
  </div>
</div>


  </div>
</template>

<script setup>
import Avatar from "primevue/avatar";


</script>
