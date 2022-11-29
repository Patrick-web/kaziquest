<template>
  <div class="flex justify-between p-4">
    <p class="text-dark-grayish-blue text-sm">
      {{ remainingTodos }} items left
    </p>
    <div
      class="absolute lg:relative w-full lg:w-auto flex gap-4 justify-center p-3 shadow-xl lg:shadow-none lg:p-0 bottom-0 left-[50%] translate-y-[140%] translate-x-[-50%] lg:translate-y-[0%] lg:translate-x-[0%] lg:left-0 rounded bg-[white] dark:bg-d-very-dark-desaturated-blue"
    >
      <button
        @click="setFilter('All')"
        aria-label="Show all Todos"
        :class="[
          activeFilter == 'All'
            ? 'text-link-active'
            : 'text-dark-grayish-blue dark:text-d-dark-grayish-blue hover:text-d-very-dark-blue dark:hover:text-[white]',
          'text-sm',
        ]"
      >
        All
      </button>
      <button
        @click="setFilter('Active')"
        aria-label="Show Active Todos Only"
        :class="[
          activeFilter == 'Active'
            ? 'text-link-active'
            : 'text-dark-grayish-blue dark:text-d-dark-grayish-blue hover:text-d-very-dark-blue dark:hover:text-[white]',
          'text-sm',
        ]"
      >
        Active
      </button>
      <button
        @click="setFilter('Completed')"
        aria-label="Show Completed Todos Only"
        :class="[
          activeFilter == 'Completed'
            ? 'text-link-active'
            : 'text-dark-grayish-blue dark:text-d-dark-grayish-blue hover:text-d-very-dark-blue dark:hover:text-[white]',
          'text-sm',
        ]"
      >
        Completed
      </button>
    </div>
    <button
      @click="deleteCompletedTodos"
      aria-label="Delete Completed Todos"
      class="text-dark-grayish-blue text-sm hover:text-d-very-dark-blue dark:hover:text-[white]"
    >
      Clear Completed
    </button>
  </div>
</template>

<script lang="ts" setup>
import { FilterOption } from "../types";
import { defineProps } from "vue";

defineProps<{
  remainingTodos: number;
  activeFilter: FilterOption;
  setFilter: (filter: FilterOption) => void;
  deleteCompletedTodos: () => void;
}>();
</script>
