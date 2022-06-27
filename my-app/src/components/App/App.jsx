import React, { Component } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Container } from "../Container/Container";
import { ProductsList } from "../ProductsList/ProductsList";
import { ModalDetails } from "../ModalDetails/ModalDetails";

export default class App extends Component {
  state = {
    modal: false,
    product: "",
    productImage:''
  };

  modalOpen = (producId, productImg) => {
    this.setState({
      modal: true,
      product: producId,
      productImage: productImg,
    });
  };

  render() {
    const { modal, product, productImage } = this.state;
    return (
      <>
        <Container>
          <NavBar />
          <ProductsList modal={this.modalOpen} />
          {modal && <ModalDetails dataId={product} dataImg={productImage} />}
        </Container>
      </>
    );
  }
}
