// redux/reducers/appReducer.js
const initialState = {
  keyword: '', min_price: '', max_price: '', category_id: '',
  total:0, items:[],
  page:1,
  counter: 0
}

const reducer = (state=initialState, action) => {
  return state;
}

export default reducer;