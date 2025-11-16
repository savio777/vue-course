<script setup lang="ts">
import { defineProps, ref } from 'vue'
import JobList from '@/components/JobList.vue';
defineProps({
    title: {
        type: String,
        default: 'Become a Vue Dev'
    },
    subtitle: {
        type: String,
        default: 'Find the Vue job that fits your skills and needs'
    }
})

const showAllJobs = ref(false);
</script>

<template>
    <!-- Hero -->
    <section class="bg-green-700 py-20 mb-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div class="text-center">
                <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                    {{ title }}
                </h1>
                <p class="my-4 text-xl text-white">
                    {{ subtitle }}
                </p>
            </div>
        </div>
    </section>

    <!-- Developers and Employers -->
    <section class="py-4">
        <div class="container-xl lg:container m-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-bold">For Developers</h2>
                    <p class="mt-2 mb-4">
                        Browse our Vue jobs and start your career today
                    </p>
                    <a href="jobs.html" class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                        Browse Jobs
                    </a>
                </div>
                <div class="bg-green-100 p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-bold">For Employers</h2>
                    <p class="mt-2 mb-4">
                        List your job to find the perfect developer for the role
                    </p>
                    <a href="add-job.html"
                        class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600">
                        Add Job
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Browse Jobs -->
    <JobList :showAll="showAllJobs" />

    <section v-if="!showAllJobs" class="m-auto max-w-lg my-10 px-6 flex justify-center items-center">
        <button @click="showAllJobs = true"
            class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Jobs</button>
    </section>

</template>