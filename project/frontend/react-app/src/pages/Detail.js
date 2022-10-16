import Header from "components/Header";
import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {useSliceStore} from "utils/reduxHelper";

function addItemToCart(store, product, qty){
  let {cartList} = store.getState();
  cartList = cartList.map(cart => ({...cart}));
  const cart = cartList.find(c => c.product.id===product.id);
  if(cart){
    cart.qty += parseInt(qty);
  }else{
    cartList.push({qty:parseInt(qty), product});
  }
  console.log('cartList=',cartList);
  store.setState({cartList});
}

function Detail() {
  const navigate = useNavigate();
  const store = useSliceStore('app');
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const {id} = useParams();
  async function init(){
    const {data} = await axios.get('/api/get-product-detail/'+id);
    console.log('data=', data);
    setProduct(data);
  }
  useEffect(function(){init()}, []);
  function addToCart() {
    addItemToCart(store, product, qty);
    navigate('/');
  }
  function buyNow() {
    addItemToCart(store, product, qty);
    navigate('/cart');
  }
  return (
    <>
      <Header/>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-6">
            <article className="gallery-wrap">
              <div className="img-big-wrap img-thumbnail">
                <a href="#/">
                  <img alt="" height="560" style={{width:"100%"}}
                    src={axios.defaults.baseURL+product.image} />
                </a>
              </div>
            </article>
          </div>
          <div className="col-lg-6">
            <article className="ps-lg-3">
              <h4 className="title text-dark">
                {product.name}
              </h4>

              <div className="my-3">
                <var className="price h5">${product.price}</var>
              </div>

              <p>
                {product.description}
              </p>

              <div className="row mb-4">
                <div className="col-md-4 col-6 mb-3 d-flex">
                  <label className="form-label mt-2 me-2">
                    <b>Quantity:</b>
                  </label>
                  <input className="form-control" 
                    type="number" min="1" 
                    value={qty}
                    onChange={e => setQty(e.target.value)}
                  /> 
                </div>
              </div>

              <button onClick={addToCart} className="btn btn-primary me-1">
                <i className="fa fa-shopping-basket"></i> Add to cart
              </button>
              {" "}
              <button onClick={buyNow} className="btn btn-warning">
                Buy now
              </button>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
