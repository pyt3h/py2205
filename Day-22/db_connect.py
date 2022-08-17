import MySQLdb # pip install mysqlclient
db_host = 'pyt3h.com' # '127.0.0.1'
db_user = 'admin'
db_pass = 'abc@123'
db_name = 'py2205_shop'
db = MySQLdb.connect(
    db_host, db_user, db_pass, db_name,
    charset='utf8'
)
print('Connected.')
