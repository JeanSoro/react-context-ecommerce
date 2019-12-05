import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, company, img, info, price, title, inCart } = value.detailProduct;
          let cartBtnText = inCart ?
            (<p className="text-capitalize mb-0" disabled>in cart</p>) :
            (<i className="fas fa-cart-plus" />);

          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text_blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}
              {/* Product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Model: {title}</h2>
                  <h4 className="text_title text-uppercase text-muted mt-3 mb-2">made by :
                    <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text_blue">
                    <strong>
                      price : <span>$</span>{price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>
                        back to products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer>
                      {cartBtnText}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
              {/* end of product info */}
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
