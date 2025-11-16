<script setup lang="ts">
import AddJobForm from '@/components/AddJobForm.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const id = route.params.id as string;
</script>
<template>
    <AddJobForm variant="edit" :id="id" />
</template>