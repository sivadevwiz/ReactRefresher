import React, { Component } from "react";

type FirstClassState = {
  count: number;
};

class FirstClass extends Component<Props, FirstClassState> {
  constructor(props: any) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor()");
  }

  componentDidMount(): void {
    console.log("componentDidMount()");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps()");
    return null;
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    console.log("shouldComponentUpdate()");
    return true;
  }

  getSnapshotBeforeUpdate(
    prevProps: Props,
    prevState: Readonly<FirstClassState>
  ) {
    console.log("getSnapshotBeforeUpdate()");
    return null;
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("componentDidUpdate()");
  }

  componentWillUnmount(): void {
    console.log("Component Will unmount");
  }

  handleCounter = () => {
    // const { count } = this.state;
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState({ count: this.state.count + 1 });
    // console.log("count in handlecoutner.......", this.state.count);
  };

  render() {
    console.log("render()");
    const { count } = this.state;
    return (
      <>
        <button onClick={this.handleCounter}>Count: {count}</button>
      </>
    );
  }
}

export default FirstClass;
