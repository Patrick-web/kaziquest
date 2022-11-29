<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { Sortable } from "sortablejs-vue3";

import { FilterOption, TodoInterface } from "./types";

import Todo from "./components/Todo.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoForm from "./components/TodoForm.vue";

const darkTheme = ref(false);

function toggleDarkMode() {
  darkTheme.value = !darkTheme.value;
localStorage.setItem("darkTheme", darkTheme.value.toString());
}

const todos = ref<TodoInterface[]>([]);

function addTodo(todo: TodoInterface) {
  todos.value.push(todo);
  syncToLocalStorage()
}


function toggleTodoState(id: number) {
  const index = todos.value.findIndex((todo) => todo.id === id);
  todos.value[index].isComplete = !todos.value[index].isComplete;
  syncToLocalStorage()
}
function deleteTodo(id: number) {
  todos.value = todos.value.filter((todo) => todo.id != id);
  syncToLocalStorage()
}

function deleteCompletedTodos() {
  todos.value = todos.value.filter((todo) => !todo.isComplete);
  syncToLocalStorage()
}

function syncToLocalStorage(){
localStorage.setItem("todos", JSON.stringify(todos.value));
}

function restoreTodosFromLocalStorage() {
  const todosFromLocalStorage = localStorage.getItem("todos");
  if (todosFromLocalStorage) {
    todos.value = JSON.parse(todosFromLocalStorage);
  }
}


const activeFilter = ref<FilterOption>("All");

const filteredTodos = computed(() => {
  switch (activeFilter.value) {
    case "All":
      return todos.value;
    case "Completed":
      return todos.value.filter((todo) => todo.isComplete);
    case "Active":
      return todos.value.filter((todo) => !todo.isComplete);
    default:
      return todos.value;
  }
});

onMounted(() => {
  //Check if dark theme was enabled and restore it
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode) {
    darkTheme.value = JSON.parse(darkMode);
  } else {
    //Check if system preferences prefers dark mode
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      darkTheme.value = true;
    } else {
      darkTheme.value = false;
    }
  }
  restoreTodosFromLocalStorage();
});
</script>

<template>
  <div :class="[darkTheme ? 'dark' : 'light', 'relative w-full h-[100vh]']">
    <TodoHeader />
    <div class="w-full h-full dark:bg-d-very-dark-blue overflow-y-scroll">
      <div class="relative z-10 w-[90%] lg:w-[45%] mx-auto">
        <div class="flex items-center justify-between py-[50px]">
          <h1 class="text-[white] tracking-widest text-2xl font-bold">TODO</h1>
          <button @click="toggleDarkMode" aria-label="toggle dark mode" id="darkToggle">
            <img
              class="dark:hidden"
              src="./assets/icons/ICON-MOON.SVG"
              alt="moon icon"
            />
            <img
              class="hidden dark:block"
              src="./assets/icons/ICON-SUN.SVG"
              alt="sun icon"
            />
          </button>
        </div>
        <TodoForm v-on:newTodo="addTodo" />
        <div
          class="relative bg-[white] rounded shadow-lg dark:bg-d-very-dark-desaturated-blue"
        >
          <ul class="overflow-hidden rounded">
            <Sortable :list="filteredTodos">
              <template #item="{ element }">
                <Todo
                  :todo="element"
                  v-on:toggleTodoState="toggleTodoState"
                  v-on:deleteTodo="deleteTodo"
                  :key="element.id"
                />
              </template>
            </Sortable>
            <p
              v-if="filteredTodos.length === 0 && todos.length > 0"
              class="text-very-dark-grayish-blue dark:text-[white] text-center text-sm p-2"
            >
              No Items to show
            </p>
          </ul>
            <TodoFooter
              :remainingTodos="todos.filter((todo) => !todo.isComplete).length"
              :activeFilter="activeFilter"
              :setFilter="(filter) => (activeFilter = filter)"
              :deleteCompletedTodos="deleteCompletedTodos"
            />
        </div>
        <p
          class="text-dark-grayish-blue dark:text-d-dark-grayish-blue text-center text-sm mt-[90px] lg:mt-8"
        >
          Drag and Drop to Reorder List
        </p>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.gradient-bg {
  background: linear-gradient(150deg, cyan, purple);
}
</style>
