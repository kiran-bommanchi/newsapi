import React,{useContext} from 'react'
import { Card } from 'primereact/card';
import "./NewsCard.css"
import { GlobalDataContext } from "../context/context";

const NewsCard = () => {
    const { data } = useContext(GlobalDataContext);
    // console.log(data,"data")
    
  return (
    <>
    {data?.map((cardData)=>(

   
    <Card  className='custom-card col-12' key={cardData.publishedAt} >
        <div className='grid'>
            <div className='col-9'>
                <div className='col-12 news-header'>
                <span  >{cardData.title}</span>
                </div>
                <div className='col-12 author-info'>
                    <span>{cardData.author}</span>
                    <span className='author-space'/>
                    <span>{cardData.publishedAt}</span>
                </div>
                <div className='col-12 news-content'>
                <p >
                    {cardData.description}
                </p>
                </div>

            </div>
            <div className='col-3 news-image'>
                <img style={{height:"146px",width:"146px",borderRadius:"9px"}} src={cardData.urlToImage} alt="news"/>
            </div>

        </div>
</Card>
 ))}
    </>
  )
}

export default NewsCard