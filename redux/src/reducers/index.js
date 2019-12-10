import { combineReducers } from "redux";

const INITIAL_STATE = {
    items: [
        {title: 'buy coffee'},
        {title: 'Apply for google interview'},
        {title: 'Practice data structures'},
    ]
};

const todosReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ITEM_CREATED':
            return {...state, items: action.payload};
        
        case 'ITEM_DELETED':
            return {...state, items: action.payload};
            
        default:
            return state;

    }
};

export default combineReducers({
    todo: todosReducer,
})