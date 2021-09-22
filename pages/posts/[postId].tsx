import React from 'react'
import axios from 'axios'
import {IPost} from '../../types'
import Link from 'next/link'

interface PostProps {
    post: IPost
}

const Post = ({post}: PostProps) => {
    return (
        <div>
            <Link href='/'><a>Home </a></Link>
            <Link href='/posts/new'><a>Add post </a></Link>
            <Link href='/posts'><a>Post list </a></Link>
            <p><b>{post.id}.</b> {post.title}</p>
            {post.body}
        </div>
    )
}

interface IQuery {
    postId: string
}

interface IContext {
    query: IQuery
}

export async function getServerSideProps({query}: IContext) {
    const post: IPost = await axios({
        method: 'GET',
        url: `https://simple-blog-api.crew.red/posts/${query.postId}/`
    }).then(res => res.data)
    return {
        props: {post},
    }
}

export default Post