import React from 'react'
import axios from 'axios'
import Header from './Header'

const apiKey = process.env.REACT_APP_TOKEN_APIKEY

class Bitcoin extends React.Component {
    constructor(){
        super()
        this.state = {
            articles: []
        }
    }
    fetchNews = async () => {
        const url = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-07&sortBy=publishedAt&apiKey=${apiKey}`
        const data = await axios.get(url)
        const { data: {articles} } = data
        this.setState({articles})
    }
    componentDidMount() {
        this.fetchNews()
    }
    renderItem = () => {
        return this.state.articles.map(article => {
            const { title, author, urlToImage, description, url } = article
            return (
                <div key={title} className="p-3 mb-2 bg-secondary text-white">
                    
                    <img src={urlToImage} alt="No Image Available" className="img-thumbnail" />
                    <div>
                        <h1>{title}</h1>
                        <h2>{author}</h2>
                        <p>{description}</p>
                        <a href={url} className="text-warning" target="_blank">More Information on {title}</a>
                    </div>
                </div>
            )
        })
    }
    render(){
        return (
            <div>
                <Header headline="Bitcoin" />
                {this.renderItem()}
            </div>
        )
    }

}

export default Bitcoin