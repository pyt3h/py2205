// Cho một xâu chứa ngày tháng dạng d/m/y, in ra từng thành phần d, m, y
let st = '8/6/2022';
let ds = st.split('/');
let [ngay,thang,nam]=ds;
console.log(`Ngày ${ngay}, tháng ${thang}, năm ${nam}`)