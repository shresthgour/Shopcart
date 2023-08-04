import { React, useEffect, useState } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

const Products = () => {

  const [products, setProducts] = useState([]);

  const updateProducts = async () => {
    const url = `https://dummyjson.com/products?limit=16`;
    let data = await fetch(url);
		let parsedData = await data.json();
    setProducts(parsedData.products)
  }

  useEffect(() => {
    updateProducts()
  }, [])

  return (
    <>
    <div className=''>
      <h1 className='text-2xl text-black pl-24 font-bold'>Headphones For You!</h1>
    </div>

    <div className='p-10 '>
      <div className='grid grid-rows-4 grid-flow-col gap-4'>
        {products.map((element) => {
          return (
            <div className='' key={element.id}>
              <Link to={{ pathname: `/product/${element.id}`, state: { product: element } }} key={element.id}>
                <Product
                  title={element.title ? element.title : ''}
                  price={element.price ? element.price : ''}
                  description={element.description ? element.description : ''}
                  thumbnail={element.thumbnail ? element.thumbnail : ''}
                />
              </Link>
            </div>
          )
        })}
      </div>
    </div>

    </>
  )
}

export default Products