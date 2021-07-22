

import {put,takeEvery,call, delay} from 'redux-saga/effects';

const API_NEWS_ARTICLE = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=everything&api-key=ugfcmZMR2xTeEoBbuzvL0O54bRBYNelP'


function fetchApi(){
    return fetch(API_NEWS_ARTICLE, {
             method: 'GET',
           })
        .then(response => response.json())
        .then(json=>json.response)
        .catch(error => {throw error})
}
   

function* fetchArticleData(){
    try {
        const data = yield call(fetchApi);
        
        // console.log(data,'hey data is here in saga')
        yield put({type:'ARTICLE_SUCCESS_SAGA',data})
        
        
    } catch (error) {
        
        yield put({type:'ARTICLE_FAIL',message:error.message})
    }
}

 function* watchFetchArticle(){
     yield takeEvery('ARTICLE_REQUEST',fetchArticleData)
 }

 export default watchFetchArticle;