import {useState, useEffect} from 'react'

function ProductArray(){

const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
       
      })
      .catch(error => console.error(error));
  }, []);

  
  return { products }

}

export default ProductArray;