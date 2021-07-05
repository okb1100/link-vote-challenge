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
        links: [],
        toast: {
            content: '',
            type: '',
            visible: false
        }
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
        },
        showToast(state, {type, content}){
            state.toast = {type, content, visible: true}
        },
        hideToast(state){
            state.toast = {type: '', content: '', visible: false}
        }
    },
    actions: {
        showToast({commit}, options){
            commit('showToast', options)
            setTimeout(() => commit('hideToast'), 2000)
        }
    },
    getters: {
        linkCount: (state) => state.links.length,
        sortedLinks: (state) => (key, order) => 
            state.links
                .slice()
                .sort((a,b) => {
                    const keyDifference = order === 'ASC' 
                        ? a[key] - b[key]
                        : b[key] - a[key]
                    
                    if (keyDifference > 0){
                        return 1
                    }
                    else if (keyDifference < 0){
                        return -1
                    }
                    else {
                        // En son oy kullanılan en üstte gözükecek
                        return key === 'points' ? b.updatedAt - a.updatedAt : 0
                    }
                }
                ),
        links: (state,getters) => (take, skip, sort= {key: 'createdAt', order: 'DESC'}) => {
            return getters.sortedLinks(sort.key, sort.order)
                .slice(skip, (skip+take))           
        }
    },
    plugins: [persistence.plugin]
})


export default store