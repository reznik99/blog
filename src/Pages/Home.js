import './Home.css'
import '../Vars/Colors.css'
import { PostPreview, PostHighlight, Footer } from '../Components';
import profile from '../Res/profile.jpg'

function Home() {
    const author = {
        image: profile,
        name: "Francesco Gorini",
    }
    const posts = [
        {
            image: "https://images.prismic.io/www-static/72bd2f14-1db1-4e37-a5a1-8f71e4e1994b_latest-at-do-blog-img.png?auto=compress,format",
            title: "Latest products and features to learn: December 2020",
            date: "2020-12-21",
            category: "Product Updates",
        }, {
            image: "https://images.prismic.io/www-static/91e85a00-b580-4bd0-a9f2-f5cd6f0d3a15_Deploy+Blog+Graphic+v1+%281%29.png?auto=compress,format",
            title: "Deploy to the cloud: December 2020",
            date: "2020-12-21",
            category: "Product Updates",
        }, {
            image: "https://images.prismic.io/www-static/5036ebe6-a85d-4fc8-b9ac-859c2780410e_DO-mission-statement+%281%29.png?auto=compress,format",
            title: "How to: Deploy to Digital Ocean",
            date: "2020-12-21",
            category: "Product Updates",
        }, {
            image: "https://images.prismic.io/www-static/72bd2f14-1db1-4e37-a5a1-8f71e4e1994b_latest-at-do-blog-img.png?auto=compress,format",
            title: "How to architecture a project",
            date: "2020-12-21",
            category: "Product Updates",
        }
    ]
    return (
        <div className="App">

            <div className="hero">
                <div className="post_highlight_container">
                    <PostHighlight author={author} post={posts[0]} />
                    <PostHighlight author={author} post={posts[1]} />
                    <PostHighlight author={author} post={posts[2]} />
                </div>
            </div>
            <div className="posts">
                <PostPreview author={author} post={posts[0]} />
                <PostPreview author={author} post={posts[1]} />
                <PostPreview author={author} post={posts[2]} />
                <PostPreview author={author} post={posts[3]} />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
