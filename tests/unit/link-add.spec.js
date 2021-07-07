import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import LinkAdd from '@/views/LinkAdd'
import Card from '@/components/Card'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter()
describe('LinkAdd.vue', () => {
    let actions;
    let store;
    beforeEach(() => {
        actions = {
            addLink: jest.fn(),
            showToast: jest.fn()
        }
        store = new Vuex.Store({actions})
    })

    it('shows error with invalid url', async () => {
        const wrapper = mount(LinkAdd, {store, localVue})
        await wrapper.setData({
            name: 'this is not a url',
            url: 'this is not a url'
        })
        wrapper.find('.add').trigger('click')
        await wrapper.vm.$nextTick()
        expect(actions.showToast)
            .toHaveBeenCalledWith(expect.anything(), expect.objectContaining({"type": "error"}))
    })

    it('shows error with empty name', async () => {
        const wrapper = mount(LinkAdd, {store, localVue})
        await wrapper.setData({
            name: '',
            url: 'https://example.org'
        })
        wrapper.find('.add').trigger('click')
        await wrapper.vm.$nextTick()
        expect(actions.showToast)
            .toHaveBeenCalledWith(expect.anything(), expect.objectContaining({"type": "error"}))
    })

    it('shows success on entry', async () => {
        const wrapper = mount(LinkAdd, {store, localVue})
        await wrapper.setData({
            name: 'Example',
            url: 'https://example.org'
        })
        wrapper.find('.add').trigger('click')
        await wrapper.vm.$nextTick()
        expect(actions.showToast)
            .toHaveBeenCalledWith(expect.anything(), expect.objectContaining({
                content: "Example Added",
                "type": "success"
            }))
    })

    it('goes back with button click', async () => {
        const wrapper = mount(LinkAdd, {localVue, router})
        wrapper.findComponent(Card).trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.$route.path).toMatch('/')
    })
})