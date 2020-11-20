import { combineReducers, createStore } from 'redux'
import { citiesReducer } from './citiesReducer'

export const rootReducer = combineReducers({
    citiesReducer,
})

let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store }
