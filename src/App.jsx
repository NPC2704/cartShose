import Card from "./Component/Card";
import shoesData from "./data/dataShose";
import "./App.css";
import images from "./assets/data";
import { useEffect, useState } from "react";

function App() {
  const { shoes } = shoesData;
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleAddProduct = (index) => {
    const newCart = [
      ...cart,
      {
        product: shoes[index],
        quantity: 1,
      },
    ];
    setCart(newCart);
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    const newTotalPrice = totalPrice + shoes[index].price;
    setTotalPrice(newTotalPrice);
  };
  const handleRemoveItem = (index) => {
    const newCart = cart.filter((item, i) => i != index);
    const newTotalPrice =
      totalPrice - cart[index].product.price * cart[index].quantity;
    setCart(newCart);
    setTotalPrice(newTotalPrice);
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const isExistInCart = (shoe) => {
    let isExist = false;
    if (cart.length == 0) {
      return false;
    }
    cart.map((item) => {
      if (item.product.id === shoe.id) {
        isExist = true;
      }
    });
    return isExist;
  };
  const handleIncrement = (index) => {
    const newCart = cart;
    newCart[index].quantity++;
    const newQuantity = quantity + 1;
    const newTotalPrice = totalPrice + cart[index].product.price;
    setTotalPrice(newTotalPrice);
    setQuantity(newQuantity);
    setCart(newCart);
  };
  const handleDecrement = (index) => {
    if (cart[index].quantity == 1) {
      handleRemoveItem(index);
    } else {
      const newCart = cart;
      newCart[index].quantity--;
      const newQuantity = quantity - 1;
      const newTotalPrice = totalPrice - cart[index].product.price;
      setTotalPrice(newTotalPrice);
      setCart(newCart);
      setQuantity(newQuantity);
    }
  };

  return (
    <div
      className="app"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Card title="Our Products">
        {shoes.map((shoe, index) => (
          <div className="container" key={index} style={{ marginBottom: 30 }}>
            <span className="image" style={{ backgroundColor: shoe.color }}>
              <img
                src={shoe.image}
                alt="shoe image"
                style={{
                  transform: "rotate(-25deg)",
                  width: "100%",
                  marginLeft: "-16px",
                }}
              />
            </span>
            <p className="title">{shoe.name}</p>
            <p className="desc">{shoe.description}</p>
            <div className="footer">
              <p className="price">${shoe.price}</p>
              {isExistInCart(shoe) ? (
                <div className="is-exist-in-cart">
                  <img src={images.check} style={{ height: 20, width: 20 }} />
                </div>
              ) : (
                <div
                  className="btn-add-to-cart"
                  onClick={() => handleAddProduct(index)}
                >
                  add to cart
                </div>
              )}
            </div>
          </div>
        ))}
      </Card>
      <Card
        title="Your cart"
        totalPrice={
          totalPrice == 0 || totalPrice < 0
            ? "$0.00"
            : `$${totalPrice.toLocaleString({ miniumFractionDigits: 2 })}`
        }
      >
        {cart.length > 0 ? null : (
          <p className="empty-title">Your cart is empty.</p>
        )}
        {cart.map((item, index) => (
          <div className="cart-item-container" key={index}>
            <div
              className="image"
              style={{ backgroundColor: item.product.color }}
            >
              <img
                src={item.product.image}
                alt="image"
                style={{
                  position: "absolute",

                  maxWidth: "140%",
                  transform:
                    "rotate(-25deg) translateY(-40px) translateX(-5px)",
                }}
              />
            </div>
            <div className="description">
              <p className="title">{item.product.name}</p>
              <p className="price">${item.product.price}</p>
              <div className="action">
                <div className="modified">
                  <span className="dec" onClick={() => handleDecrement(index)}>
                    -
                  </span>
                  <span className="value">{item.quantity}</span>
                  <span className="inc" onClick={() => handleIncrement(index)}>
                    +
                  </span>
                </div>
                <div className="remove" onClick={() => handleRemoveItem(index)}>
                  <img src={images.trash} style={{ width: "16px" }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default App;
