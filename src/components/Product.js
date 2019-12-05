import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types'

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    let cartBtnText = inCart ?

      (<p className="text-capitalize mb-0" disabled>in cart</p>) :
      (<i className="fas fa-cart-plus" />);

    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={() => console.log('clicked')}>
            <Link to="/details">
              <img src={img} alt="" className="card-img-top" />
            </Link>
            <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {
              console.log('added to cart')
            }}>
              {cartBtnText}
            </button>
          </div>
          {/* cart footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text_blue font-italic mb-0">
              <span className="mr-1">$</span>{price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}


Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};




const ProductWrapper = styled.div`

.card{
  border-color: transparent;
  transition: all .5s linear;
}

.card-footer{
  background:transparent;
  border-top: transparent;
  transition: all .5s linear;
}
&:hover{
  .card{
    border: .04rem solid rgba(0,0,0,.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,.2);
  }
  
}

.img-container{
  position: relative;
  overflow: hidden;
}

.card-img-top{
  transition: all .5s ease-in-out;
}
.img-container:hover{
  .card-img-top{
    transform: scale(1.2);
  }
}

.cart-btn{
  position:absolute;
  left:95px;
  top:5px;
  padding: .2rem 1.2rem;
  background: grey;
  border:none;
  color: black;
  font-size: .8rem;
  border-radius: 12px;
  transform: translate(90%, -120%);
  transition: all .5s ease-in-out;
}

.img-container:hover .cart-btn{
  transform: translate(95%, 5%)

}
.cart-btn:hover{
  color: orange;
  cursor: pointer;
}


`
