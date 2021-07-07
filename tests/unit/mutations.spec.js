import { mutations } from '@/store'

const {addLink, removeLink, voteLink} = mutations

describe('mutations', () => {
    it('adds link to store', () => {
        const state = {links: []}
        addLink(state, {"id": "1"})
        expect(state.links.length).toBe(1)
    })
    
    it('removes link from store', () => {
        const state = {links: [{"id": "1"}]}
        removeLink(state,"1")
        expect(state.links.length).toBe(0)
    })

    it('increases and decreases vote count', () => {
        const state = {links: [{"id": "1", points: 0}]}
        voteLink(state,{id: "1", voteUp: true})
        expect(state.links[0].points).toBe(1)
        voteLink(state,{id: "1", voteUp: false})
        voteLink(state,{id: "1", voteUp: false})
        expect(state.links[0].points).toBe(-1)
    })
})