import propTypes from 'prop-types'
import React from "react";

const CardProduct = ({ name, image, price, addToCart }) => {
  return (
    <div className="card w-100">
      <img src={image} className="card-img-top" alt="skilvul" />
      <div className="card-body">
        <h5 className="card-title">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(price)}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted text-capitalize">
          {name}
        </h6>
        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={addToCart}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default CardProduct;

CardProduct.propTypes = {
  name : propTypes.string,
  price : propTypes.number,
  image : propTypes.string,
  addToCart : propTypes.func
}

CardProduct.defaultProps = {
  name : "", //nama dari produk yang akan kita tampilkan
  price : "", //harga dari produk yang akan kita tampilkan
  image : "", //gambar dari produk yang akan kita tampilkan
  addToCart : () => {
    return null;
  } //Fungsi ini akan menambahkan produk yang kita pilih ke dalam cart
}