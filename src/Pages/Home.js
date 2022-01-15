import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Home.css'
import '../Vars/Colors.css'
import { PostPreview, PostHighlight, Footer } from '../Components'
import { loadPosts } from '../Store/Actions/UserActions'

function Home() {
    const state = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    useEffect(async () => {
        await dispatch(loadPosts())
    }, [])

    return (
        <div className="App">
            <div className="hero">
                <div className="post_highlight_container">
                    {state.posts.slice(0, 3).map((post, idx) =>
                        <PostHighlight author={state.author} post={post} key={idx} />
                    )}
                </div>
            </div>
            <div className="posts">
                {state.posts.map((post, idx) =>
                    <PostPreview author={state.author} post={post} key={idx} />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
