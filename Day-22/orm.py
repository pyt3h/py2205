#orm.py
from peewee import *
db = MySQLDatabase(
    'py2205_orm',
    host='127.0.0.1', 
    user='admin', passwd='abc@123', 
    charset='utf8mb4'
)
class Customer(Model):
    name = CharField()
    phone = CharField()
    address = CharField()
    class Meta:
        database = db

db.create_tables([Customer])
