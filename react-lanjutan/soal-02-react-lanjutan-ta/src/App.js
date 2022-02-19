import React, { useEffect, useState } from "react";
import CardProduct from "./components/CardProduct";
import CartListItem from "./components/CartListItem";
import Navbar from "./components/Navbar";

import menus from "./dummy-data";

export default function App() {
  const [total, setTotal] = useState(0);
  const [purchasedItem, setPurchasedItem] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    if (cart.find(el => el.id === id)) {
      increaseCartAmount(id);
    } else {
      const cartData = {
        id: menus[id-1].id,
        name: menus[id-1].name,
        price: menus[id-1].price,
        amount: 1
      }
      setCart([...cart, cartData]);
    }
  };

  const decreaseCartAmount = (id) => {
    let indexElement;

    cart.forEach((el, index) => {
      if(el.id === id){
        indexElement = index
      }
      else{
        indexElement = indexElement
      }
    });

    const data = cart;

    if (data[indexElement].amount>1) {
      data[indexElement].amount -= 1
    }
    else {
      data.splice(indexElement, 1)
    }

    setCart([...data]);
  };

  const increaseCartAmount = (id) => {
    let indexElement;

    cart.forEach((el, index) => {
      indexElement = el.id === id ? index : indexElement;
      if (el.id === id){
        indexElement = index
      }
      else {
        indexElement = indexElement
      }
    });

    const data = cart;
    data[indexElement].amount += 1;

    setCart([...data]);
  };

  useEffect(() => {
    let totalPrice = 0;
    let totalItem = 0;
    cart.forEach((el) => {
      totalPrice += el.price * el.amount;
      totalItem += el.amount;
    });

    setTotal(totalPrice);
    setPurchasedItem(totalItem);
  },[cart])

  return (
    <div className="bg-secondary">
      <Navbar totalItem={purchasedItem} />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card w-100">
              <div className="card-body">
                <div className="row">
                  {menus.map((menu) => (
                    <div
                      key={menu.id}
                      className="col-md-4 col-sm-6 col-12 my-2"
                    >
                      <CardProduct
                        {...menu}
                        addToCart={() => addToCart(menu.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <ol className="list-group">
              {cart.map((c) => {
                return (
                  <CartListItem
                    key={c.id}
                    {...c}
                    increase={() => increaseCartAmount(c.id)}
                    decrease={() => decreaseCartAmount(c.id)}
                  />
                );
              })}
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Total Harga</div>
                </div>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD"
                }).format(total)}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
