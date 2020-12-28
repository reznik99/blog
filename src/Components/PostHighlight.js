import "./PostHighlight.css"

function PostHighlight(props) {
    return (
        <div className="post_highlight">
            <a href="/blog/latest-products-and-features-at-digitalocean-december-2020">
                <img src={props.post_image} alt="blog image" className="post_image" />
            </a>
            <div>
                <div className="post_author_info">
                    <img src="https://images.prismic.io/www-static/6326cb734e557630247062ec390166664f5d3b63_77d07a0ba7bc27b40afc8f5932c57417.png?auto=compress,format"
                        alt="Rafael Rosa" className="post_author_image" width="36px" />
                    <p>
                        <a href="/blog/author/rafael_rosa">Rafael Rosa</a> on <a className="tag" href="/blog/tag/product-updates">Product Updates </a> <span> •&nbsp; 2020-12-21</span>
                    </p>
                </div>
                <a href="/blog/latest-products-and-features-at-digitalocean-december-2020">
                    <h1 className="post_title">Latest products and features at DigitalOcean: December 2020 </h1>
                </a>
                <p>December was a busy month at DigitalOcean as we introduced many  ...</p>
            </div>
        </div>
    )
}

export default PostHighlight;