<template>
     <div class="m-5">
      <header class="bg-background px-4 py-6 md:px-6 md:py-8">
        <div class="container mx-auto">
          
        </div>
      </header>
      <div class="container mx-auto my-8 md:my-12">
        <div class="flex flex-wrap justify-center gap-4 md:gap-6">
          <Button variant="outline" class="rounded-full px-4 py-2 text-sm text-blue-600 font-medium border-blue-600 border-2">
            Tous les cours
          </Button>
          <Button variant="outline" class="rounded-full px-4 py-2 text-sm font-medium text-green-600 border-green-600 border-2 ">
            Développement
          </Button>
          <Button variant="outline" class="rounded-full px-4 py-2 text-sm font-medium text-red-600 border-red-600 border-2">
            Design
          </Button>
          <Button variant="outline" class="rounded-full px-4 py-2 text-sm font-medium text-yellow-600 border-yellow-600 border-2 shadow-slate-50 ">
            Marketing
          </Button>
          <Button variant="outline" class="rounded-full px-4 py-2 text-sm font-medium text-orange-600 border-orange-600 border-2">
            Gestion
          </Button>
        </div>
      </div>
      <div class="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card class=" border-2 rounded-md border-gray-200 p-3 " >
          <img
            src=" @/assets/vuex.png"
            alt="Course Image"
            width={400}
            height={225}
            class="w-full rounded-t-lg object-cover"
          /> 
          <CardContent class="p-4 ">
            <h2 class="text-xl font-bold">Développement Web</h2>
            <p class="mt-2 text-muted-foreground">
              Apprenez les bases du développement web avec HTML, CSS et JavaScript.
            </p>
            <Button class="mt-4">S'inscrire</Button>
          </CardContent>
        </Card>
       
      </div>
    </div>
</template>