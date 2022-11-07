import { configureStore } from '@reduxjs/toolkit';
import { fromJS } from 'immutable'

const initialState = fromJS({
    page: {
        path: '',
        title: '',
        isBeta: false,
    },
});

export const actionTypes = {
    UPDATE_PAGE : 'UPDATE_PAGE'
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_PAGE:
            return state.mergeDeep({
                page: {
                    path: action.path,
                }
            });
    }
}

export const updatePagePath = ({ path }) => dispatch => {
    return dispatch({ type : actionTypes.UPDATE_PAGE, path });
}

export default configureStore({
    reducer: {}
});