import "./PostHighlight.css"
import { Link } from "react-router-dom";

function PostHighlight(props) {
    return (
        <div className="post_highlight">
            <Link to={`/post/${props.post.title}`}>
                <img src={props.post.image} alt="blog" className="post_image" />
            </Link>
            <div>
                <div className="post_author_info">
                    <img src={props.author.image}
                        alt={props.author.name} className="post_author_image" width="36px" />
                    <p>
                        <Link to={`/post/author/${props.author.name}`}> {props.author.name}</Link> on <Link to={`/post/tag/${props.post.category}`}>{props.post.category} </Link><span>•&nbsp; {props.post.date}</span>
                    </p>
                </div>
                <Link to={`/post/${props.post.title}`}>
                    <h1 className="post_title">{props.post.title}</h1>
                </Link>
                <p>December was a busy month at DigitalOcean as we introduced many  ...</p>
            </div>
        </div>
    )
}

export default PostHighlight;