function bookAction(book){
    return{
        type:'BOOK_REQUEST',
      book
    }
}
export default bookAction;