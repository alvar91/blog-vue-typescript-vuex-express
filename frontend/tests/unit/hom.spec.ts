import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vue from 'vue';
import Element from 'element-ui';
import HomePage from "@/views/Home.vue";
import * as Vuex from 'vuex';
Vue.use(Element);

const localVue = createLocalVue()
localVue.use(Vuex)
describe("Home.vue", () => {
  const $t = jest.fn();
  const store = new Vuex.Store({
    modules: {
      Articles: {
        namespaced: true,
      }
    }
  })
  let wrapper
  beforeEach(()=>{
    wrapper = shallowMount(HomePage, {
      localVue,
      store,
      mocks: {
        $t,
      }
    })
  })
  it("Check default value", () => {
    expect(wrapper.vm.searchValue).toBeFalsy();
    expect(wrapper.vm.viewMode).toBeTruthy();
  });
  it("Check function changeView", () => {
    wrapper.vm.changeView();
    expect(wrapper.vm.viewMode).toBeFalsy();
  });
  it("Call function changeView", () => {
    wrapper.vm.changeView = jest.fn();
    wrapper.vm.changeView();
    expect(wrapper.vm.changeView).toHaveBeenCalled();
  });
});
