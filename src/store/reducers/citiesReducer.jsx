import { SET_UPDATE } from '../actions/citiesActions'

const initialState = {
    update: false,
    cities: [
        {
            name: 'Владивосток',
            utc: 10,
        },
        {
            name: 'Калининград',
            utc: 2,
        },
        {
            name: 'Красноярск',
            utc: 7,
        },
        {
            name: 'Москва',
            utc: 3,
        },
    ],
}

export function citiesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_UPDATE:
            return {
                ...state,
                update: !state.update,
            }

        default:
            return state
    }
}
