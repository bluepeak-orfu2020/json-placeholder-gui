import React from 'react';

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

    render() { // 2, 4
        console.log(this.state.users);
        return <p>Du är på users</p>
    }
}

export default Users