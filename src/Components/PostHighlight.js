import "./PostHighlight.css"

function PostHighlight(props) {
    return (
        <div className="post_highlight">
            <a href="/blog/latest-products-and-features-at-digitalocean-december-2020">
                <img src={props.post.image} alt="blog" className="post_image" />
            </a>
            <div>
                <div className="post_author_info">
                    <img src={props.author.image}
                        alt={props.author.name} className="post_author_image" width="36px" />
                    <p>
                        <a href={`/blog/author/${props.author.name}`}> {props.author.name}</a> on <a href="/blog/tag/product-updates">{props.post.category} </a><span>•&nbsp; {props.post.date}</span>
                    </p>
                </div>
                <a href="/blog/latest-products-and-features-at-digitalocean-december-2020">
                    <h1 className="post_title">{props.post.title}</h1>
                </a>
                <p>December was a busy month at DigitalOcean as we introduced many  ...</p>
            </div>
        </div>
    )
}

export default PostHighlight;