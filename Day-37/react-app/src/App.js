import axios from "axios";
import {
  useSliceStore, useSliceSelector
}from "utils/reduxHelper";

const PAGE_SIZE = 5;
axios.defaults.baseURL = 'http://127.0.0.1:8000';

async function fetchProductList(searchParams) {
  const {data} = await axios.get('/api/search-product', {params:searchParams});
  return data;
}

function SearchPanel(){
  const {
    keyword, min_price, max_price, category_id
  } = useSliceSelector('app',
    ['keyword', 'min_price', 'max_price', 'category_id']
  );
  const store = useSliceStore('app');
  function onChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    store.setState({[key]: value});
  }
  async function search(){
    const {total, items} = await fetchProductList(
                  {keyword, min_price, max_price});
    console.log('total=', total);
    console.log('items= ', items);
    store.setState({total, items, page:1});
  }
  return(
    <>
      <div className="mb-3 row">
        <div className="col-6">
          <label className="mb-1">Nhóm sản phẩm:</label>
          <select className="form-control"></select>
        </div>
        <div className="col-6">
          <label className="mb-1">Tên sản phẩm:</label>
          <input className="form-control"
            name="keyword" value={keyword} onChange={onChange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <div className="col-3">
          <label className="mb-1">Giá min:</label>
          <input type="number" min="0" className="form-control"
            name="min_price" value={min_price} onChange={onChange}
          />
        </div>
        <div className="col-3">
          <label className="mb-1">Giá max:</label>
          <input type="number" min="0" className="form-control"
            name="max_price" value={max_price} onChange={onChange}
          />
        </div>
        <div className="col-6">
          <br/>
          <button onClick={search} className="btn btn-primary">Tìm kiếm</button>
        </div>
      </div>
    </>
  )
}
function ProductTable(){
  const {items} = useSliceSelector('app', ['items']);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nhóm</th>
          <th>Tên</th>
          <th>Giá</th>
        </tr>
      </thead>
      <tbody>
        {items.map(it =>
          <tr key={it.id}>
            <td>{it.category_name}</td>
            <td>{it.name}</td>
            <td>{it.price} đ</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
function Pagination(){
  const {total, page} = useSliceSelector('app',
        ['total','page']);
  const start = (page-1)*PAGE_SIZE;
  const end = Math.min(total, start+PAGE_SIZE);
  const maxPage = Math.ceil(total/PAGE_SIZE);
  const store = useSliceStore('app');
  async function setPage(newPage){
    if(newPage<1 || newPage > maxPage) return;
    const {keyword, min_price, max_price} = store.getState();
    const start =(newPage-1)*PAGE_SIZE;
    const length = PAGE_SIZE;
    const params = {
      keyword, min_price, max_price, start, length
    };
    const {total, items} = await fetchProductList(params);
    store.setState({total, items, page:newPage});
  }
  if(total===0) return <div>Không có sản phẩm</div>;
  return(
   <div>
      <div>Hiển thị {start+1}-{end} trên tổng số {total} bản ghi</div>
      <a href="#/" onClick={() => setPage(page-1)}>Trước</a> 
      {" "}
      <a href="#/" onClick={() => setPage(page+1)}>Tiếp</a>
   </div> 
  )
}

function App(){
  return (
    <div className="container mt-3">
      <SearchPanel/>
      <ProductTable/>
      <Pagination/>
    </div>
  );
}

export default App;
