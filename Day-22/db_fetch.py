#db_fetch.py
from db_connect import db
cursor = db.cursor()
cursor.execute('select * from product')
product_list = cursor.fetchall()
print(product_list)
