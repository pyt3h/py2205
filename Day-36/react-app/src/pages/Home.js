//src/pages/Home.js
function Home(){
  return (
    <div className="container mt-3">
      <div className="mb-3 row">
        <div className="col-6">
          <label className="mb-1">Nhóm sản phẩm:</label>
          <select className="form-control"></select>
        </div>
        <div className="col-6">
          <label className="mb-1">Tên sản phẩm:</label>
          <input className="form-control"/>
        </div>
      </div>
      <div className="mb-3 row">
        <div className="col-3">
          <label className="mb-1">Giá min:</label>
          <input type="number" min="0" className="form-control"/>
        </div>
        <div className="col-3">
          <label className="mb-1">Giá max:</label>
          <input type="number" min="0" className="form-control"/>
        </div>
        <div className="col-6">
          <br/>
          <button className="btn btn-primary">Tìm kiếm</button>
        </div>
      </div>
    </div>
  )
}
export default Home;