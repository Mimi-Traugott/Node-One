import React from 'react';
import './App.css';
import axios from 'axios';
import { thisTypeAnnotation } from '@babel/types';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUserId:1
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:4040/api/users/${this.state.currentUserId}`).then(res => {
      this.setState({
        users: res.data
      })
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
