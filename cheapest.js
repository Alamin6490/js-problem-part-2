const phones = [
    {name:'samsung', price: 20000, camera: '12mp', color: 'black'},
    {name:'xoami', price: 18000, camera: '12mp', color: 'black'},
    {name:'oppo', price: 30000, camera: '12mp', color: 'black'},
    {name:'Iphone', price: 200000, camera: '12mp', color: 'black'},
    {name:'Walton', price: 32000, camera: '12mp', color: 'black'},
    {name:'HTC', price: 27000, camera: '12mp', color: 'black'},
    
]

function getCheapestPhone(phones){
    const min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
          min = phone   
        }
        console.log(phones);
    }
    return min; 
}
const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is:', cheap);


// explain the code 
নিচে প্রতিটি লাইনের জন্য বাংলা ভাষায় মন্তব্য দেওয়া হলো:

```javascript
// ফোনগুলোর একটি লিস্ট যেখানে প্রতিটি ফোনের নাম, দাম, ক্যামেরা, এবং রঙ উল্লেখ করা আছে
const phones = [
    {name: 'samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'xoami', price: 18000, camera: '12mp', color: 'black'},
    {name: 'oppo', price: 30000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 200000, camera: '12mp', color: 'black'},
    {name: 'Walton', price: 32000, camera: '12mp', color: 'black'},
    {name: 'HTC', price: 27000, camera: '12mp', color: 'black'},
];

// একটি ফাংশন যা ফোনগুলোর মধ্যে সবচেয়ে কম দামের ফোন খুঁজে বের করে
function getCheapestPhone(phones) {
    let min = phones[0]; // প্রাথমিকভাবে প্রথম ফোনটিকে সর্বনিম্ন ধরে নিচ্ছি
    
    // প্রতিটি ফোনের জন্য লুপ চালানো হচ্ছে
    for (const phone of phones) {
        // যদি বর্তমান ফোনের দাম min এর দামের চেয়ে কম হয়
        if (phone.price < min.price) {
            min = phone; // min আপডেট করে বর্তমান ফোনটি সেট করা হচ্ছে
        }
        console.log(phones); // প্রতিটি লুপের সময় ফোনগুলোর তালিকা দেখাচ্ছে
    }
    
    // সর্বনিম্ন দামের ফোনটি রিটার্ন করা হচ্ছে
    return min;
}

// ফাংশনটি কল করে সবচেয়ে কম দামের ফোন খুঁজে বের করা হচ্ছে
const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is:', cheap); // সবচেয়ে কম দামের ফোন প্রদর্শন করা হচ্ছে
```

> **Note:** এখানে `min` ভেরিয়েবলটি `let` দিয়ে ডিক্লেয়ার করতে হবে কারণ `const` ব্যবহার করলে `min` ভেরিয়েবলটি লুপে আপডেট করা যাবে না।