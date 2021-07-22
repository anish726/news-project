import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import bookAction from '../../redux/action/booksAction'

// const API_BOOKS = 'https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=ugfcmZMR2xTeEoBbuzvL0O54bRBYNelP'

const NewBooks = () => {

    const books = useSelector(state => state.books.books)
    console.log('books newbooks', books)
    // const [books , setBooks] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(bookAction());
        //  fetch(API_BOOKS)
        //  .then(response => response.json())
        //  .then(data => console.log(data.results))
    }, [dispatch])

    return (
        <div>
            <h3>New Books</h3>
            <Card style={{ width: '16rem' }}>
                {books?.map((item, id) => {
                    return (
                        <Card.Body key={id}>
                            <Card.Title >{item.byline}</Card.Title>

                            <Card.Text>
                                {item.summary}
                            </Card.Text>

                        </Card.Body>

                    )
                })}
            </Card>

        </div>
    )
}

export default NewBooks
