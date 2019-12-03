import React from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_TOKEN_APIKEY

class Business extends React.Component {
    constructor(){
        super()
        this.state = {
            articles: []
        }
    }
    fetchNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
        const data = await axios.get(url)
        const { data: {articles} } = data
        this.setState({articles})
    }
    componentDidMount() {
        this.fetchNews()
    }
    renderItem = () => {
        const {articles} = this.state
        return articles.map(article => {
            const { title, author, urlToImage, description, url } = article
            return (
                <div key={title} classname="news">
                    <img src={urlToImage} />
                    <div className="title-container">
                        <h1>{title}</h1>
                        <div className="author">{author}</div>
                        <p>{description}</p>
                        <a href={url} target="_blank">URL</a>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>{this.renderItem()}</div>
        )
    }
}
export default Business