import RootReducer from './rootReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export const store = createStore(RootReducer, applyMiddleware(thunk))
