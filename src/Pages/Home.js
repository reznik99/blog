import './Home.css'
import { Nav, PostPreview } from '../Components';

function Home() {
    return (
        <div className="App">
            <Nav />
            <div className="posts">
                <PostPreview post_image="https://images.prismic.io/www-static/72bd2f14-1db1-4e37-a5a1-8f71e4e1994b_latest-at-do-blog-img.png?auto=compress,format" />
                <PostPreview post_image="https://images.prismic.io/www-static/5036ebe6-a85d-4fc8-b9ac-859c2780410e_DO-mission-statement+%281%29.png?auto=compress,format" />
            </div>
        </div>
    );
}

export default Home;
