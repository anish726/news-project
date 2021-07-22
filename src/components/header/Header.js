import React from 'react';
const API_USER= 'https://www.postman.com/collections/6a645751d5eee13dde76'

const Header = () => {

    fetch(API_USER)
    .then(response => response.json())
    .then(data=>console.log('data user' , data.item))
    return (
        <div>
            <h1>Navbar</h1>

        </div>
    )
}

export default Header
