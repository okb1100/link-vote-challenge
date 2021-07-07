import {mount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import LinkCard from '@/components/LinkCard'
import VoteButton from '@/components/VoteButton'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('LinkCard.vue', () => {
    const actions = {
        voteLink: jest.fn()
    }
    const store = new Vuex.Store({actions})

    const wrapper = mount(LinkCard, {
        store,
        localVue,
        propsData: {
        link: {
            id: '111',
            name: 'test',
            url: 'https://example.org',
            points: 0,
        }
    }})


    it('deletes link when clicked on delete', async () => {
        wrapper.find('.link-card-delete').trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted().delete).toBeTruthy()
    })

    it('changes vote count when buttons clicked', async () => {
        wrapper.findAllComponents(VoteButton).at(0).trigger('click')
        await wrapper.vm.$nextTick()
        expect(actions.voteLink).toHaveBeenCalled()
    })
})