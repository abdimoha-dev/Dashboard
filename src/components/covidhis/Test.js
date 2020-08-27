import React, { Component } from "react";

function UserGreeting(props) {
  if (!props.warn) {
    return null;
  }
  return <h1>Welcome Back!</h1>;
}
function GuestGreeting(props) {
  return (
    <div>
      <h1>Please sign in.</h1> <button onClick={props.handles}>Toggle</button>
    </div>
  );
}
class Test extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: true };
    /*
    If you forget to bind this.handleClick and pass it to onClick,
     this will be undefined when the function is actually called.
     */
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    // const loginSTatus = isLoggedIn ? (
    //   <UserGreeting />
    // ) : (
    //   <GuestGreeting handles={this.handleLogin} />
    // );

    return (
      <div>
        <UserGreeting warn={this.state.isLoggedIn} />
        <h1>Hello!</h1>
        {isLoggedIn && <h2>yoh!!</h2>}
      </div>
    );

    // if (isLoggedIn) {
    //   return <UserGreeting />;
    // }
    // return <GuestGreeting handles={this.handleLogin} />;
  }
}

export default Test;
