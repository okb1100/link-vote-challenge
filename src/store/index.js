import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const persistence = new VuexPersistence({
    storage: window.localStorage,
    reducer: (state) => ({links: state.links})
  })
const store = new Vuex.Store({
    state: {
        links: []
    },
    mutations: {
        addLink(state, link){
            state.links = [...state.links, link]
        },
        removeLink(state, id){
            state.links = state.links.filter((item) => item.id !== id)
        },
        voteLink(state, {id, voteUp}){
            state.links = state.links.map(
                item => item.id === id 
                ? {
                    ...item,
                    points: item.points + (voteUp ? +1 : -1),
                    updatedAt: Date.now()
                } 
                : item
            )
        }
    },
    plugins: [persistence.plugin]
})


export default store