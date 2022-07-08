


export function counterReducer(state = {  }, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: (state.value ? state.value : 0) + 1 }
        case 'counter/decremented':
            return { value: (state.value ? state.value : 0) - 1 }
        case 'api':
            return { ...state, data: action.abc }
        default:
            return state
    }
}