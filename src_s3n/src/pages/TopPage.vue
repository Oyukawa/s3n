<script setup lang="ts">
import TopVideo from '@/components/TopVideo.vue';
import TopImg from '@/components/TopImg.vue';
import TopAbout from '@/components/TopAbout.vue';
</script>

<template>
  <v-container class="container">
    <v-row justify="center" no-gutters v-if="$vuetify.display?.mdAndUp">
      <v-col cols="auto" v-for="(item, i) in 3" :key="i">
        <TopVideo />
      </v-col>
    </v-row>
    <v-row justify="center" v-if="$vuetify.display?.smAndDown">
      <v-col cols="auto"> <TopImg /> </v-col>
    </v-row>
    <v-row justify="center" dense>
      <v-col cols="auto" class="fontBold"> I am a Frontend Developer </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="auto" class="text-grey-darken-1"> Scroll </v-col>
    </v-row>
    <v-row justify="center" style="margin-bottom: 10rem">
      <v-col cols="auto" class="vertical-progress">
        <v-progress-linear :height="3" rounded="true" color="grey-lighten-1" indeterminate />
      </v-col>
    </v-row>
  </v-container>
  <v-container class="area">
    <v-row justify="center">
      <v-col cols="auto"> <TopAbout /></v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.container {
  scroll-snap-type: y mandatory;
  height: 100vh;
}
.area {
  scroll-snap-align: start;
  height: 100vh;
}

.vertical-progress {
  transform: rotate(90deg);
  width: 65px;
}
</style>
