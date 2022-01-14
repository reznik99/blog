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
            image: "https://media.wired.com/photos/59266b6daf95806129f4f659/master/w_960,c_limit/RaspberryPiTA.jpg 960w",
            title: "How to make a RaspberryPI Remote Controlled car! Websockets & Streams",
            date: "2021-12-21",
            category: "Product Updates",
        }, {
            image: "https://www.softwebsolutions.com/wp-content/uploads/2020/11/Blog_Golang-use-cases.jpg",
            title: "PKCS11 in Golang",
            date: "2021-06-17",
            category: "Product Updates",
        }, {
            image: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/686461/cover-secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png",
            title: "NodeJS + Express API server guide",
            date: "2022-01-03",
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
                    {posts.slice(0, 3).map((post, idx) =>
                        <PostHighlight author={author} post={post} key={idx} />
                    )}
                </div>
            </div>
            <div className="posts">
                {posts.map((post, idx) =>
                    <PostPreview author={author} post={post} key={idx} />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
