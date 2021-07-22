import {all ,fork} from 'redux-saga/effects';
import watchFetchArticle  from './articleSaga'
import watchBooks from './bookSaga';


function* rootSaga (){
    console.log('hello ssagag');
    // yield all([watchFetchArticle(),watchBooks()]);
    yield fork(watchFetchArticle)
    yield fork(watchBooks)
}
export default rootSaga;