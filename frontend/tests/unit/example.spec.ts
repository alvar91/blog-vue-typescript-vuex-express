import { shallowMount } from "@vue/test-utils";
import Vue from 'vue';
import Element from 'element-ui';
import HelloWorld from "@/components/HelloWorld.vue";
Vue.use(Element);

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
