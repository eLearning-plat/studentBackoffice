<script setup lang="js">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import {File} from "lucide-vue-next";


</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Course Details</CardTitle>
       <!--  <CardDescription>
      Fill in the details of the course you want to create.
      </CardDescription> -->
    </CardHeader>
    <CardContent>
      <div>
        <div class="mt-4 grid gap-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="rounded-md bg-muted p-2">
                <File class="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <div class="font-bold">HTML Fundamentals</div>
                <p class="text-sm text-muted-foreground">
                  Completed on May 15, 2023
                </p>
             
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              class=" border rounded-md px-4 py-2" 
               
            >
            Vue
            </Button>
      
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="rounded-md bg-muted p-2">
                <File class="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <div class="font-bold">CSS Fundamentals</div>
                <p class="text-sm text-muted-foreground">
                  Completed on May 22, 2023
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              class=" px-4 py-2 border rounded-md "
            >
            Vue
            </Button>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="rounded-md bg-muted p-2">
                <File class="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <div class="font-bold">JavaScript Fundamentals</div>
                <p class="text-sm text-muted-foreground">Not Updateed</p>
              </div>
            </div>
            <Button
              variant="outline"
              class=" px-4 py-2 border rounded-md "
              size="sm"
            >
              Vue
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
