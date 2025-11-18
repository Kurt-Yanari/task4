import React from 'react';

const products = [
  { id: 1, name: 'Ноутбук', price: 50000 },
  { id: 2, name: 'Мышь', price: 1500 },
  { id: 3, name: 'Клавиатура', price: 3500 }
];

export default function ProductList() {
  return (
    <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, fontSize: 17 }}>
      {products.map(product => {
        let icon = '';
        if (product.price > 10000) icon = '🔥';
        else if (product.price <= 2000) icon = '💸';

        return (
          <li key={product.id} style={{ marginBottom: 8 }}>
            {product.name} {icon} - {product.price} руб.
          </li>
        );
      })}
    </ul>
  );
}
