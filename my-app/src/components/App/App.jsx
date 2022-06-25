import React, { Component } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Container } from "../Container/Container";

export default class App extends Component {
  render() {
    return (
      <>
        <Container>
          <NavBar />
        </Container>
      </>
    );
  }
}
