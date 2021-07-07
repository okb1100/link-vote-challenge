import { getters } from '@/store'


describe('getters', () => {
    it('returns toast', () => {
        const toast = {content: 'OK', type: 'success', visible: true}
        const state = {toast}
        expect(getters.toast(state)).toStrictEqual(expect.objectContaining(toast))
    })
    it('returns link count', () => {
        const state = {
            links: [
                {"id": "1"},
                {"id": "2"},
            ]
        }
        expect(getters.linkCount(state)).toBe(2)
    })

    it('sorts links with provided key', () => {
        const state = {
            links: [
                {"id": "1", points: 4, updatedAt: 0},
                {"id": "2", points: 2, updatedAt: 5},
                {"id": "3", points: 2, updatedAt: 2}
            ]
        }
        const sorted = getters
            .sortedLinks(state)({key: 'points', order: 'DESC'})
        expect(sorted[0].id).toMatch("1")
        expect(sorted[1].id).toMatch("2")
        expect(sorted[2].id).toMatch("3")
    })

    it('limits links with page size', () => {
        const links = [
            {"id": "1", points: 4, createdAt: 0},
            {"id": "2", points: 2, createdAt: 5},
            {"id": "3", points: 2, createdAt: 2},
            {"id": "4", points: 2, createdAt: 2},
            {"id": "5", points: 2, createdAt: 2},
            {"id": "6", points: 2, createdAt: 2}
        ]
        const state = {
            links,
        }
        const sorted = getters
            .links(state, {sortedLinks: () => links})(5,0)
        expect(sorted.length).toBe(5)
    })
})