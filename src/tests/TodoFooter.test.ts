import { mount } from "@vue/test-utils";
import App from "../App.vue";

//test filtering todo
test("Filtering todos", async () => {
  const wrapper = mount(App);

  const input = wrapper.find("input");
  input.setValue("Todo 1");
  await input.trigger("keyup.enter");

  input.setValue("Todo 2");
  await input.trigger("keyup.enter");

  wrapper.find(".todo").trigger("click");


  const showAll = wrapper.find('[aria-label="Show all Todos"]');
  const showIncomplete = wrapper.find('[aria-label="Show Active Todos Only"]');
  const showCompleted = wrapper.find(
    '[aria-label="Show Completed Todos Only"]'
  );


  await showCompleted.trigger("click");
  expect(wrapper.findAll(".todo").length === 1);
  await showAll.trigger("click");
  expect(wrapper.findAll(".todo").length === 2);
  await showIncomplete.trigger("click");
  expect(wrapper.findAll(".todo").length === 1);
});


test("Clearing completed todos", async () => {
  const wrapper = mount(App);

  const input = wrapper.find("input");
  input.setValue("Todo 1");
  await input.trigger("keyup.enter");

  input.setValue("Todo 2");
  await input.trigger("keyup.enter");

  wrapper.find(".todo").trigger("click");

  const clearCompleted = wrapper.find('[aria-label="Delete Completed Todos"]');

  await clearCompleted.trigger("click");
  expect(wrapper.findAll(".todo").length === 1);
})
