import profile from '../../Res/profile.jpg'
const francesco = {
    image: profile,
    name: "Francesco Gorini",
}

const initialState = {
    posts: [],
    author: francesco
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, loading: action.payload }
        case "FETCH_POSTS_SUCCESS":
            return { ...state, posts: action.payload }
        case "FETCH_POSTDATA_SUCCESS":
            return { ...state, posts: [...state.posts.filter(post => post.title !== action.payload.title), action.payload] }
        default:
            return state
    }
}
export default userReducer