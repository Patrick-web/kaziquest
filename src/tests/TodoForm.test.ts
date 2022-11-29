import { mount } from "@vue/test-utils";
import App from "../App.vue";
import TodoForm from "../components/TodoForm.vue";

test("TodoForm emits new todo", () => {
  const wrapper = mount(TodoForm);
  const input = wrapper.find("input");
  input.setValue("New todo");
  input.trigger("keyup.enter");
  expect(wrapper.emitted()).toHaveProperty("newTodo");
});

test("TodoForm emits new todo with correct properties", () => {
  const wrapper = mount(TodoForm);
  const input = wrapper.find("input");
  input.setValue("New todo");
  input.trigger("keyup.enter");
  expect(wrapper.emitted("newTodo")[0][0]).toHaveProperty("id");
  expect(wrapper.emitted("newTodo")[0][0]).toHaveProperty("text");
  expect(wrapper.emitted("newTodo")[0][0]).toHaveProperty("isComplete");
});

//test new todo is added to todos array
test("New todo is added to todos array", () => {
  const wrapper = mount(App);
  const input = wrapper.find("input");
  input.setValue("New todo");
  input.trigger("keyup.enter");
  // console.log(wra);
  setTimeout(() => {
    expect(wrapper.todos.length).toBe(1);
    // expect(wrapper.findAll(".todo")).toHaveLength(1);
  }, 100);
});
