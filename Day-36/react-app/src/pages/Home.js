import {useState} from "react";

//src/pages/Home.js
function Home(){
  const baseUrl = 'http://127.0.0.1:8000/api/search-product';
  const [keyword, setKeyword] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [items, setItems] = useState([]);
  async function search(){
    let url = `${baseUrl}?keyword=${encodeURI(keyword)}`;
    url += `&min_price=${minPrice}`;
    url += `&max_price=${maxPrice}`;
    //alert(url);
    let resp = await fetch(url);;
    let productList = await resp.json();
    console.log(productList);
    setItems(productList);
  }
  return (
    <div className="container mt-3">
      <div className="mb-3 row">
        <div className="col-6">
          <label className="mb-1">Nhóm sản phẩm:</label>
          <select className="form-control"></select>
        </div>
        <div className="col-6">
          <label className="mb-1">Tên sản phẩm:</label>
          <input className="form-control"
            value={keyword} onChange={e => setKeyword(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <div className="col-3">
          <label className="mb-1">Giá min:</label>
          <input type="number" min="0" className="form-control"
            value={minPrice} onChange={e => setMinPrice(e.target.value)}
          />
        </div>
        <div className="col-3">
          <label className="mb-1">Giá max:</label>
          <input type="number" min="0" className="form-control"
            value={maxPrice} onChange={e => setMaxPrice(e.target.value)}
          />
        </div>
        <div className="col-6">
          <br/>
          <button onClick={search} className="btn btn-primary">Tìm kiếm</button>
        </div>
      </div>
      <ul>
        {items.map(it => <li key={it.id}>{it.name}</li>)}
      </ul>
      <table className="table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Nhóm</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          {items.map(it => <tr key={it.id}></tr>)}
        </tbody>
      </table>
    </div>
  )
}
export default Home;