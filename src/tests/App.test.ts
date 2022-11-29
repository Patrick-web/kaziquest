import { mount } from "@vue/test-utils";
import App from "../App.vue";

test("Dark mode toggling works", () => {
  const wrapper = mount(App);
  const darkModeBtn = wrapper.find("#darkToggle");

  if (!wrapper.classes().includes("dark")) {
    darkModeBtn.trigger("click");
  }
  expect(wrapper.classes().includes("dark"));
});
