import React from "react";
import "./App.css";
import LifecycleExample from "./components/LifecycleEx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasDestroyed: false };
  }

  componentDidMount() {
    this.setState({ hasDestroyed: true });
  }
  render() {
    return (
      <div>
        {this.state.hasDestroyed ? null : <LifecycleExample></LifecycleExample>}
      </div>
    );
  }
}

export default App;
