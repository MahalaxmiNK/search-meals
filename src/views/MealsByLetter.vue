<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
    </div>
    <div class="flex flex-wrap gap-3 justify-center px-8 mb-6">
        <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="w-2 h-2 flex items-center justify-center hover:text-orange-500 transition-all hover:scale-150"
        >
        {{ letter }}</router-link
        >
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
import store from "../store";
import { ref, onMounted, watch } from "vue";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("serachMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("serachMealsByLetter", route.params.letter);
});
</script>
