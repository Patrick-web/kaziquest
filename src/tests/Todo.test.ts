import { mount } from "@vue/test-utils";
import Todo from "../components/Todo.vue";

test("Todo emits toggle event", () => {
  const wrapper = mount(Todo, {
    props: {
      todo: { id: 1, text: "Todo", isComplete: false },
    },
  });
  const toggleBtn = wrapper.find(".toggle-btn");
  toggleBtn.trigger("click");
  expect(wrapper.emitted()).toHaveProperty("toggleTodoState");
});

test("Todo emits delete event", () => {
  const wrapper = mount(Todo, {
    props: {
      todo: { id: 1, text: "Todo", isComplete: false },
    },
  });
  const deleteBtn = wrapper.find(".delete-btn");
  deleteBtn.trigger("click");
  expect(wrapper.emitted()).toHaveProperty("deleteTodo");
});

//test deleted todo is removed  from todos array
test("Todo is removed from todos array", () => {
  const wrapper = mount(Todo, {
    props: {
      todo: { id: 1, text: "Todo", isComplete: false },
    },
  });
  const deleteBtn = wrapper.find(".delete-btn");
  deleteBtn.trigger("click");
  setTimeout(() => {
    expect(App.todos.length).toBe(0);
  }, 100);
});

test("Todo emits toggle event with an id value", () => {
  const wrapper = mount(Todo, {
    props: {
      todo: { id: 1, text: "Todo", isComplete: false },
    },
  });
  const toggleBtn = wrapper.find(".toggle-btn");
  toggleBtn.trigger("click");
  expect(wrapper.emitted("toggleTodoState")[0][0]).toBe(1);
});

//test toggling todo state
test("Todo toggles state", () => {
  const wrapper = mount(Todo, {
    props: {
      todo: { id: 1, text: "Todo", isComplete: false },
    },
  });
  const toggleBtn = wrapper.find(".toggle-btn");
  toggleBtn.trigger("click");
  setTimeout(() => {
    expect(wrapper.props("todo").isComplete).toBe(true);
  }, 100);
});
