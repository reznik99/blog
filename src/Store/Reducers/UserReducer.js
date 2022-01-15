import profile from '../../Res/profile.jpg'
const francesco = {
    image: profile,
    name: "Francesco Gorini",
}
const initialState = {
    posts: [
        {
            image: "https://media.wired.com/photos/59266b6daf95806129f4f659/master/w_960,c_limit/RaspberryPiTA.jpg 960w",
            title: "How to make a RaspberryPI Remote Controlled car! Websockets & Streams",
            date: "2021-12-21",
            category: "Product Updates",
            author: francesco
        }, {
            image: "https://www.softwebsolutions.com/wp-content/uploads/2020/11/Blog_Golang-use-cases.jpg",
            title: "PKCS11 in Golang",
            date: "2021-06-17",
            category: "Product Updates",
            author: francesco
        }, {
            image: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/686461/cover-secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png",
            title: "NodeJS + Express API server guide",
            date: "2022-01-03",
            category: "Product Updates",
            author: francesco
        }, {
            image: "https://images.prismic.io/www-static/72bd2f14-1db1-4e37-a5a1-8f71e4e1994b_latest-at-do-blog-img.png?auto=compress,format",
            title: "How to architecture a project",
            date: "2020-12-21",
            category: "Product Updates",
            author: francesco
        }
    ]
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, loading: action.payload }
        case "FETCH_POST_FAILURE":
            return { ...state, fetch_error: action.payload }
        default:
            return state
    }
}
export default userReducer