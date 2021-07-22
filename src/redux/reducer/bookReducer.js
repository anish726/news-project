
const initailState = {
    books: [],
    error: null
}

function books(state = initailState, action) {
    console.log('rducer', action)
    console.log('.888----+++++++++++++++',state)
    
    switch(action.type) {

        case'BOOK_REQUEST':
            return {
                ...state
            }

        case'BOOK_SUCCESS':
            return {
                ...state,
                books: action.book
            }

        case'BOOK_ERROR':
            return {
                ...state,
                error: action.massage
            }

        default:
            return state;
    }
}
export default books;