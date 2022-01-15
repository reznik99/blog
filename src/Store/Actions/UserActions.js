import { API_URL } from '../../Vars/Globals'

export function loadPosts() {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: "SET_LOADING", payload: true })
            const response = await fetch("http://localhost:6969/posts")
            const { posts } = await response.json()
            dispatch({ type: "FETCH_POSTS_SUCCESS", payload: posts })
        } catch (err) {
            console.log(`Unable to load posts ${err}`)
        } finally {
            dispatch({ type: "SET_LOADING", payload: false })
        }
    }
}

export function loadPostContent(title) {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: "SET_LOADING", payload: true })
            const state = getState().userReducer
            const response = await fetch(`http://localhost:6969/post/${title}`)
            const { postData } = await response.json()

            // Apply content to existing post info
            const newPost = {
                ...state.posts.find(post => post.title === title),
                content: postData
            }
            console.log(newPost)
            dispatch({ type: "FETCH_POSTDATA_SUCCESS", payload: newPost })
        } catch (err) {
            console.log(`Unable to load posts ${err}`)
        } finally {
            dispatch({ type: "SET_LOADING", payload: false })
        }
    }
}