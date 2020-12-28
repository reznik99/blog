import "./PostPreview.css"

function PostPreview(props) {
    return (
        <div className="post_peek">
            <a href="/blog/latest-products-and-features-at-digitalocean-december-2020">
                <img src={props.post_image} alt="blog header" className="post_image" />
            </a>
            <div style={{ padding: "0 0 0 30px" }}>
                <a href="/blog/latest-products-and-features-at-digitalocean-december-2020">
                    <h1 className="post_title">Latest products and features at DigitalOcean: December 2020 </h1>
                </a>
                <div className="post_author_info">
                    <img data-src="https://images.prismic.io/www-static/6326cb734e557630247062ec390166664f5d3b63_77d07a0ba7bc27b40afc8f5932c57417.png?auto=compress,format"
                        src="https://images.prismic.io/www-static/6326cb734e557630247062ec390166664f5d3b63_77d07a0ba7bc27b40afc8f5932c57417.png?auto=compress,format"
                        alt="Rafael Rosa" className="null blur-up css-1pq2esu ls-is-cached lazyloaded" width="36px" />
                    <a href="/blog/author/rafael_rosa">Rafael Rosa </a>on<a className="tag" href="/blog/tag/product-updates">Product Updates </a><span>•&nbsp; 2020-12-21</span>
                </div>
                <p className="latest-products-and-features-at-digitalocean-december-2020 css-1r3zh44 e193y6zs0">December was a busy month at DigitalOcean as we introduced many  ...</p>
            </div>
        </div>
    )
}

export default PostPreview;