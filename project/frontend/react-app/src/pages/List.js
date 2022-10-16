import {Link} from "react-router-dom";
import Header from "components/Header";
import axios from "axios";
import { useEffect } from "react";
import { useSliceSelector, useSliceStore } from "utils/reduxHelper";

async function fetchProduct(searchParams) {
  const {data} = await axios.get('/api/search-product',
                    {params: searchParams});
  console.log('data=', data);
  return data;
}

function SearchBar() {
  return (
    <form action="#" className="">
      <div className="input-group">
        <input className="form-control" placeholder="Search" />
        <button className="btn btn-primary">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}

function Sidebar() {
  const {brandList} = useSliceSelector('app', ['brandList']);
  return (
    <div className="collapse card d-lg-block mb-5">
      <div className="filter-group">
        <div className="card-header">
          <a href="#/" className="title">
            Brands
          </a>
        </div>
        <div className="collapse show">
          <div className="card-body">
            {brandList.map(brand=>
              <label key={brand.id} className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked
                />
                <span className="form-check-label"> {brand.name} </span>
              </label>
            )}
            
          </div>
        </div>
      </div>

      <div className="filter-group">
        <div className="card-header">
          <a href="#/" className="title">
            Price
          </a>
        </div>
        <div className="collapse show">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-6">
                <label for="min" className="form-label">
                  Min
                </label>
                <input className="form-control" type="number" min="0" />
              </div>

              <div className="col-6">
                <label for="max" className="form-label">
                  Max
                </label>
                <input className="form-control" type="number" min="0" />
              </div>
            </div>
            <button className="btn btn-light w-100" type="button">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function ProductList() {
  const {productList} = useSliceSelector('app', ['productList']);
  return (
    <div className="row">
      {productList.map(product =>
        <div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
          <ProductItem product={product}/>
        </div>
      )}
    </div>
  );
}
function ProductItem({product}) {
  return (
    <div className="card card-product-grid">
      <div className="img-wrap">
        <Link to={"/detail/" + product.id}>
          <img alt="" src={axios.defaults.baseURL+product.image} />
        </Link>
      </div>
      <div className="info-wrap border-top">
        <div className="price-wrap">
          <strong className="price">${product.price.toFixed(2)}</strong>
        </div>
        <p className="title mb-2 text-decoration-none">
          {product.name}
        </p>

        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  )
}

function List() {
  const store = useSliceStore('app');
  async function init(){
    const result = await axios.get('/api/get-brand-list');
    const brandList = result.data;
    console.log('brandList=', brandList);
    const brandIds = brandList.map(b=>b.id).join(',');
    const {items} = await fetchProduct({brand_ids: brandIds});
    store.setState({brandList, productList: items});
  }
  useEffect(()=> init(), []);
  return (
    <>
      <Header>
        <SearchBar />
      </Header>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <ProductList/>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
