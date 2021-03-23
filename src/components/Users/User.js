import React from 'react'
import { withRouter } from 'react-router-dom'

class User extends React.Component {
    render() {
        let id = this.props.match.params.id;
        return <p>{id}</p>
    }
}

export default withRouter(User);