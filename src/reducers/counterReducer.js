import {
    addAction,
    removeAction,
    add10Action,
    remove10Action,
    resetAction
} from '../actions';

const counterReducer = (state = 0, {type}) => {
    switch (type) {
        case addAction.type:
            return state + 1;
        case removeAction.type:
            return state - 1;
        case add10Action.type:
            return state + 10;
        case remove10Action.type:
            return state - 10;
        case resetAction.type:
            return 0;
        default:
            return state;
    }
};

export default counterReducer;