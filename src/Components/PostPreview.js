import "./PostPreview.css"
import { Link } from "react-router-dom"

function PostPreview(props) {
    return (
        <div className="post_peek">
            <Link to={`/post/${props.post.title}`}>
                <img src={props.post.image} loading="lazy" alt="blog header" className="post_image" />
            </Link>
            <div className="post_data" style={{ padding: "0 0 0 30px" }}>
                <Link to={`/post/${props.post.title}`}>
                    <h1 className="post_title">{props.post.title} </h1>
                </Link>
                <div className="post_author_info">
                    <img src={props.author.image} loading="lazy" alt={props.author.name} className="post_author_image" />
                    <p>
                        <Link to={`/post/author/${props.author.name}`}> {props.author.name}</Link> on <Link to={`/post/tag/${props.post.category}`}>{props.post.category} </Link><span>•&nbsp; {props.post.date}</span>
                    </p>
                </div>
                <p>December was a busy month at DigitalOcean as we introduced many  ...</p>
            </div>
        </div>
    )
}

export default PostPreview;