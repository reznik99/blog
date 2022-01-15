import { API_URL } from '../../Vars/Globals'

export function loadPosts() {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: "SET_LOADING", payload: true })
            const response = await fetch(`${API_URL}/posts`)
            const { posts } = await response.json()
            dispatch({ type: "FETCH_POSTS_SUCCESS", payload: posts })
            return posts
        } catch (err) {
            console.log(`Unable to load posts ${err}`)
            return err
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
            const response = await fetch(`${API_URL}/post/${title}`)
            const { postData } = await response.json()

            // Add post content to existing post
            const newPost = {
                ...state.posts.find(post => post.title === title),
                content: postData
            }
            dispatch({ type: "FETCH_POSTDATA_SUCCESS", payload: newPost })
            return newPost
        } catch (err) {
            console.log(`Unable to load posts ${err}`)
            return err
        } finally {
            dispatch({ type: "SET_LOADING", payload: false })
        }
    }
}