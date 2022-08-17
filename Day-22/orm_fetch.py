from orm import Customer

customer_list = Customer.select().where(
                    Customer.phone=='043423432')
for customer in customer_list:
    print(customer.name, customer.phone, customer.address)