import { mount } from '@vue/test-utils'
import Pagination from '@/components/Pagination'

describe('Pagination.vue', () => {
    const currentPage = 1;
    const totalPages = 10;
    const wrapper = mount(Pagination, {
        propsData: {
            currentPage,
            totalPages
        }
    })

    it('displays numbers of all pages', () => {
        expect(wrapper.findAll('.pagination-number').length).toBe(totalPages)
    })

    it('highlights active page', () => {
        expect(wrapper.find('.pagination-number.current').text()).toBe(currentPage.toString())
    })

    it('toggles prev arrow on 1st page', async() => {
        await wrapper.setProps({currentPage: totalPages})
        expect(wrapper.find('.pagination-arrow.prev').exists()).toBe(true)
        await wrapper.setProps({currentPage: 1})
        expect(wrapper.find('.pagination-arrow.prev').exists()).toBe(false)
    })

    it('toggles next arrow on last page', async () => {
        await wrapper.setProps({currentPage: 1})
        expect(wrapper.find('.pagination-arrow.next').exists()).toBe(true)
        await wrapper.setProps({currentPage: totalPages})
        expect(wrapper.find('.pagination-arrow.next').exists()).toBe(false)
    })

    it('sets active page on click', async () => {
        wrapper.findAll('.pagination-number').at(5).trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted('set-page')[0][0]).toBe(6)
    })
})