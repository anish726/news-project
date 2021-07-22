
const initailState = {
    articles: [],
    error: null
}
function articles(state = initailState, action) {
    // console.log(action, 'reducer article')
    // console.log("state=======", state)
    switch (action.type) {
        case 'ARTICLE_REQUEST':
            return {
                ...state
            }
        case 'ARTICLE_SUCCESS_SAGA':
            return {
                ...state,
                articles: action.data.docs
            }
        case 'ARTICLE_FAIL':
            return {
                ...state,
                error: action.message
            }
        default:
            return state;
    }

}


export default articles;