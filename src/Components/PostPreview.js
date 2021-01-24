import "./PostPreview.css"

function PostPreview(props) {
    return (
        <div className="post_peek">
            <a href="/blog/latest-products-and-features-at-digitalocean-december-2020">
                <img src={props.post.image} alt="blog header" className="post_image" />
            </a>
            <div style={{ padding: "0 0 0 30px" }}>
                <a href="/blog/latest-products-and-features-at-digitalocean-december-2020">
                    <h1 className="post_title">{props.post.title} </h1>
                </a>
                <div className="post_author_info">
                    <img src={props.author.image} alt={props.author.name} className="post_author_image" />
                    <p>
                        <a href="/blog/author/rafael_rosa"> {props.author.name}</a> on <a href="/blog/tag/product-updates">{props.post.category} </a><span>•&nbsp; {props.post.date}</span>
                    </p>
                </div>
                <p>December was a busy month at DigitalOcean as we introduced many  ...</p>
            </div>
        </div>
    )
}

export default PostPreview;