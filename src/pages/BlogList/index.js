 import React, {Component} from 'react'

import './styles.css'
import {Link} from 'react-router-dom'
import Loader from '../../components/Loader'

class BlogList extends Component {
    state = {
        data: [],
        activeLoader: false
    }
    componentWillMount () {
        this.setState({activeLoader: true})
    }

    componentDidMount () {
        fetch (`https://api.imgur.com/3/gallery/hot/viral/0.json`,
            {
                method: 'GET',
                headers: {
                    'Authorization':'Client-ID 36bb556abe69ccd'
                }
            }).then(res => {
            return res.json()
        }).then(response => {
            console.log(response)
            this.setState({
                data: response.data,
                activeLoader: false
            })
        })
    }
    render () {
        const {data} = this.state
        return (
            <div className="ListBlocks">
                {this.state.activeLoader && <Loader/>}
                {
                    data.map((item, index) => {
                        console.log(item)
                        item['images'] = item['images'] || [{link:"none.png"}]
                        return (
                            <Link
                                to={`/article/${item.id}`}
                                className="ItemBlock"
                                key={index}
                            >
                                <img src={item['images'][0]['link']} alt=""/>
                                {item.title}
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

export default BlogList