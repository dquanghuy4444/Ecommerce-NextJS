import Head from 'next/head'
import { getData } from '../ultis/fetch-data';
import { useState, useContext, useEffect } from 'react'
import ProductItem from '../components/product/productitem';

export default function Home(props) {
  const [products , setProducts] = useState(props.products);
  return (
    <div>
      <Head>
        <title>Home Page</title> 
      </Head>

      <div className="products">
        {
          products.length === 0 
          ? <h2>No Products</h2>

          : products.map(product => (
            <ProductItem key={product._id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export async function getServerSideProps(){
  const res = await getData("product");

  return {
    props:{
      products: res.products,
      result: res.result
    }
  }
}
