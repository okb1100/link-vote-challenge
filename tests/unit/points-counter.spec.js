import {mount} from '@vue/test-utils'
import PointsCounter from '@/components/PointsCounter'

describe('PointsCounter.vue', () => {
    const points = 5
    const wrapper = mount(PointsCounter, {
        propsData: {points}
    })
    it('displays given points', () => {
        expect(wrapper.text()).toMatch(`${points} Points`)
    })
})