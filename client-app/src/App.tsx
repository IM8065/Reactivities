import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header, Icon } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Header as="h2" icon>
        <Icon name="users" />
        Reactivities
        <Header.Subheader>
          And I was like hey wasup hello
        </Header.Subheader>
      </Header>
    </div>
  );
}

export default App;
