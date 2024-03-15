import React from 'react'
import styles from '../styles/about.module.css'


function about() {

  return (
    <>
    <div className='container my-5 py-5'>
      <div className={styles.heading}>
        <h1 className={styles.heading1}>ABOUT OUR  APP!</h1>
      </div>
      </div>
    <div className='container'>
    <div className={styles.para1}>
      <p><strong>Welcome!</strong> to our news application, your go-to source for the latest and most reliable news from around the world. 
        We're dedicated to delivering timely, accurate, and relevant information to keep you informed and engaged.</p>
    </div>
    </div>

    
    <div className='container py-5'>
      <div className={styles.heading}>
        <h1 className={styles.heading1}>What set's us apart?</h1>
      </div>
      </div>
    <div className='container'>
      <h1 style={{fontSize:'large', textDecorationLine:'dotted'}}>* User-Friendly Experience</h1>
     <div className={styles.para2}>
      <p><strong><u>We understand</u></strong> the importance of trustworthy news sources. 
        That's why we've partnered with the most 
        reputable and established news outlets to bring you a diverse range of news stories.
         You can count on us for unbiased and up-to-date reporting.</p>
     </div>
     <h1 style={{fontSize:'large', textDecorationLine:'dotted', margin:"20px"}}>* Personalized Content</h1>
     <div className={styles.para2}>
      <p>In our news application,<strong><u>we provide a diverse selection of news sections </u> </strong>to cater to your individual interests, whether it's staying up-to-date with the latest in Technology, 
        keeping informed about General news, or exploring niche topics. Our user-friendly design ensures easy navigation through these sections, enabling you to customize your preferences
         and discover the content that's most relevant to you.
</p>
     </div>
    </div>
    </>
  )
}

export default about