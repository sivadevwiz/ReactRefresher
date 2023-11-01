import { Component } from "react";

class ReactFetchClass extends Component {
  //   constructor(parameters) {}

  state = {};

  fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("class data......", data);

    this.setState({ users: data });
  };

  componentWillMount(): void {
    this.setState({ first: "first State" });
    this.fetchUsers();
  }

  render() {
    const { first, users } = this.state;

    console.log("class users..........", users);
    return (
      <>
        <h1>Class working</h1>
        <p>{first}</p>
      </>
    );
  }
}

export default ReactFetchClass;
