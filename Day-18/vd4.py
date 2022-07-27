# Cho một xâu chứa ngày tháng dạng d/m/y, in ra từng thành phần d, m, y
st = '8/6/2022'
ds = st.split('/')
(ngay, thang, nam) = ds # unpack
print(f'Ngày {ngay}, tháng {thang}, năm {nam}')