import { Component } from "react";
import { Container } from "../Container/Container";
import { ModalDetails } from "../ModalDetails/ModalDetails";
import { NavBar } from "../NavBar/NavBar";
import { ProductsList } from "../ProductsList/ProductsList";

export default class App extends Component {
  state = {
    modal: false,
    product: "",
    productImage: "",
  };

  modalOpen = (producId, productImg) => {
    this.setState({
      modal: true,
      product: producId,
      productImage: productImg,
    });
  };

  blockScrol = () => {
    document.body.style.overflow = "hidden";
  };

  render() {
    const { modal, product, productImage } = this.state;
    return (
      <>
        <Container>
          <NavBar />
          <ProductsList modal={this.modalOpen} />
          {modal && (
            <ModalDetails
              dataId={product}
              dataImg={productImage}
              scroll={this.blockScrol()}
            />
          )}
        </Container>
      </>
    );
  }
}
