const numbers = [300, 100, 700,1200];

const products = [
    {name: 'shampoo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 400},
    {name: 'pant', price: 700},

]

function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
        
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('total ajke khosabe: ', total);



//---------explain the ccode-------
// ক্রয়ের সামগ্রীর তালিকা
const numbers = [300, 100, 700, 1200];

// পণ্যের তালিকা ও তাদের দাম সহ
const products = [
    {name: 'shampoo', price: 300}, // শ্যাম্পুর দাম
    {name: 'chiruni', price: 100}, // চিরুনির দাম
    {name: 'shirt', price: 400}, // শার্টের দাম
    {name: 'pant', price: 700}, // প্যান্টের দাম
];

// ক্রয়ের মোট দাম গণনা করার জন্য ফাংশন
function getShoppingTotal(products){
    let total = 0; // মোট দাম ০ দিয়ে শুরু করা
    for(const product of products){
        total = total + product.price; // প্রতিটি পণ্যের দাম মোটের সাথে যোগ করা
    }
    return total; // মোট দাম রিটার্ন করা
}

// ক্রয়ের মোট দাম সংরক্ষণ করা
const total = getShoppingTotal(products);
console.log('total ajke khosabe: ', total); // আউটপুটে মোট দাম প্রদর্শন করা
