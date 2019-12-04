import React from 'react';
import axios from 'axios';
import Header from './Header'

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
                <div key={title} className="p-3 mb-2 bg-secondary text-white">
                    <img src={urlToImage} alt="No Image Available" className="img-thumbnail" />
                    <div>
                        <h1>{title}</h1>
                        <div>{author}</div>
                        <p>{description}</p>
                        <a href={url} className="text-warning" target="_blank">More Information on {title}</a>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <Header headline="Business" />
                {this.renderItem()}
            </div>
        )
    }
}
export default Business