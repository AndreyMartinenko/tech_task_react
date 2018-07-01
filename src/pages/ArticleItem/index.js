import React, {Component} from 'react'
import {articleItem} from '../../api/article.js'
import './styles.css'


class ArticleItem extends Component {
    state = {
        data: {}
    }
    componentDidMount() {
        const {match:{params}} = this.props
        articleItem(params.id)
            .then(res => {
                return res.json()
            })
            .then(res => {
                this.setState({data:res})
            })

    }
    render () {
        const {data} = this.state
        return (
                <div className="content">
                    {/*<h2>article item</h2><br/>*/}
                    <h3>{data['title']}</h3>
                    <p>{data['short_description']}</p>
                    <img src={data['full_page_image']} alt=""/>
                </div>
        )
    }
}

export default ArticleItem