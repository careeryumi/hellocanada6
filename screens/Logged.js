import React from 'react';
import fire from './fire';


class Logged extends React.Component{

    logout() {
        fire.auth().signOut();
      }

    render(){
        return (
            <div style={{textAlign: 'center'}}>
              <h1>You Are Logged In</h1>
              <button onClick = {this.logout}>Logout</button>
            </div>
          )
    }
}

export default Logged;

