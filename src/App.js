import React, { useCallback, useState } from "react";
import "./App.css";



const vegetables = [
  { name: "Tomatoes", price: 2 },
  { name: "Pepper", price: 3 },
  { name: "Aubergine", price: 4 },
];

const App = () => {
  const [products] = useState(vegetables);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };

  const emptyCart =() => {
    setCart([]);
  };

  return (
    <div className="wrapper">
      <h1 className="h-baslik">useCallback and React.memo </h1>
      <Products products={products} addToCart={addToCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  );
};

const Products =({ products, addToCart }) => {
  return (
    <>
      <h1 className="heading">Vegetables</h1>
      <div className="products">
        {products.map(({ name, price }) => (
          <Product key={name} name={name} price={price} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

const Cart = ({ cart, emptyCart }) => {
  return (
    <>
      <h1 className="heading">
        Your order <button onClick={emptyCart}>Remove</button>
      </h1>
      <div className="products">
        {cart.map(({ name, price }, index) => (
          <Product key={index} name={name} price={price} />
        ))}
      </div>
    </>
  );
};

const Product = ({ name, price, addToCart }) => {
  return (
    <div className="product">
      <div>
        <h2>{name}</h2>
        <h3>{price.toLocaleString()} €</h3>
      </div>
      
      <div>
        {addToCart && (
          <button onClick={() => addToCart({ name, price })}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default App;







// const vegetables = [
//   { name: "Tomatoes", price: 2 },
//   { name: "Pepper", price: 3 },
//   { name: "Aubergine", price: 4 },
// ];

// const App = () => {
//   const [products] = useState(vegetables);
//   const [cart, setCart] = useState([]);

//   const addToCart = useCallback((product) => {
//     setCart((cart) => [...cart, product]);
//   }, []);

//   const emptyCart =useCallback( () => {
//     setCart([]);
//   }, []);

//   return (
//     <div className="wrapper">
//       <h1 className="h-baslik">useCallback and React.memo </h1>
//       <Products products={products} addToCart={addToCart} />
//       <Cart cart={cart} emptyCart={emptyCart} />
//     </div>
//   );
// };

// const Products =React.memo( ({ products, addToCart }) => {
//   return (
//     <>
//       <h1 className="heading">Vegetables</h1>
//       <div className="products">
//         {products.map(({ name, price }) => (
//           <Product key={name} name={name} price={price} addToCart={addToCart} />
//         ))}
//       </div>
//     </>
//   );
// });

// const Cart = ({ cart, emptyCart }) => {
//   return (
//     <>
//       <h1 className="heading">
//         Your order <button onClick={emptyCart}>Remove</button>
//       </h1>
//       <div className="products">
//         {cart.map(({ name, price }, index) => (
//           <Product key={index} name={name} price={price} />
//         ))}
//       </div>
//     </>
//   );
// };

// const Product =React.memo( ({ name, price, addToCart }) => {
//   return (
//     <div className="product">
//       <div>
//         <h2>{name}</h2>
//         <h3>{price.toLocaleString()} €</h3>
//       </div>
      
//       <div>
//         {addToCart && (
//           <button onClick={() => addToCart({ name, price })}>
//             Add to cart
//           </button>
//         )}
//       </div>
//     </div>
//   );
// });

// export default App;