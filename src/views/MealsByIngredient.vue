<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">
            Meals for {{ ingredient.strIngredient }}
        </h1>
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
import store from "../store";
import { onMounted } from "vue";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue"

const route = useRoute();
const ingredient = computed(() => store.state.ingredient)
const meals = computed(() => store.state.mealsByIngredients)

onMounted(() => {
    store.dispatch('serachMealsByIngredients', route.params.ingredient)
})
</script>
