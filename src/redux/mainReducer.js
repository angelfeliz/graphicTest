import { combineReducers } from 'redux';
import chartBar from './chartBarReducer';
import lineGraph from './lineReducer';

const mainReducer = combineReducers({
    chartBar,
    lineGraph
})

export default mainReducer;