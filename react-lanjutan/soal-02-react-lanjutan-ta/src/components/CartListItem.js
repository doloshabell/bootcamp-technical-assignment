import React from 'react'
import propTypes from 'prop-types'

const CartListItem = ({ name, price, amount, increase, decrease }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{name}</div>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(price * amount)}
      </div>
      <div>
        <div className="fw-bold text-center">{amount}</div>
        <span onClick={decrease} className="btn btn-sm">
          -
        </span>
        <span onClick={increase} className="btn btn-sm btn-primary">
          +
        </span>
      </div>
    </li>
  );
};

export default CartListItem;

CartListItem.propTypes = {
  name : propTypes.string, //nama dari produk yang akan kita beli
  price : propTypes.number, //harga dari produk yang akan kita beli
  amount : propTypes.number, //jumlah dari produk yang akan kita beli
  increase : propTypes.func, //fungsi ini akan menambahkan jumlah dari produk yang akan kita beli
  decrease : propTypes.func //fungsi ini akan mengurangi jumlah dari produk yang akan kita beli
}

CartListItem.defaultProps = {
  name : "",
  price : "",
  amount : "",
  increase : () => {
    console.log("");
  },
  decrease : () => {
    console.log("");
  }
}

