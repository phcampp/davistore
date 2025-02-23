// src/Products.js
import React, { useState } from 'react';
import './App.css';

function Products() {
  const [products] = useState([
    { id: 1, name: 'Card de Futebol', price: 'R$ 50,00', imageUrl: 'card-futebol.jpg', availability: 10, whatsappMessage: 'Quero comprar o card de futebol!' },
    { id: 2, name: 'Card de Anime', price: 'R$ 35,00', imageUrl: 'card-anime.jpg', availability: 5, whatsappMessage: 'Quero comprar o card de anime!' },
  ]);

  return (
    <div className="App">
      <header>
        <h1>Bem-vindo à Davvi Store</h1>
        <p>Venda de Cards: Futebol, Anime e muito mais!</p>
      </header>

      <div className="products-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Disponibilidade: {product.availability} unidades</p>
            <p className="price">{product.price}</p>
            <a 
              href={`https://wa.me/55SEUNUMERO?text=${encodeURIComponent(product.whatsappMessage)}`} 
              target="_blank" 
              className="whatsapp-btn"
            >
              Comprar no WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
