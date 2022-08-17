#orm_write.py
from orm import db, Customer

Customer.create(
    name='Nguyen Van Y',
    phone='043294324',
    address='TP.HCM'
)