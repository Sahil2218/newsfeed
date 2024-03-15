import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import ScrollToTop from 'react-scroll-to-top'
import style from  '../styles/News.module.css'

export  class News extends Component {
    

    static defaultProps =  {
        country : "in",
        pageSize : 8,
        category : 'general'
    }
    static propTypes = {
        country : PropTypes.string,
        pageSize: PropTypes.number,
        category : PropTypes.string

    }
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }

    }

  
    async componentDidMount(){
        this.props.setProgress(10)
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=258548f6da1a432fa4a81a624f5623b5&page=1&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            this.setState({loading : true});
            let parsedData = await data.json();
            this.props.setProgress(50)
            this.setState({articles: parsedData.articles, 
                totalResults : parsedData.totalResults,
                loading : false
            })
            this.props.setProgress(100)
    }

    

    nextClick = async () => {
        this.props.setProgress(10)
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        window.scrollTo(0,0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=258548f6da1a432fa4a81a624f5623b5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(50)
        this.setState({page : this.state.page + 1,
            articles: parsedData.articles,
            loading : false
        })
    }
    this.props.setProgress(100)
    }
    
 


    prevClick = async () => {
        this.props.setProgress(0)
        window.scrollTo(0,0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=258548f6da1a432fa4a81a624f5623b5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.setState({loading : true});
        let parsedData = await data.json();
        this.props.setProgress(50)
        this.setState({
            page : this.state.page - 1,
            articles: parsedData.articles,
            loading : false
        })
        this.props.setProgress(100)
    }
  render() {
    return (
        <div className={style.main}>
        <div className="container my-3" >
        <h1 className='text-center' style={{margin:'80px'}}>Top Headlines - <span style={{color:'red'}}>{this.props.category}</span></h1> 
        <div className="row">
        {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title ? element.title.slice(0,50):""} description={element.description ? element.description.slice(0,100):""} imageUrl={element.urlToImage ? element.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKQFZYhRFKtlmdWAH1PBN9kBmLmQl2olzAtXd35KpIRqZ6bFv2KHuMBAqyVmzdUrFZJA&usqp=CAU"} 
        newsUrl = {element.url} author= {element.author ? element.author:"Unknown"} publishedOn={element.publishedAt ? element.publishedAt:"Not Specified"} source = {element.source.name}/>
        </div> 
        })} 
        </div>
        <div className="container d-flex justify-content-between my-4">
            <button disabled={this.state.page <= 1}className='btn btn-outline-dark' onClick={this.prevClick}> &laquo; Previous</button>
            <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))}    className='btn btn-outline-dark' onClick={this.nextClick}>Next &raquo;</button>
        </div>
        <ScrollToTop className={style.btn} smooth color='#FF0000' width='30px' height='30px'  title='Scroll To Top'/>
      </div>
      </div>
    )
  }
}
export default News