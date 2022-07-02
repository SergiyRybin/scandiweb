import React, { Component } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Container } from "../Container/Container";
import { ProductsList } from "../ProductsList/ProductsList";
import { ModalDetails } from "../ModalDetails/ModalDetails";

export default class App extends Component {
  state = {
    modal: false,
    product: "",
    productImage: "",
    currensy: "USD",
  };

  modalOpen = (producId, productImg) => {
    this.setState({
      modal: true,
      product: producId,
      productImage: productImg,
    });
  };

  nameSelect = (data) => {
    this.setState({ currensy: data.target.value });
  };
  blockScrol = () => {
    document.body.style.overflow = "hidden";
  };

  render() {
    const { modal, product, productImage, currensy } = this.state;
    return (
      <>
        <Container>
          <NavBar nameSelect={this.nameSelect} />
          <ProductsList modal={this.modalOpen} value={currensy} />
          {modal && <ModalDetails dataId={product} dataImg={productImage} scroll ={this.blockScrol()}/>}
        </Container>
      </>
    );
  }
}
