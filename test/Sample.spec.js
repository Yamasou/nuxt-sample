import { mount, createLocalVue } from '@vue/test-utils'
import { state, mutations } from "@/store/index"
import Vuex from "vuex"
import Sample from '@/components/Sample.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Sample', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Sample)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('store', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state,
      mutations
    })
  })

  it("mutation.increment", () => {
    mutations.increment(store.state)
    expect(store.state.count).toBe(1);
  })
})
