import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { counterReducer } from '../reducer/reducer'


export let store = createStore(counterReducer, applyMiddleware(thunk))