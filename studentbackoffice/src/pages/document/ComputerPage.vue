<template>
  <div class="container my-4">
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
      
      </header>
    <Card class="mt-3">
      <CardContent>
    <div class="flex flex-col min-h-[100dvh] bg-background mt-2 w-full">
     
      <main class="flex-1  p-3 mt-3">
       
       <div class=" w-full mx-auto grid gap-8">
         
         <div class="grid gap-4">
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-2">
             <cardsDocument 
             v-for="(document, index) in localDocuments"
             :key="index"
             :document="document"/>
            
           </div>
         </div>
    
       </div>
       <footer> <paginaTion/></footer>
     
     </main>
     
   </div></CardContent></Card>
 </div>
</template>

<script>
import BreadCrumb from '../../components/bread-crumb/BreadCrumb.vue'
import {
  ChevronLeft,
  Search
} from 'lucide-vue-next'
import ModalAddDocument from "@/components/modal/modalAddDocument.vue";
import cardsDocument from '@/components/cards/cardsDocument.vue';
import paginaTion from '@/components/pagination/paginaTion.vue';
import CardContent from '../../components/ui/card/CardContent.vue';
import Card from '../../components/ui/card/Card.vue';
import Input from '../../components/ui/input/Input.vue';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'ComputerPage',
  components: {
    cardsDocument,
    paginaTion,
    ModalAddDocument,
    CardContent,
    Card,
    Input, ChevronLeft,
    Search,BreadCrumb
  },
  data() {
    return {
      searchQuery: '',
      isModalOpen: false,
      rows: 100,   
      localDocuments: [] ,  
      page:'Document > Computer',
      links:[
    {
        id: 1,
        title: 'Student Space',
        link: '',
    }
],
      perPage: 1,   
      currentPage: 5,
      items: [
        { label: "Document" }
      ],
      home: {
        icon: "pi pi-home",
        to: "/"
      }
    };
  },
  methods: {  
     ...mapActions('documents', ['fetchDocuments']),
    async loadDocuments() {
      try {
        const queryParams = {
          categoryID: 'sonna',
        }; 
        console.log('Fetching documents with params:', queryParams);
        await this.fetchDocuments(queryParams);
        this.localDocuments = this.$store.state.documents.documents;
        console.log('local doc',this.localDocuments)

      } catch (error) {
        console.error('Error loading documents:', error);
      }
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    addCourse() {
    
      this.closeModal();
    }
  },
  created() {
    this.loadDocuments();
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
