import { mount } from '@vue/test-utils'
import ConfirmModal from '@/components/ConfirmModal'

describe('ConfirmModal.vue', () => {
    const title = 'Testing'
    const content = '<p>testing</p>'
    const wrapper = mount(ConfirmModal, {
        propsData: {
            visible: false,
            title
        },
        slots: {
            default: content
        }
    })


    it('hides and shows with visible prop', async () => {
        expect(wrapper.find('.modal-container').classes('visible')).toBe(false)
        await wrapper.setProps({visible: true})
        expect(wrapper.find('.modal-container').classes('visible')).toBe(true)
    })

    it('reads and displays title prop', () => {
        expect(wrapper.find('.modal-title').text()).toMatch(title)
    })

    it('reads and displays content html', () => {
        expect(wrapper.find('.modal-content').html()).toMatch(content)
    })

    it('emits confirmed event on okay button click', async () => {
        wrapper.find('#confirm').trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted('confirmed')).toBeTruthy()
    })

    it('emits canceled event on cancel button click', async () => {
        wrapper.find('#cancel').trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted('canceled')).toBeTruthy()
    })
})