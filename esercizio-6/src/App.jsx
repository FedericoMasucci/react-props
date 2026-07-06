import { useState } from 'react'
import Product from './components/Product'
import Select from './components/Select'


function App() {
  const [filtro, setFiltro] = useState('tutti');


  const prods = [
    {
      id: 1,
      nome: 'T-Shirt',
      color: 'black',
      img: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFnbGlldHRlfGVufDB8fDB8fHww',
      brand: 'Nike',
      price: '€35,00'
    },
    {
      id: 2,
      nome: 'T-Shirt',
      color: 'white',
      img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFnbGlldHRhJTIwYmlhbmNhfGVufDB8fDB8fHww',
      brand: 'Nike',
      price: '€35,00',
    },
    {
      id: 3,
      nome: 'T-Shirt',
      color: 'black',
      img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D',
      brand: 'Adidas',
      price: '€30,00',
    },
    {
      id: 4,
      nome: 'Jeans',
      model: 'Skinny',
      img: 'https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGplYW5zfGVufDB8fDB8fHww',
      brand: 'Levis',
      price: '€60,00',
    },
    {
      id: 5,
      nome: 'Jeans',
      model: 'Baggy',
      img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudGFsb25pfGVufDB8fDB8fHww',
      brand: 'Levis',
      price: '€60,00',
    }
  ]
  const prodottiFiltrati = prods.filter((prod) => {
    switch (filtro) {
      case 'tutti':
        return true;
      case 'T-Shirt':
        return prod.nome === 'T-Shirt';
      case 'Tutti-jeans':
        return prod.nome === 'Jeans';
      case 'Tshirt-nera':
        return prod.nome === 'T-Shirt' && prod.color === 'black';
      case 'Tshirt-bianca':
        return prod.nome === 'T-Shirt' && prod.color === 'white';
      case 'brand-nike':
        return prod.brand === 'Nike';
      case 'jeans-baggy':
        return prod.nome === 'Jeans' && prod.model === 'Baggy';
      case 'jeans-levis':
        return prod.brand === 'Levis';

      default:
        return true;
    }

  });

  return (
    <>
      <Select valoreCorrente={filtro} quandoCambia={setFiltro} />
      <div className='row pt-4'>
        {prodottiFiltrati.map((prod) => {
          return (
            <Product
              key={prod.id}
              name={prod.nome}
              color={prod.color}
              model={prod.model}
              img={prod.img}
              brand={prod.brand}
              price={prod.price}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
