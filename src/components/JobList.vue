<script lang="ts" setup>
import { ref } from 'vue'
import jobsData from '@/jobs-mock2.json';
import CardJob from './CardJob.vue';

const jobs = ref(jobsData);

defineProps({
    limit: {
        type: Number,
        default: 3
    },
    showAll: {
        type: Boolean,
        default: false
    }
});
</script>
<template>
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Job Listing 1 -->
                <CardJob v-for="job in (showAll ? jobs : jobs.slice(0, limit))" :key="job.id" :job="job" />
            </div>
        </div>
    </section>
</template>