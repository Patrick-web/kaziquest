<template>
  <div
    class="bg-[white] rounded w-full p-4 flex items-center mb-[20px] dark:bg-d-very-dark-desaturated-blue"
  >
    <div
      class="w-[25px] h-[25px] border-[1px] border-light-grayish-blue rounded-full mr-[20px] dark:border-d-very-dark-grayish-blue-dark"
    />
    <input
      v-model="todoText"
      @keyup.enter="createTodo"
      placeholder="Create a new todo..."
      class="h-full w-full outline-none text-very-dark-grayish-blue bg-transparent dark:text-[white] text-sm lg:text-base"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref } from "vue";
import { TodoInterface } from "..//types";

const todoText = ref("");

function createTodo() {
  const newTodoObj: TodoInterface = {
    id: Math.floor(Math.random() * 10000),
    text: todoText.value,
    isComplete: false,
  };
  emit("newTodo", newTodoObj);
  todoText.value = "";
}

const emit = defineEmits(["newTodo"]);

</script>
