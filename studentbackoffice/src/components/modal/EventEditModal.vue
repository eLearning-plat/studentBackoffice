<template>
    <div v-if="isOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg w-2/4 p-6 relative">
        <button @click="handleClose" class="absolute font-bold right-6 text-gray-600 hover:text-gray-900">
          &times;
        </button>
        
        <h2 class="text-xl font-semibold text-blue-600">{{$t('Detail Event')}}</h2>
        
        <form @submit.prevent="handleClose">
          <div class="mb-4">
         
            <h2>Event Title</h2>
            {{ currentEventDetails.title }}
          </div>
          <div class="mb-4">
          
            <p>Description</p>
            {{currentEventDetails.description}}
          </div>
          <div class="mb-4">
         
            <div>start date</div>
            {{ formattedStart }}
          </div>
          <div class="mb-4">
          
            <div>end date</div>
            {{ formattedEnd }}
          </div>
          <div>
            <a :href="currentEventDetails.url">{{currentEventDetails.url}}</a>
          </div>
          
          <div class="flex justify-end">
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {{$t('Close')}}
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  
import { ref, computed, defineProps, defineEmits } from 'vue';
  const props = defineProps({
    isOpen: Boolean,
    currentEventDetails: Object
  });
  
  const emits = defineEmits(['close', 'update-event']);
  
  function handleClose() {
    emits('close');
  }
  
  function handleUpdateEvent() {
    emits('update-event', props.currentEventDetails);
  }
  
function formatDateForInput(date) {
  if (!date) return '';
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
const formattedStart = computed(() => formatDateForInput(props.currentEventDetails.start));

const formattedEnd = computed(() => formatDateForInput(props.currentEventDetails.end));
  </script>
  