import { useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { Container, Chip, Avatar } from '@mui/material'

import { loadPosts, loadPostContent } from '../Store/Actions/UserActions'
import './Blog.css'

function Blog(props) {
    const state = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const { blog } = useParams()
    let postData = state.posts.find(post => post.title === blog)

    // Load post content if not already loaded
    useEffect(async () => {
        if (!postData) {
            await dispatch(loadPosts())
        }
        if (!postData?.content) {
            await dispatch(loadPostContent(blog))
            postData = state.posts.find(post => post.title === blog)
        }
    }, [])
    return (
        postData
            ? <Container maxWidth="md" sx={{ paddingBottom: 20 }}>
                <h1>{postData.title}</h1>
                <img className="post_image" style={{ maxWidth: '100%', height: 'auto', maxHeight: 300 }} src={postData.image} alt={postData.title} loading="lazy" />
                {/* <div style={{ display: 'flex' }}>
                    <Avatar alt={state.author.name} src={state.author.image} />
                    <Chip label={state.author.name} />
                    <Chip label={postData.category} />
                </div> */}
                <div className="post_author_info">
                    <img src={state.author.image}
                        alt={state.author.name} className="post_author_image" width="36px" />
                    <p>
                        <Link to={`/blog/author/${state.author.name}`}> {state.author.name}</Link> on <Link to={`/blog/tag/${postData.category}`}>{postData.category} </Link><span>•&nbsp; {postData.date}</span>
                    </p>
                </div>
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{postData.content}</ReactMarkdown>
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                    ***
                </ReactMarkdown>
                <div className="post_author_info">
                    <img src={state.author.image}
                        alt={state.author.name} className="post_author_image" width="36px" />
                    <p>
                        <Link to={`/blog/author/${state.author.name}`}> {state.author.name}</Link> on <Link to={`/blog/tag/${postData.category}`}>{postData.category} </Link><span>•&nbsp; {postData.date}</span>
                    </p>
                </div>
            </Container>
            : null
    )
}

export default Blog;
