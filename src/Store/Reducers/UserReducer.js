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
            author: francesco,
            content:
                `~~~js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
  document.querySelector('#content')
)
~~~

Pretty neat, eh?

## GitHub flavored markdown (GFM)

For GFM, you can *also* use a plugin:
[\`remark-gfm\`](https://github.com/remarkjs/react-markdown#use).
It adds support for GitHub-specific extensions to the language:
tables, strikethrough, tasklists, and literal URLs.

These features **do not work by default**.
👆 Use the toggle above to add the plugin.

| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/ \`remark-gfm\` |

~~strikethrough~~

* [ ] task list
* [x] checked item

https://example.com

## HTML in markdown

⚠️ HTML in markdown is quite unsafe, but if you want to support it, you can
use [\`rehype-raw\`](https://github.com/rehypejs/rehype-raw).
You should probably combine it with
[\`rehype-sanitize\`](https://github.com/rehypejs/rehype-sanitize).

<blockquote>
  👆 Use the toggle above to add the plugin.
</blockquote>

## Components

You can pass components to change things:

~~~js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import MyFancyRule from './components/my-fancy-rule.js'

ReactDOM.render(
  <ReactMarkdown
    components={{
      // Use h2s instead of h1s
      h1: 'h2',
      // Use a component instead of hrs
      hr: ({node, ...props}) => <MyFancyRule {...props} />
    }}
  >
    # Your markdown here
  </ReactMarkdown>,
  document.querySelector('#content')
)
~~~

## More info?

Much more info is available in the
[readme on GitHub](https://github.com/remarkjs/react-markdown)!

***

A component by [Espen Hovlandsdal](https://espen.codes/)
`
        }, {
            image: "https://www.softwebsolutions.com/wp-content/uploads/2020/11/Blog_Golang-use-cases.jpg",
            title: "PKCS11 in Golang",
            date: "2021-06-17",
            category: "Product Updates",
            author: francesco,
            content: ""
        }, {
            image: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/686461/cover-secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png",
            title: "NodeJS + Express API server guide",
            date: "2022-01-03",
            category: "Product Updates",
            author: francesco,
            content: ""
        }, {
            image: "https://images.prismic.io/www-static/72bd2f14-1db1-4e37-a5a1-8f71e4e1994b_latest-at-do-blog-img.png?auto=compress,format",
            title: "How to architecture a project",
            date: "2020-12-21",
            category: "Product Updates",
            author: francesco,
            content: ""
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