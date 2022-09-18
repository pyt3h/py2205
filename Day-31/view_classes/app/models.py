from django.db import models
# Create your models here.
class Customer(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20, unique=True)
    address = models.CharField(max_length=200)
    def __str__(self): return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    def __str__(self): return self.name

class Order(models.Model):
    order_number = models.CharField(max_length=20,
                    unique=True)
    product = models.ForeignKey(Product,
                on_delete=models.PROTECT)
    customer = models.ForeignKey(Customer,
                on_delete=models.PROTECT)
    qty = models.IntegerField()
    price_unit = models.IntegerField()
    order_date = models.DateTimeField()