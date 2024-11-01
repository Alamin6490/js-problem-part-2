const products = [
    
    {name: 'shampoo', price: 100, quantity:5    },
    {name: 'chiruni', price: 300, quantity:5   },
    {name: 'shirt',   price: 500, quantity:5    },
    {name: 'pant',    price: 700, quantity:5    },

]
function cartTotal (products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
         total = total + thisProductCost;
    }
    return total;
}
const shoppingCost = cartTotal(products);
console.log(shoppingCost);


//--------explain the code-----
```javascript
// পণ্যের তালিকা, প্রতিটি পণ্যের নাম, দাম এবং পরিমাণ সহ
const products = [
    {name: 'shampoo', price: 100, quantity: 5}, // শ্যাম্পুর দাম এবং পরিমাণ
    {name: 'chiruni', price: 300, quantity: 5}, // চিরুনির দাম এবং পরিমাণ
    {name: 'shirt', price: 500, quantity: 5},   // শার্টের দাম এবং পরিমাণ
    {name: 'pant', price: 700, quantity: 5},    // প্যান্টের দাম এবং পরিমাণ
];

// কার্টের মোট খরচ গণনা করার জন্য ফাংশন
function cartTotal(products) {
    let total = 0; // মোট খরচ ০ দিয়ে শুরু করা
    for(const product of products) {
        // প্রতিটি পণ্যের মোট খরচ গণনা করা (দাম * পরিমাণ)
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost; // মোট খরচে যোগ করা
    }
    return total; // মোট খরচ রিটার্ন করা
}

// ক্রয়ের মোট খরচ সংরক্ষণ করা
const shoppingCost = cartTotal(products);
// মোট খরচ আউটপুটে প্রদর্শন করা
console.log(shoppingCost);
```