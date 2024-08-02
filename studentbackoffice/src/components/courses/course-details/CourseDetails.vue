<script  lang="js">
import { ref } from 'vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { File, Store } from "lucide-vue-next";
import { computed } from 'vue';
import { useStore } from "vuex";
import { onMounted } from 'vue';
import { mapActions,mapState } from 'vuex';

export default {
  components: {
    Card, CardContent, CardDescription, CardHeader, CardTitle ,Label,File, Store ,
    Input
  },
  props: {
    category: {
      type: String,
      required: true,
    },
    coursId: {
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
    ...mapActions('documents', ['addDocument','fetchDocuments']),
    viewDocument(fileUrl) {
      window.open(fileUrl, '_blank');
    },
    async loadDocuments() {
      try {
        console.log('this.coursId', this.coursId)
        const queryParams = {
          courseID: this.coursId,
        };
        console.log('Fetching documents with params:', queryParams);
        await this.fetchDocuments(queryParams);
      } catch (error) {
        console.error('Error loading documents:', error);
      }
    }
  },
  computed: {
  ...mapState('documents', ['documents']),
  filteredDocuments() {
    const query = this.searchQuery.toLowerCase();
    if (!query) {
      return this.documents;
    }
    
    return this.documents.filter(item =>
      item.title.toLowerCase().includes(query)
    );
  }
},
created() {
    this.loadDocuments();
  }
}
</script>
<template>
  <Card>
    <CardHeader>
        <CardTitle>Course Details</CardTitle>
    </CardHeader>
    <CardContent>
      <div>
        <div class="mt-4 grid gap-4">
          <div v-for="document in filteredDocuments" :key="document.id" class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="rounded-md bg-muted p-2">
                <File class="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <div class="font-bold">{{ document.title }}</div>
                <p class="text-sm text-muted-foreground">
                  Completed on {{ document.completedDate }}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              class="border rounded-md px-4 py-2"
               @click="viewDocument(document.file)"
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

