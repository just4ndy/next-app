import React from 'react'
import {IPost} from '../types'
import axios from 'axios'
import Link from 'next/link'
import styles from '../styles/Posts.module.scss'

interface PostsProps {
    posts: IPost[]
}

const Posts = ({posts}: PostsProps) => {
    return (
        <div>
            <Link href='/'><a>Home </a></Link>
            <Link href='/posts/new'><a>Add post </a></Link>
            {posts && posts.map(post => (<div key={post.id} className={styles.post}>
                <div className={styles.post_body}><p><b>{post.id}.</b> {post.title}</p> {post.body}</div>
                <Link href={`/posts/${post.id}`}><button>Detail</button></Link></div>))}
        </div>
    )
}

export async function getServerSideProps() {
    const posts: IPost[] = await axios({
        method: 'GET',
        url: 'https://simple-blog-api.crew.red/posts/'
    }).then(res => res.data)
    return {
        props: {posts},
    }
}

export default Posts