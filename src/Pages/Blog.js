import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { Container, Chip, Avatar } from '@mui/material'
import './Blog.css'

function Blog(props) {
    const state = useSelector(state => state.userReducer)
    let { blog } = useParams()
    const postData = state.posts.find(post => post.title === blog)
    return (
        <Container maxWidth="sm">
            <h1>{postData.title}</h1>
            <img className="post_image" style={{ maxWidth: '100%', height: 'auto' }} src={postData.image} alt={postData.title} loading="lazy" />
            <div style={{ display: 'flex' }}>
                <Avatar alt={postData.author.name} src={postData.author.image} />
                <Chip label={postData.author.name} />
                <Chip label={postData.category} />
            </div>
        </Container>
    );
}

export default Blog;
