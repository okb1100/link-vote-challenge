import {mount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import LinkList from '@/views/LinkList'
import Pagination from '@/components/Pagination'
import Card from '@/components/Card'
const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter()

describe('LinkList.vue', () => {
    let links
    let getters
    let store
    
    beforeEach(() => {
      links = jest.fn(() => [])
      getters = {
        linkCount: () => 7,
        links: jest.fn(() => links)
      }

      store = new Vuex.Store({
        getters
      })
    })

    it('displays pagination on > 5 items', async () => {
        const wrapper = mount(LinkList, { store, localVue })
        expect(wrapper.findComponent(Pagination).isVisible()).toBe(true)
    })


    it('hides pagination on <= 5 items', async () => {
        getters.linkCount = () => 5
        store = new Vuex.Store({getters})
        const wrapper = mount(LinkList, { store, localVue })
        expect(wrapper.findComponent(Pagination).exists()).toBe(false)
    })

    it('navigates to add screen', async () => {
        const wrapper = mount(LinkList, { store, localVue, router })
        wrapper.findComponent(Card).trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.$route.path).toMatch('/add')
    })

    it('sorts by points', async () => {
        const wrapper = mount(LinkList, { store, localVue, router })
        await wrapper.find('#sort-by').setValue('points|DESC')
        await wrapper.vm.$nextTick()
        expect(links).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({key: 'points', order: 'DESC'})
        )
    })
})