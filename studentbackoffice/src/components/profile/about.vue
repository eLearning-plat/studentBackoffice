<template>
    <div class="flex flex-col gap-6 w-full max-w-4xl mx-auto bg-purple-500">
      <header class="bg-gray-400 p-6 rounded-lg flex items-center gap-4">
        <Avatar icon="pi pi-user" class="w-16 h-16" size="xlarge" shape="circle" />
     
        <div class="grid gap-1">
          <h2 class="text-xl font-semibold">Acme User</h2>
          <p class="text-muted-foreground">
            Software Engineer at Acme Inc. Passionate about building innovative web applications.
          </p>
        </div>
      </header>
      <div class="grid md:grid-cols-2 gap-6">
        <Card class="md:col-span-2  border-black rounded-md">
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent class="grid gap-4">
            <div class="grid gap-1">
              <div class="text-sm font-medium">Location</div>
              <div>San Francisco, CA</div>
            </div>
            <div class="grid gap-1">
              <div class="text-sm font-medium">Job Title</div>
              <div>Software Engineer</div>
            </div>
            <div class="grid gap-1">
              <div class="text-sm font-medium">Skills</div>
              <div class="flex flex-wrap gap-2">
                <div>React</div>
                <div>Next.js</div>
                <div>TypeScript</div>
                <div>Tailwind CSS</div>
              </div>
            </div>
            <div class="grid gap-1">
              <div class="text-sm font-medium">Interests</div>
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
  </template>
<script>

export default {
    name : 'AboutPage'
}
</script>