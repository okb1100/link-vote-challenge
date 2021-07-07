import { mutations } from '@/store'

const {
    addLink,
    removeLink,
    voteLink,
    showToast,
    hideToast
} = mutations

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

    it('sets toast properties on show', () => {
        const state = {toast : {type: '', content: '', visible: false}}
        showToast(state, {type: 'success', content: 'OK'})
        expect(state.toast.type).toMatch('success')
        expect(state.toast.content).toMatch('OK')
        expect(state.toast.visible).toBe(true)
    })

    it('sets toast properties on hide', () => {
        const state = {toast : {type: 'success', content: 'OK', visible: true}}
        hideToast(state)
        expect(state.toast.type).toMatch('')
        expect(state.toast.content).toMatch('')
        expect(state.toast.visible).toBe(false)
    })
})