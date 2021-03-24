import React from 'react'

class UserDetails extends React.Component {

    render() {
        const user = this.props.user
        return (
        <div>
            <h1>{user.name}</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
        </div>)
    }
}

export default UserDetails