import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4040/api/users').then(res => {
      console.log(res)
    })
  }

  render() {
    const users = this.state.users.map(user => <h2>{user.first_name}</h2>)
    return (
      <div className="App" >
        {users}
      </div>
    );
  }
}

export default App;
