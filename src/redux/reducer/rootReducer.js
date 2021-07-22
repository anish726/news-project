
import {combineReducers} from 'redux';
import articles from './articleReducer'
import books from './bookReducer'

const rootReducer = combineReducers({
    articles,
    books
})
export default rootReducer;