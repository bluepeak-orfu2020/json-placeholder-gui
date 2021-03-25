import { withRouter } from 'react-router-dom'
import React from 'react'

class PostsByUser extends React.Component {
constructor(props) { // 1
    super(props)
    this.state = {posts: []}
}

componentDidMount() { // 3
    let id = this.props.match.params.id;
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
    .then((response) => response.json())
    .then((posts) => {
        this.setState({posts: posts})
    })
}

    render() { // 2, 4
        const posts = this.state.posts

        if (posts.length) {
            return <div>{posts.map((post) => <p key={post.id}>{post.title}</p>)}</div>
        } else {
            return "Loading..."
        }
    }
}

export default withRouter(PostsByUser);