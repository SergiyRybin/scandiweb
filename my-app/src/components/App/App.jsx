import React, { Component } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Container } from "../Container/Container";
import { ProductsList } from "../ProductsList/ProductsList";

export default class App extends Component {

state ={
  modal: false
}

modalOpen =()=>{
  console.log("modal")
}

  render() {
    return (
      <>
        <Container>
          <NavBar />
          <ProductsList modal={this.modalOpen} />
        </Container>
      </>
    );
  }
}
