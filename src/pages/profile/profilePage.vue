<template>
  <div class="flex flex-col gap-6 w-full  rounded-md container">
   
    <HeaderPage class="mt-4" />
    
    <div class="w-full   mx-auto ">
     
      <div class="grid gap-4">
        <div class="grid ">
          <div class="grid">
            <AboutPage/>
          </div>
        </div>
       
            
            <!-- <cardCourseTeacher :detail="details"/> -->
            <Card  class="px-0 mb-4">
              <CardHeader class="font-medium">Courses</CardHeader>
              <CardContent class="">
              <tabCours/>
              </CardContent>
            </Card>

        </div>
    </div>
  </div>
</template>

<script>
import cardCourseTeacher from '@/components/cards/cardCourseTeacher.vue';
import { RouterLink } from 'vue-router'
import AboutPage from '@/components/profile/about.vue';
import blogCarousel from "@/components/carousel/blogCarrousel.vue";
import tabCours from '../../components/profile/tabCours.vue';
import Card from '../../components/ui/card/Card.vue';
import CardHeader from '../../components/ui/card/CardHeader.vue';
import CardContent from '../../components/ui/card/CardContent.vue';
import Avatar from '../../components/ui/avatar/Avatar.vue';
import {AvatarImage} from '../../components/ui/avatar';
import HeaderPage from '@/components/profile/header.vue';
import Accordion from '../../components/ui/accordion/Accordion.vue';
import AccordionContent from '../../components/ui/accordion/AccordionContent.vue';
import Label from '../../components/ui/label/Label.vue';
import AccordionTrigger from '../../components/ui/accordion/AccordionTrigger.vue';
import AccordionItem from '../../components/ui/accordion/AccordionItem.vue';

export default {
  name: "profilePage",
  components: {
    blogCarousel,
    cardCourseTeacher,
    AccordionContent,
    AccordionTrigger,
    Label,
    AboutPage,
    AccordionItem,
    Accordion,
    tabCours,
    Card,
    CardContent,
    CardHeader,
    Avatar,
    AvatarImage,
    HeaderPage
  },
  data() {
    return {
      selectedFilter: '',
      isModalOpen: false,
      searchQuery: '',
      details: [
        { title: "Detail 1", description: "Description 1", url: "http://example.com/1" },
        { title: "Detail 2", description: "Description 2", url: "http://example.com/2" },
        { title: "Detail 3", description: "Description 3", url: "http://example.com/3" },
      ]
    };
  },

};
</script>
