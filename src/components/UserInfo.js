import React, { Component, Fragment } from "react";
import Login from "./Login";
import firebase from "../firebase";

class UserInfo extends Component {
  state = {
    email: null,
    displayName: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authenticate = (provider) => {
    console.log(provider);
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebase.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  authHandler = async (authData) => {
    const user = authData.user;
    this.setState({
      email: user.email,
      displayName: user.displayName,
    });
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ email: null, displayName: null });
  };

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;
    if (!this.state.email) {
      return <Login authenticate={this.authenticate} />;
    }
    return (
      <Fragment>
        <div className="user-info">
          <label>User name:</label>
          <span type="text" id="email">
            {this.state.displayName}
          </span>
        </div>
        <div className="user-info">
          <label>Email:</label>
          <span type="text" id="email">
            {this.state.email}
          </span>
        </div>
        <div>{logout}</div>
      </Fragment>
    );
  }
}

export default UserInfo;
