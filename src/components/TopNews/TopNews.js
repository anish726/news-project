import React, {  useEffect } from 'react'
import {Card} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import getArticle from '../../redux/action/articelAction'


// const API_NEWS_ARTICLE = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=everything&api-key=ugfcmZMR2xTeEoBbuzvL0O54bRBYNelP'

const TopNews = () => {
  // const [articles, setNews] = useState([]);
  const dispatch = useDispatch()
 const articles = useSelector(state=>state.articles.articles);



    useEffect(() => {

        dispatch(getArticle());
        
        // fetch(API_NEWS_ARTICLE)
        //     .then(response => response.json())
        //     .then(data => setNews(data.response.docs))
    }, [dispatch])

 
    // useEffect(() => {
    //   setNews(articles);
    // }, [articles])
    
    // console.log("sadfasfasfd", articles)
    return (
        <div>

            <h3>Top News</h3>
            <Card style={{ width: '16rem' }}>
            { articles?.map((el, id) => {
                
              
                return (
                    
                    <Card.Body key={id}>
                    <Card.Title >{el.headline.main}</Card.Title>
                  
                    <Card.Text>
                    {el.abstract}
                    </Card.Text>
                   
                  </Card.Body>
              
                   
                )
            })}
 


           
 </Card>
            <h3>hey</h3>
        </div>
    )
}

export default TopNews
