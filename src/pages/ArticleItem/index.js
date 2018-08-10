import React, {Component} from 'react'
import {articleItem,commentsFetcher} from '../../api/article.js'
import './styles.css'


class ArticleItem extends Component {
    state = {
        data: {},
        comments: []
    }
    componentDidMount() {
        const {match:{params}} = this.props
        articleItem(params.id)
            .then(res => {
                return res.json()
            })
            .then(resPost => {
                commentsFetcher(params.id)
                    .then(res => {
                        return res.json()
                    })
                    .then(res => {
                        console.log(res.data);
                        this.setState({data:resPost.data, comments: res.data})
                    })
            })
    }
    render () {
        const {data} = this.state
        const {comments} = this.state
        data['images'] = data['images'] || [{link:'none.png'}]
        data['tags'] = data['tags'] || []
        return (
                <div className="content">
                    <a href={data['link']} target="_blank"><h3>{data['title']}</h3></a>
                    <p>
                        [{
                        data['tags']
                            .map((item, index) => {
                                return <span>{item['name']}</span>
                            })
                            .reduce((accu, elem) => {
                                return accu === null ? [elem] : [...accu, ', ', elem]
                            }, null)
                        }]
                    </p>
                    {
                        data['images'].map((item) => {
                            return <img src={item['link']} alt=""/>
                        })
                    }

                    {
                        comments.map((itm)=>{
                            return <p>[<small>{itm.author}</small>]{itm.comment}</p>
                        })
                    }
                </div>
        )
    }
}

export default ArticleItem