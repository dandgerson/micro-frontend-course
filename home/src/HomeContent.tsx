import React, { useEffect, useState } from "react";
import { currency, getProducts } from "./products";
import { addToCart, useLoggedIn } from 'cart/cart'

export default function HomeContent() {
  const loggedIn = useLoggedIn()
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  console.log({ products })

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />

          <div className="flex">
            <div className="flex-grow font-bold">
              <a href="">{product.name}</a>
            </div>

            <div className="flex-end">
              {currency.format(product.price)}
            </div>

            <div className="text-sm mt-4">
              {product.description}
            </div>

            {loggedIn && (
              <div className="text-right mt-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                  onClick={() => addToCart(product.id)}
                  id={`addtocart_${product.id}`}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
