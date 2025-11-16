<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router'

import logo from '@/assets/logo.png';

const router = useRouter();

const screensBlacklist = ['NotFound', 'JobDetails'];

const screens = computed(() =>
    router.getRoutes()
        .filter(r => !screensBlacklist.includes(r.name as string))
        .map(r => ({
            name: (r.name ?? r.path) as string,
            path: r.path,
            focused: router.currentRoute.value.path === r.path
        }))
);
</script>

<template>
    <nav class="bg-green-700 border-b border-green-500">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center justify-between">
                <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <!-- Logo -->
                    <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
                        <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
                        <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
                    </RouterLink>
                    <div class="md:ml-auto">
                        <div class="flex space-x-2">
                            <RouterLink v-for="screen in screens" :key="screen.name" :to="screen.path" :class="screen.focused ?
                                'text-white bg-green-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' :
                                'text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2'">
                                {{ screen.name }}
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>