import React from "react";

export default ChildComponent => {
  class ComposedComponent extends React.Component {
    componentDidMount() {
      this.shouldCheckAuth();
    }

    componentDidUpdate() {
      this.shouldCheckAuth();
    }

    shouldCheckAuth() {
      if (true) {
        this.props.history.push("/login");
      }
    }
    render() {
      return (
        <div>
          <ChildComponent {...this.props} /> Wrapped
        </div>
      );
    }
  }

  return ComposedComponent;
};
