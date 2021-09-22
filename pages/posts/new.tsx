import React, {useState} from 'react'
import axios from 'axios'
import Link from 'next/link'

const New = () => {
    const [postData, setPostData] = useState({
        title: '',
        body: ''
    })
    const {title, body} = postData

    const onChange = (e: any) => {
        setPostData({...postData, [e.target.name]: e.target.value})
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        axios.post('https://simple-blog-api.crew.red/posts/', {...postData}).then(r => r.data)
        setPostData({
            title: '',
            body: ''
        })
    }

    return (
        <div>
            <Link href='/'><a>Home</a></Link>
            <form action="POST" onSubmit={e => onSubmit(e)}>
                <div>
                    <p>Title</p><input name='title' type="text" value={title} onChange={e => onChange(e)}/>
                    <p>Body</p><input name='body' type="text" value={body} onChange={e => onChange(e)}/>
                    <input type="submit" value='Add'/>
                </div>
            </form>
        </div>
    )
}

export default New