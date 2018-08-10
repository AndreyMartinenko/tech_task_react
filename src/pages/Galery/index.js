
import React, {Component} from 'react'

import './style.css'
import Loader from '../../components/Loader'

class Galery extends Component {
    state = {
        data: [],
        activeLoader: false
    }
    componentWillMount () {
        this.setState({activeLoader: true})
    }

    componentDidMount () {
        fetch ('https://api.imgur.com/3/gallery/hot/viral/0.json',
            {
                method: 'GET'
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
            <div className="Galery">
                {this.state.activeLoader && <Loader/>}
                {
                      data.map((item,index) => {
                        return (
                            <div>
                                  <a href={item['link']} target="_blank">
                                      <h3>{item.title}</h3>
                                      <img src={item['link']} alt=""/>
                                  </a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Galery