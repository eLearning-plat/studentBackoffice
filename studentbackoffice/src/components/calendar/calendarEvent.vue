<template>
     <Card class="mt-4">
      <CardContent class="px-0">
        <div class="demo-app w-full flex flex-col md:flex-row">
       <div class="demo-app-main flex-grow p-4">
            <FullCalendar
              class="demo-app-calendar"
              :options="calendarOptions"
              ref="calendarRef"
              @calendarApi="setCalendarApi"
            >
              <template v-slot:eventContent="arg">
                <div>
                  <b>{{ arg.timeText }}</b>
                  <i>{{ arg.event.title }}</i>
                  <p>{{ arg.event.extendedProps.description }}</p>
                </div>
              </template>
            </FullCalendar>
          </div>
        </div>
        <EventEditModal
          :isOpen="isEditModalOpen"
          :currentEventDetails="currentEventDetails"
          @close="handleCloseEditModal"
          @update-event="handleUpdateEvent"
        />
      </CardContent>
    </Card>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, onMounted, watch, computed } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import EventCreationModal from "@/components/modal/EventCreationModal.vue";
import EventEditModal from "@/components/modal/EventEditModal.vue";
import CardContent from "../ui/card/CardContent.vue";
import Card from "../ui/card/Card.vue";

const store =useStore();
const todayStr = new Date().toISOString().split('T')[0];
const calendarOptions = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
  buttonText: {
    today: 'today',
    month: 'month',
    week: 'week',
    day: 'day',
    list: 'agenda'
  },
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
  },
  locale: 'en',
  dayNames: 'dayNames',
  monthNames: 'monthNames',
  initialView: 'dayGridMonth',
  editable: false,
  eventResizableFromStart: false,
  eventStartEditable: false,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  select: handleDateSelect,
  eventClick: handleEventClick,
  eventsSet: handleEvents,
});

const calendarRef = ref(null);
const currentEvents = ref([]);

const isModalOpen = ref(false);
const isEditModalOpen = ref(false);
const eventDetails = ref({});
const currentEventDetails = ref({});

function handleDateSelect(selectInfo) {
  eventDetails.value = {
    start: selectInfo.startStr,
    end: selectInfo.endStr,
 
  };
  isModalOpen.value = true;
}

function handleEventClick(clickInfo) {
  clickInfo.jsEvent.preventDefault();
  currentEventDetails.value = {
    id: clickInfo.event.id,
    title: clickInfo.event.title,
    start: clickInfo.event.startStr,
    end: clickInfo.event.endStr,
    url: clickInfo.event.url,
    allDay: clickInfo.event.allDay,
    description: clickInfo.event.extendedProps.description || ''
  };
  isEditModalOpen.value = true;
}

function handleEvents(events) {
  currentEvents.value = events;
}

function handleCloseModal() {
  isModalOpen.value = false;
}



function handleCloseEditModal() {
  isEditModalOpen.value = false;
}

function handleUpdateEvent(updatedEvent) {
  const event = calendarRef.value.getApi().getEventById(updatedEvent.id);
  event.setProp('title', updatedEvent.title);
  event.setStart(updatedEvent.start);
  event.setEnd(updatedEvent.end);
  event.setExtendedProp('description', updatedEvent.description);
  event.setAllDay(updatedEvent.allDay);
  isEditModalOpen.value = false;
}
const meetings = computed(() => store.state.meetings.meetings);
watch(
  meetings,
  (newMeetings) => {
    if (calendarRef.value) {
      const transformedMeetings = newMeetings.map((meeting) => ({
        id: meeting._id,
        title: meeting.title,
        start: meeting.date,
        end: meeting.endDate,
        url: meeting.url,
        extendedProps: {
          description: meeting.description || "No description provided",
        },
      }));

      const calendarApi = calendarRef.value.getApi();
      calendarApi.removeAllEvents();
      calendarApi.addEventSource(transformedMeetings);
    }
  },
  { immediate: true }
);
onMounted(async () => {
  try {
    await store.dispatch("meetings/fetchMeetings");
  } catch (error) {}
});
</script>

<style lang='css'>

.demo-app {
  display: flex;
  min-height: 100%;
  font-size: 14px;
}

.demo-app-sidebar-section {
  padding: 2em;
}

.demo-app-main {
  flex-grow: 1;
  padding: 1em;
}
.demo-app-calendar{
    height: 90vh;
  
}
.fc { 
  max-width: 1200px;
  margin: 0 auto;

}
.fc .fc-button-primary {
    background-color: white !important;
    color: #262626 !important;
    border-color:  #4e4e4f !important;
 
}
.fc .fc-button-group > .fc-button {
   box-shadow: none !important;
}
.fc .fc-button-primary:not(:disabled).fc-button-active, .fc .fc-button-primary:not(:disabled):active {
  
    box-shadow: none !important;
}
</style>
