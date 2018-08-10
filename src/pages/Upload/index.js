import React, {Component} from 'react'
import axios from 'axios'
import './style.css'

class Upload extends Component {
    state = {
        selectedFile: null,
        data: {}
    }
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }
    fileUploadHandler = () => {
         const fd = new FormData()
         // fd.append('type', 'file')
         fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post(`https://api.imgur.com/3/image`, fd,
            {
                headers: {
                    Authorization: 'Client-ID 36bb556abe69ccd'
                      },
            }
        )
            .then(res => {
                console.log(res);
            })

      }
    render() {
        return (
        <div className="Upload">
            <input type="file" onChange={this.fileSelectedHandler}/>
            {/*<input type="text" id="imgur_link" name="imgur_link" />*/}

            <button onClick={this.fileUploadHandler}>Upload</button>
        </div>
        )
    }
}

 Upload.propTypes = {};

export default Upload


