import React from "react";

class App extends React.Component {
  render() {
    return <Title text="oho" />;
  }
}

const Title = (props) => <h1>Title:{props.text}</h1>;

Title.prototypes = {
  text: React.Prototypes.string,
};

export default App;
