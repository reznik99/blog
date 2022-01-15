import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { Container, Chip, Avatar } from '@mui/material'
import './Blog.css'

function Blog(props) {
    const state = useSelector(state => state.userReducer)
    let { blog } = useParams()
    const postData = state.posts.find(post => post.title === blog)
    return (
        <Container maxWidth="md" sx={{ paddingBottom: 20 }}>
            <h1>{postData.title}</h1>
            <img className="post_image" style={{ maxWidth: '100%', height: 'auto', maxHeight: 300 }} src={postData.image} alt={postData.title} loading="lazy" />
            <div style={{ display: 'flex' }}>
                <Avatar alt={postData.author.name} src={postData.author.image} />
                <Chip label={postData.author.name} />
                <Chip label={postData.category} />
            </div>
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{postData.content}</ReactMarkdown>
        </Container>
    )
}

export default Blog;
