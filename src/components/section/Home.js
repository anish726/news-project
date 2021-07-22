import React from 'react'
import TopNews from '../TopNews/TopNews'
import NewBooks from '../NewBook/NewBooks'
import { BrowserRouter as Router, Route } from 'react-router-dom';
const Home = () => {
    return (
       <div>
            <div className='contianer'>
                <div><TopNews/></div>
                <div>feeds</div>
                <div><NewBooks/></div>

            </div>
       </div>
     
    )
}

export default Home
