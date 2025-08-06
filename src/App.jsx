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
      const updatedCart = addedProd.map(p => {
        if (p.name === product.name) {
          return {
            ...p,
            quantity: p.quantity + 1
          };
        }
        return p;
      });
      setAddedProd(updatedCart);
    } else {
      setAddedProd(curr => [...curr, {
        ...product,
        quantity: 1
      }]);
    }
  };

  const remove = prod => {
    setAddedProd(curr => curr.filter(p => p.name !== prod.name))
  };

  const total = addedProd.reduce((acc, p) => acc + (p.price * p.quantity), 0);

  return (
    <>
      <div>
        <h1>Prodotti:</h1>
        {products.map((p, i) => (
          <div key={i} className="container">
            <p>{p.name}: {p.price.toFixed(2)}€</p>
            <button
              onClick={() => addToCart(p)}
            >
              Aggiungi al carrello
            </button>
          </div>
        ))}
      </div>

      {addedProd.length > 0 && (
        <div>
          <h2>Carrello:</h2>
          <ul>
            {addedProd.map((p, i) => (<>
              <div className="container">
                <li key={i}>
                  <p>{p.quantity} x {p.name} {(p.price * p.quantity).toFixed(2)}€</p>
                </li>
                <button
                  onClick={() => remove(p)}>
                  Elimina
                </button>
              </div>
            </>))}
          </ul>
          <h3>Totale: {total.toFixed(2)}€</h3>
        </div>
      )}
    </>
  );
}

export default App;
