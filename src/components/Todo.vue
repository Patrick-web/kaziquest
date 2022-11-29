<template>
  <li
    @click.stop="emit('toggleTodoState',todo.id)"
    class="group cursor-pointer todo relative border-b-[1px] border-light-grayish-blue p-4 flex justify-between gap-2 hover:bg-very-light-gray dark:border-d-very-dark-grayish-blue-dark dark:hover:bg-d-very-dark-grayish-blue-dark-hover"
  >
    <div class="w-[80%] flex">
      <button
        @click.stop="emit('toggleTodoState', todo.id)"
        :class="[
          todo.isComplete
            ? 'gradient-bg'
            : 'border-[1px] border-light-grayish-blue dark:border-d-very-dark-grayish-blue-dark',
        'toggle-btn min-w-[25px] h-[25px] rounded-full mr-[20px] flex items-center justify-center hover:border-[white]',
        ]"
        :aria-label="
          todo.isComplete ? 'Mark todo as not done' : 'Mark todo is done'
        "
      >
        <img
          v-if="todo.isComplete"
          src="../assets/icons/ICON-CHECK.svg"
          alt="check icon"
        />
      </button>
      <p
        :class="[
          todo.isComplete ? 'line-through opacity-50' : '',
          'text-very-dark-grayish-blue dark:text-light-grayish-blue text-sm lg:text-base min-w-[50%]',
        ]"
      >
        {{ todo.text }}
      </p>
    </div>
    <button
      @click.stop="emit('deleteTodo', todo.id)"
      aria-label="Delete Todo"
      class="delete-btn w-[15px] block lg:hidden lg:group-hover:block hover:brightness-100"
    >
      <img
        class="w-full"
        src="../assets/icons/ICON-CROSS.svg"
        alt="cross icon"
      />
    </button>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { TodoInterface } from "..//types";

defineProps<{
  todo: TodoInterface;
}>();

const emit  = defineEmits<{
  toggleTodoState: (id: number) => void;
  deleteTodo: (id: number) => void;
}>();

</script>
