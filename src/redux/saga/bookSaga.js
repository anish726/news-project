
import { put, takeEvery, call, delay } from 'redux-saga/effects'
const API_BOOKS = 'https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=ugfcmZMR2xTeEoBbuzvL0O54bRBYNelP'



function fetchBookData() {
    return fetch(API_BOOKS)
        .then(response => response.json())
        .then(json => json.results)
        .catch(error => {
            throw error
        })
}

function* fetchBookApiData() {
    try {
        const book = yield call(fetchBookData);
        console.log("book saga ",book);
        yield put({ type:'BOOK_SUCCESS', book }) 
    }
    catch (error) {
        yield put({ type:'BOOK_ERROR', massage: error.massage })
       
    }

}

function* watchBooks() {
    yield takeEvery('BOOK_REQUEST', fetchBookApiData)
}
export default watchBooks;