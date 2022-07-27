# Dân số VN năm 2020 là 97.5
# Tốc độ tăng 1.1% / năm
# Đến năm ? ds --> 150 triệu
danso = 97.5
r = 1.1/100
y = 2020
while danso < 150:
    danso *= 1+r
    y += 1
    
print(y, danso)    