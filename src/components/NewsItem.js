import React from 'react'
import '../styles/newItems.css'
import ShareOnSocial from 'react-share-on-social';
import {BsShareFill} from 'react-icons/bs'


const NewsItem = (props) => {

  const {title, description, imageUrl, newsUrl, author, publishedOn, source} = props;
  return (
        <>
         <div>
          
         <div className="my-3 mx-2">
         < div className="card" style={{maxHeight:"100%", display:'flex', justifyContent:'space-between',alignItems:'flex-end'}}>
         <span className ="position-absolute top-0  translate-middle badge rounded-pill   bg-danger" style={{zIndex :"1", left:"50%", top:"100px", height:'20px'}}>{source}</span>
             <img src={imageUrl} className="card-img-top" alt="..." style={{maxHeight:"200px"}} />
                 <div className="card-body">
                     <h5 className="card-title" >{title}...</h5>
                     <p className="card-text" >{description}...</p>
                     <a href={newsUrl} target="_blank" rel="noreferrer"className="btn btn-outline-dark btn-sm">Read More</a>
                     
                     <ShareOnSocial
                     textToShare ='Read this News!'
                     linkFavicon={imageUrl}
                     link={newsUrl}
                     linkTitle={title}
                     linkMetaDesc={description}   
                     >
                      <button  className='btn btn-outline-danger btn-sm mx-4' title="Share to Social">Share<span className='mx-2'><BsShareFill/></span></button>
                     </ShareOnSocial>

                     <p className="card-text my-3"><small className="text-body-secondary">Author :- {author}</small></p>
                     <p className="card-text"><small className="text-body-secondary">Published On :- {new Date(publishedOn).toLocaleString(undefined, {timeZone :'Asia/Kolkata'})} (IST) </small></p>
                    
                 </div>
                 </div> 
         </div>
    </div>
    </>
  )
}

export default NewsItem
