<template>
  <div class="container ">
    <header class="sticky  mt-3 top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <BreadCrumb :links="links" :page="page" />
        <div class="relative ml-auto flex-1 md:grow-0">
          <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input   v-model="searchQuery"
            type="search"
            placeholder="Search..."
            class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <Select v-model="selectedFilter" class="w-full sm:w-auto">
            <SelectTrigger class="w-[180px] border border-gray-300 rounded-md">
              <SelectValue :placeholder="$t('All courses')" />
            </SelectTrigger>
            <SelectContent class="z-10 absolute mt-2 w-[180px] bg-white border border-gray-300 rounded-md">
              <SelectGroup>
            
                <SelectItem value="all-courses">{{ $t('All courses') }}</SelectItem>
                <SelectItem value="Quranic Recitation Tajwid">{{ $t('Quranic Recitation Tajwid') }}</SelectItem>
                <SelectItem value="Sona">{{ $t('Sona') }}</SelectItem>
                <SelectItem value="Arabic Language">{{ $t('Arabic Language') }}</SelectItem>
                <SelectItem value="English Language">{{ $t('English Language') }}</SelectItem>
                <SelectItem value="Computer">{{ $t('Computer') }}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
      </header>
    <!-- <Card class="p-3 mt-2"> -->
      <div>
        <div class="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          <!-- Select Component -->
      
          <div class="flex">
          
          </div>
        </div>
      </div>
      <div>
        <CardContent class="grid grid-cols-1 mt-2 px-0 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <cardCourseTeacher
            v-for="(detail, index) in filteredItems"
            :key="index"
            :detail="detail"
            @go-to-details="goToDetails"
          />
        </CardContent>
        <div class="flex justify-end">
          <paginaTion />
        </div>
      </div>
    <!-- </Card> -->
  </div>
</template>

<script>
import {
  ChevronLeft,
  Search
} from 'lucide-vue-next'
import ModalAddCourses from '@/components/modal/modalAddCourses.vue';
import cardCourseTeacher from '@/components/cards/cardCourseTeacher.vue';
import paginaTion from '@/components/pagination/paginaTion.vue';
import Card from '../../components/ui/card/Card.vue';
import CardContent from '../../components/ui/card/CardContent.vue';
import Input from '../../components/ui/input/Input.vue';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '../../components/ui/select';
import BreadCrumb from '../../components/bread-crumb/BreadCrumb.vue';
export default {
  name: 'CoursePage',
  components: {
    cardCourseTeacher,
    ModalAddCourses,
    paginaTion,
    BreadCrumb,
    Card,
    CardContent,
    Input, ChevronLeft,
    Search,
    Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem
  },
  data() {
    return {
      selectedFilter: '',
      isModalOpen: false,
      searchQuery: '',
      page:'Courses',
      links:[
    {
        id: 1,
        title: 'Student Space',
        link: '',
    }
],
      details: [
        { title: "Nest", description: "Learn the fundamentals of nest", url: "http://example.com/1", category: "Programming" },
        { title: "React", description: "Learn the fundamentals of react", url: "http://example.com/2", category: "Programming" },
        { title: "Vue", description: "Learn the fundamentals of vue", url: "http://example.com/3", category: "Programming" },
      ]
    };
  },
  methods: {
    goToDetails() {
      this.$router.push('/courseDetails');
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    addCourse() {
      // Logic to add course
      this.closeModal();
    }
  },
  computed: {
    filteredItems() {
      const query = this.searchQuery.toLowerCase();
      return this.details.filter(item => 
        item.title.toLowerCase().includes(query) &&
        (this.selectedFilter === '' || item.category === this.selectedFilter)
      );
    }
  }
};
</script>

<style scoped>
/* Ensure the SelectContent is visible */
.SelectContent {
  position: absolute;
  z-index: 10;
  background: white;
  border: 1px solid gray;
  border-radius: 0.375rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
}
</style>
