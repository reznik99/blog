import './Home.css'
import '../Vars/Colors.css'
import { Nav, PostPreview, PostHighlight, Footer } from '../Components';
import profile from '../Res/profile.jpg'

function Home() {
    const author = {
        image: profile,
        name: "Francesco Gorini",
    }
    const post = {
        image: "https://images.prismic.io/www-static/72bd2f14-1db1-4e37-a5a1-8f71e4e1994b_latest-at-do-blog-img.png?auto=compress,format",
        title: "Latest products and features at DigitalOcean: December 2020",
        date: "2020-12-21",
        category: "Product Updates",
    }
    return (
        <div className="App">
            <Nav />
            <div className="hero">
                <div className="post_highlight_container">
                    <PostHighlight author={author} post_image="https://images.prismic.io/www-static/72bd2f14-1db1-4e37-a5a1-8f71e4e1994b_latest-at-do-blog-img.png?auto=compress,format" />
                    <PostHighlight author={author} post_image="https://images.prismic.io/www-static/91e85a00-b580-4bd0-a9f2-f5cd6f0d3a15_Deploy+Blog+Graphic+v1+%281%29.png?auto=compress,format" />
                    <PostHighlight author={author} post_image="https://images.prismic.io/www-static/5036ebe6-a85d-4fc8-b9ac-859c2780410e_DO-mission-statement+%281%29.png?auto=compress,format" />
                </div>
            </div>
            <div className="posts">
                <PostPreview author={author} post={post} />
                <PostPreview author={author} post={post} />
                <PostPreview author={author} post={post} />
                <PostPreview author={author} post={post} />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
