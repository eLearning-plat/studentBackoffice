<template>
  <header class="sticky mt-3 top-0 z-30 border-b bg-background px-4 sm:static sm:border-0 sm:bg-transparent sm:px-6">
    <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
      <div class="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4">
        <div class="relative flex-grow sm:flex-grow-0 w-full sm:w-auto">
          <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            v-model="searchQuery"
            type="search"
            placeholder="Search..."
            class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
      
      </div>
    </div>
   
  </header>
</template>

<script>
import Input from '../ui/input/Input.vue'
import { ChevronLeft, Search } from 'lucide-vue-next'
import { mapActions,mapState } from 'vuex';

export default {
  components: {
    
    ChevronLeft,
    Search,
    Input
  },
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: '',
      isModalOpen: false,
      rows: 100,
      perPage: 1,
      currentPage: 5,
    };
  },
  methods: {
    ...mapActions('documents'),

  },
  computed: {
    ...mapState('documents', ['documents']),
    filteredItems() {
      const query = this.searchQuery.toLowerCase();
      return this.details.filter(item =>
        item.title.toLowerCase().includes(query) &&
        (this.selectedFilter === '' || item.category === this.selectedFilter)
      );
    }
  }
}
</script>

