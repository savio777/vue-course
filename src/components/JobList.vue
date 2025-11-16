<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import CardJob from './CardJob.vue';
import { fetchJobs } from '@/services';
import type { IJobs } from '@/services';
import { useToast } from 'vue-toastification';

const jobs = ref<IJobs[]>([]);
const isLoading = ref(false);
const toast = useToast();

defineProps({
    limit: {
        type: Number,
        default: 3
    },
    showAll: {
        type: Boolean,
        default: false
    },
    showFullDescription: {
        type: Boolean,
        default: false
    }
});

const getDataJobsList = async () => {
    try {
        isLoading.value = true;

        const response = await fetchJobs()

        jobs.value = response.data;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        toast.error('Error fetching jobs data.');
    } finally {
        isLoading.value = false;
    }
}

onMounted(() => {
    getDataJobsList();
})
</script>
<template>
    <div v-if="isLoading" class="text-center text-green-500 py-6">
        <PulseLoader />
    </div>

    <section v-if="!!jobs.length" class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Job Listing 1 -->
                <CardJob v-for="job in (showAll ? jobs : jobs.slice(0, limit))" :key="job.id" :job="job"
                    :show-full-description-param="showFullDescription" />
            </div>
        </div>
    </section>
</template>