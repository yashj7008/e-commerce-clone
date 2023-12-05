import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import { STATUSES } from '../store/productSlice'
import { add } from '../store/cartSlice'


const Products = () => {
  // Destructuring state and status from the Redux store
  const { data: products, status } = useSelector((state) => state.products);

  // Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle adding a product to the cart
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  // useEffect hook to fetch products when the component mounts
  useEffect(() => {
    const getProducts = async () => {
      dispatch(fetchProducts());
    };
  
    getProducts();
  
  }, [dispatch]); // Include 'dispatch' in the dependency array
   // Empty dependency array means this effect runs once after the initial render

  // Conditional rendering based on the status of the products fetching
  if (status === STATUSES.LOADING) {
    return <h2>Loading</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something is Wrong</h2>;
  }

  // Render the product cards
  return (
    <div>
      <div className='productsWrapper'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} alt={`Product: ${product.title}`} />
            <h6>{product.title}</h6>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className='btn'>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
