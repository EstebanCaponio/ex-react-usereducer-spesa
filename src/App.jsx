import { useState } from "react";

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProd, setAddedProd] = useState([]);
  // console.log(addedProd)

  const addToCart = product => {
    const isProductAlreadyAdded = addedProd.some(p => p.name === product.name);
    if (isProductAlreadyAdded) {
      return;
    }

    setAddedProd(curr => [...curr, {
      ...product,
      quantity: 1
    }])
  }

  return (
    <>
      <div>
        <h1>Prodotti:</h1>
        {products.map((p, i) => (
          <>
            <div key={i} className="container">
              <p>{p.name}: {p.price.toFixed(2)}€</p>
              <button onClick={() => addToCart(p)}> aggiungi al carrello</button>
            </div>
          </>
        ))}
      </div>

      {addedProd.length > 0 && (<>
        <h2>Carrello:</h2>
        <ul>
          {addedProd.map((p, i) => (
            <li key={i}>
              <p>{p.quantity} x {p.name} {p.price.toFixed(2)}€</p>
            </li>
          ))}
        </ul>
      </>
      )}
    </>
  )
}

export default App
