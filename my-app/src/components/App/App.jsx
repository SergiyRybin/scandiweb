import React, { Component } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Container } from "../Container/Container";
import {ProductsList} from "../ProductsList/ProductsList";

export default class App extends Component {
  render() {
    return (
      <>
        <Container>
          <NavBar />
          <ProductsList/>
        </Container>
      </>
    );
  }
}
