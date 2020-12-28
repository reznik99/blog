import './Home.css'
import '../Vars/Colors.css'
import { Nav, PostPreview, PostHighlight, Footer } from '../Components';

function Home() {
    return (
        <div className="App">
            <Nav />
            <div className="hero">
                <div className="post_highlight_container">
                    <PostHighlight post_image="https://images.prismic.io/www-static/72bd2f14-1db1-4e37-a5a1-8f71e4e1994b_latest-at-do-blog-img.png?auto=compress,format" />
                    <PostHighlight post_image="https://images.prismic.io/www-static/91e85a00-b580-4bd0-a9f2-f5cd6f0d3a15_Deploy+Blog+Graphic+v1+%281%29.png?auto=compress,format" />
                    <PostHighlight post_image="https://images.prismic.io/www-static/5036ebe6-a85d-4fc8-b9ac-859c2780410e_DO-mission-statement+%281%29.png?auto=compress,format" />
                </div>
            </div>
            <div className="posts">
                <PostPreview post_image="https://images.prismic.io/www-static/14a9775d-c951-4875-89f4-85bb8f04fcff_load+balancer+blog.jpg?auto=compress,format" />
                <PostPreview post_image="https://images.prismic.io/www-static/b4301a9f-e6be-4783-9c03-a7395af3dade_Solarwind_Blog.jpg?auto=compress,format" />
                <PostPreview post_image="https://images.prismic.io/www-static/72bd2f14-1db1-4e37-a5a1-8f71e4e1994b_latest-at-do-blog-img.png?auto=compress,format" />
                <PostPreview post_image="https://images.prismic.io/www-static/5036ebe6-a85d-4fc8-b9ac-859c2780410e_DO-mission-statement+%281%29.png?auto=compress,format" />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
