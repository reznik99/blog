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
        if (!state.posts || state.posts.length === 0)
            await dispatch(loadPosts())
    }, [])

    return (
        <div className="App">
            <div className="hero">
                <div className="post_highlight_container">
                    {state.posts.filter(post => post.highlight).sort(sortFunc).map((post, idx) =>
                        <PostHighlight author={state.author} post={post} key={idx} />
                    )}
                </div>
            </div>
            <div className="posts">
                {state.posts.sort(sortFunc).map((post, idx) =>
                    <PostPreview author={state.author} post={post} key={idx} />
                )}
            </div>
            <Footer />
        </div>
    );
}

const sortFunc = (postA, postB) => {
    let titleA = postA.title.toUpperCase(); // ignore upper and lowercase
    let titleB = postB.title.toUpperCase(); // ignore upper and lowercase
    if (titleA < titleB)
        return -1
    if (titleA > titleB)
        return 1
    return 0;
}

export default Home;
