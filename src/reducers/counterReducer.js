import { ADDITION, SUBTRACTION } from "../actionType";

const initialState = {
    counter: 0,
};

export const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDITION:
            return { ...state, counter: state.counter + 10 };
        case SUBTRACTION:
            return {
                ...state, counter: (state.counter - 1 > 0) ? state.counter - 1 : 0
            };

        default:
            return state;
    }
}