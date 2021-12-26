import { createStore } from 'vuex'

export default createStore({
state: {
    curColor: '',
    prevColor: 'yellow',
    count: 5,

  },
mutations: {
    CHANGE_DIRECTION(state) {
        state.greenDirectionsFlag = ! state.greenDirectionsFlag
    },

    DECREMENT_COUNT(state) {
        state.count--
    },

    DECREMENT_START_VALUE(state,payload) {
        state.prevColor = payload.old
        state.curColor = payload.new
        if (payload.new === 'red') {state.count = 10}
        else if (payload.new === 'green') {state.count = 15}
        if (payload.new === 'yellow') {state.count = 3}
    },

    CURRENT_ROUTE_TO_CUR_COLOR(state,payload) {
        state.curColor = payload.name
    }

},

getters: {
    COLOR_CALC(state) {
        if (state.curColor === 'green') {
            return 'yellow'
        }
        else if (state.prevColor === undefined ) {
            return'yellow'
        }
        else if (state.curColor === 'red') {
            return'yellow'
        }
        else if (state.prevColor === 'green'&& state.curColor === 'yellow' )
        return 'red'
        else if (state.prevColor === 'red' && state.curColor === 'yellow')
        return 'green'
    },
    COUNT_VALUE(state) {
        return state.count
    }
}
})