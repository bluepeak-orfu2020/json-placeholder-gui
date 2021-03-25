import React from 'react';
import { withRouter } from 'react-router-dom'

class Users extends React.Component {

    constructor(props) { // 1
        super(props);
        this.state = {};
    }
    
    componentDidMount() { // 3
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => {
            this.setState({users: users})
        })
    }

    handleClick = (id) => {
        this.props.history.push('/users/' + id)
    }

    render() { // 2, 4
        console.log(this.state.users);

        const users = this.state.users;

        const userElements = users ? 
        users.map((user) => <p className="user-list-item" onClick={() => {this.handleClick(user.id)}} key={user.id}>{user.name}</p>) 
        : "Loading..."

        // return <div className="user-list-div">{userElements}</div>
        return <enFunktionsKomponent name="Linus"></enFunktionsKomponent>
    }
}

export default withRouter(Users)