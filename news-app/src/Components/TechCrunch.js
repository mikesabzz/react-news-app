import React from 'react'
import axios from 'axios'

const apiKey = process.env.REACT_APP_TOKEN_APIKEY

class TechCrunch extends React.Component {
    constructor(){
        super()
        this.state = {
            articles: []
        }
    }
    fetchNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
        const data = await axios.get(url)
        const { data: {articles} } = data
        this.setState({articles})
    }
    componentDidMount(){
        this.fetchNews()
    }
    renderItem = () => {
        return this.state.articles.map(article => {
            const { title, author, urlToImage, description, url } = article
            return (
                <div key={title}>
                    <img src={urlToImage} alt="" />
                    <div>
                        <h1>{title}</h1>
                        <h2>{author}</h2>
                        <p>{description}</p>
                        <a href={url}>URL</a>
                    </div>
                </div>
            )
        })
    }
    render(){
        return(
            <div>{this.renderItem()}</div>
        )
    }
}
export default TechCrunch