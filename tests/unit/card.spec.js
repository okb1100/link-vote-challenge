import {mount} from '@vue/test-utils'
import Card from '@/components/Card'

describe('Card.vue', () => {
    const element = "<p>testing element</p>"
    const wrapper = mount(Card, {
        slots: {
            default: element
        }
    })
    it('displays given element', () => {
        expect(wrapper.html()).toMatch(element)
    })
})
