let product_list =[
    {name:'IPhone X', price: 10.5},
    {name:'IPhone 11', price: 11.5},
    {name:'Galaxy S3', price: 7.5},
    {name:'Galaxy S4', price: 8.5},
];
let [price_min, price_max] = [10, 15];
let n = product_list.length;
for(let i=0; i < n; i++){                   // for i in range(n)
    let product = product_list[i];
    if(price_min <= product.price && product.price <= price_max){
        console.log(product.name, product.price);
    }
}
let result = product_list
                .filter(
                    p => p.price>=price_min 
                    && p.price <= price_max
                ).map(p => p.name)
//result = [product['name'] for product in product_list 
//          if price_min <= product['price'] <= price_max
//         ]                
console.log(result);        