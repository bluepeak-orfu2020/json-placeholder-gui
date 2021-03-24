import React from 'react'
import { withRouter } from 'react-router-dom'
import UserDetails from './UserDetails'

class User extends React.Component {
    constructor(props) { // 1
        super(props)
        this.state = {}
    }

    componentDidMount() { // 3
        let id = this.props.match.params.id;

        fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then((response) => response.json())
        .then((user) => {
            this.setState({user: user})
        })
    }

    render() { // 2, 4
        const user = this.state.user
        let userDom;

        if (user && user.name) {
            return <UserDetails user={user}></UserDetails>
        } else if (!user) {
            userDom = "Loading"
        } else if (!user.name) {
            userDom = "Användaren finns inte"
        }

        return userDom
    }

    
}

export default withRouter(User);