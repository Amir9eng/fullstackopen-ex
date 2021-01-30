import React from "react";

class App extends React.Component {
  render() {
    return <Title />;
  }
}

const Title = (props) => <h1>{props.text}</h1>;

Title.prototypes = {
  text: React.prototypes.string,
};

export default App;
