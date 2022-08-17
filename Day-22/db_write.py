# db_write.py
from db_connect import db
customer = (
    'Nguyễn Văn X',
    '042342355',
    'Hà Nội'
)
cursor = db.cursor()
cursor.execute('''
INSERT INTO customer(name,phone,address)
VALUES(%s,%s,%s)''', customer)
db.commit()