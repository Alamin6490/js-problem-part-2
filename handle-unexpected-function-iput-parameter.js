function multiply(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(5, 'seven ');
//console.log(result);

function fullName (first, second){
    if(typeof first !== 'string'){
        return 'please provide a string'
    }
    else if(typeof second !== 'string'){
        return 'second Name should be a string';
    }
    const full = first + '' + second;
    return full;
}

const full = fullName ('Akmal')
//console.log(full);
function getPrice(product){
    if(typeof product !== 'object') {
        return 'please provide an object'

    }
    const price = product.price;
    return price;
}

const price = getPrice({ name: 'chulkani dandi', price: 35, color: 'blue'})
 const price = getprice(5)
//console.log(price)
 
function getSecond(numbers){
    if(Array.isArray(numbers) == false ){
        return 'please provide an array'

    }
    const second = numbers[ 1];
    return second;
}
const second = getSecond( [45,61,2])
console.log(second)



//-----explain the code ----



এই উদাহরণগুলোতে আমরা বিভিন্ন ফাংশন তৈরি করেছি, যা নির্দিষ্ট ধরনের ইনপুট নিয়ে কাজ করে। কিন্তু যদি ভুল ইনপুট দেওয়া হয়, তখন এগুলো সঠিক আউটপুট দিতে পারবে না। তাই আমরা ইনপুট যাচাই করে নিশ্চিত করছি যেন ইনপুট সঠিক ধরনের হয়। ইনপুট সঠিক না হলে, ফাংশন একটি বার্তা রিটার্ন করছে, যা ব্যবহারকারীকে সঠিক ইনপুট দিতে সাহায্য করে।

প্রতি ফাংশন এবং তার ইনপুট যাচাই নিয়ে নিচে সহজ ব্যাখ্যা দেওয়া হলো:

### ১. গুণ করার ফাংশন (multiply)
এই ফাংশনে দুটি সংখ্যার গুণফল নির্ণয় করা হচ্ছে। 
- প্রথমে আমরা যাচাই করছি যে `num1` এবং `num2` সত্যিই সংখ্যা কিনা।
- যদি সংখ্যা না হয়, তাহলে একটি বার্তা দেখাবে: `"please provide a number"`।
- আর ইনপুট সংখ্যা হলে গুণফল রিটার্ন করবে।

```javascript
function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please provide a number'; // সংখ্যা না হলে বার্তা
    }
    return num1 * num2; // সঠিক হলে গুণফল রিটার্ন
}

console.log(multiply(5, 'seven')); // 'please provide a number' দেখাবে কারণ 'seven' সংখ্যা নয়
```

### ২. পূর্ণ নাম তৈরির ফাংশন (fullName)
এই ফাংশন দুটি স্ট্রিং নিয়ে একটি পূর্ণ নাম তৈরি করে। 
- প্রথমে যাচাই করছি যে `first` এবং `second` ইনপুট স্ট্রিং কিনা।
- যদি স্ট্রিং না হয়, তাহলে সংশ্লিষ্ট বার্তা দেখাবে।
- স্ট্রিং হলে পুরো নাম রিটার্ন করবে।

```javascript
function fullName(first, second) {
    if (typeof first !== 'string') {
        return 'please provide a string'; // প্রথমটি স্ট্রিং না হলে বার্তা
    } else if (typeof second !== 'string') {
        return 'second Name should be a string'; // দ্বিতীয়টি স্ট্রিং না হলে বার্তা
    }
    return first + ' ' + second; // সঠিক হলে পূর্ণ নাম রিটার্ন
}

console.log(fullName('Akmal', 'Khan')); // Akmal Khan
console.log(fullName('Akmal', 5)); // 'second Name should be a string' কারণ দ্বিতীয়টি স্ট্রিং নয়
```

### ৩. পণ্যের দাম বের করার ফাংশন (getPrice)
এই ফাংশন একটি অবজেক্ট থেকে `price` বের করে। 
- প্রথমে যাচাই করছি যে ইনপুটটি একটি অবজেক্ট কিনা।
- যদি অবজেক্ট না হয়, তাহলে বার্তা রিটার্ন করবে।
- অবজেক্ট হলে, তার `price` রিটার্ন করবে।

```javascript
function getPrice(product) {
    if (typeof product !== 'object') {
        return 'please provide an object'; // অবজেক্ট না হলে বার্তা
    }
    return product.price; // সঠিক হলে দাম রিটার্ন
}

console.log(getPrice({ name: 'chulkani dandi', price: 35 })); // 35
console.log(getPrice(5)); // 'please provide an object' কারণ ইনপুট অবজেক্ট নয়
```

### ৪. অ্যারের দ্বিতীয় উপাদান পাওয়ার ফাংশন (getSecond)
এই ফাংশন একটি অ্যারের দ্বিতীয় উপাদান রিটার্ন করে।
- প্রথমে যাচাই করা হচ্ছে ইনপুটটি অ্যারে কিনা।
- যদি অ্যারে না হয়, তাহলে বার্তা রিটার্ন করবে।
- সঠিক অ্যারে হলে দ্বিতীয় উপাদান রিটার্ন করবে।

```javascript
function getSecond(numbers) {
    if (Array.isArray(numbers) === false) {
        return 'please provide an array'; // অ্যারে না হলে বার্তা
    }
    return numbers[1]; // সঠিক হলে দ্বিতীয় উপাদান রিটার্ন
}

console.log(getSecond([45, 61, 2])); // 61
console.log(getSecond(45)); // 'please provide an array' কারণ ইনপুট অ্যারে নয়
```

### সারসংক্ষেপ
আমরা প্রতিটি ফাংশনে ইনপুট চেক করে নিশ্চিত করছি যে ইনপুট সঠিক। এই পদ্ধতিকে ইনপুট যাচাই বলা হয়, এবং এটি প্রোগ্রামকে আরও রিলায়েবল এবং বাগমুক্ত করে তোলে।






```javascript
// দুটি সংখ্যা গুণ করার ফাংশন
function multiply(num1, num2) {
    // চেক করা যে উভয় ইনপুট সংখ্যাগুলি কিনা
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please provide a number'; // ইনপুট সংখ্যা না হলে একটি বার্তা প্রদান করা
    }
    const mult = num1 * num2; // দুটি সংখ্যা গুণ করা
    return mult; // গুণফল রিটার্ন করা
}

const result = multiply(5, 'seven '); // গুণ করার জন্য ফাংশন কল করা
//console.log(result); // আউটপুট প্রদর্শন

// দুটি স্ট্রিং যোগ করে পূর্ণ নাম তৈরির ফাংশন
function fullName(first, second) {
    if (typeof first !== 'string') {
        return 'please provide a string'; // প্রথম ইনপুট স্ট্রিং না হলে বার্তা প্রদান
    } else if (typeof second !== 'string') {
        return 'second Name should be a string'; // দ্বিতীয় ইনপুট স্ট্রিং না হলে বার্তা প্রদান
    }
    const full = first + ' ' + second; // প্রথম ও দ্বিতীয় ইনপুট যোগ করা
    return full; // পূর্ণ নাম রিটার্ন করা
}

const full = fullName('Akmal'); // ফাংশন কল করা
//console.log(full); // আউটপুট প্রদর্শন

// পণ্যের দাম নির্ণয়ের জন্য ফাংশন
function getPrice(product) {
    if (typeof product !== 'object') {
        return 'please provide an object'; // ইনপুট অবজেক্ট না হলে বার্তা প্রদান
    }
    const price = product.price; // পণ্যের দাম নেওয়া
    return price; // দাম রিটার্ন করা
}

const price1 = getPrice({ name: 'chulkani dandi', price: 35, color: 'blue' }); // ফাংশন কল করা
const price2 = getPrice(5); // ফাংশনে অবজেক্ট নয় এমন ইনপুট
//console.log(price1); // প্রথম আউটপুট প্রদর্শন
//console.log(price2); // দ্বিতীয় আউটপুট প্রদর্শন

// একটি অ্যারের দ্বিতীয় উপাদান পাওয়ার জন্য ফাংশন
function getSecond(numbers) {
    if (Array.isArray(numbers) === false) {
        return 'please provide an array'; // ইনপুট অ্যারে না হলে বার্তা প্রদান
    }
    const second = numbers[1]; // অ্যারের দ্বিতীয় উপাদান গ্রহণ
    return second; // দ্বিতীয় উপাদান রিটার্ন করা
}

const second = getSecond([45, 61, 2]); // ফাংশন কল করা
console.log(second); // আউটপুট প্রদর্শন
```

এই ইনপুট যাচাইয়ের কনসেপ্ট আমাদের দৈনন্দিন জীবনের নানা ক্ষেত্রে কাজে লাগে। এখানে কয়েকটি বাস্তব উদাহরণ দেয়া হলো:

### ১. ATM মেশিনে পিন চেক করা
যখন আমরা ATM মেশিন ব্যবহার করে টাকা তুলতে যাই, প্রথমেই আমাদের একটি পিন দিতে হয়। 
- পিন যদি ভুল হয়, তাহলে মেশিন আমাদের পিন ফেরত চেয়ে সঠিক পিন দেওয়ার বার্তা দেয়।
- কিন্তু যদি পিন সঠিক হয়, তাহলে মেশিন টাকা উত্তোলনের অনুমতি দেয়। 

এখানে পিন চেকিং প্রক্রিয়া একটি ইনপুট যাচাইয়ের উদাহরণ।

### ২. মোবাইল অ্যাপসে লগইন
কোনো অ্যাপসে লগইন করতে গেলে ইউজারনেম ও পাসওয়ার্ড দিতে হয়। 
- যদি ইউজারনেম বা পাসওয়ার্ড ভুল হয়, তখন অ্যাপ একটি বার্তা দেয়, যেমন "Incorrect Username or Password"।
- ইউজারনেম ও পাসওয়ার্ড সঠিক হলে অ্যাপ আমাদের অ্যাকাউন্টে প্রবেশের অনুমতি দেয়।

এখানে ইউজারনেম এবং পাসওয়ার্ড যাচাইয়ের প্রক্রিয়াটি ইনপুট যাচাই।

### ৩. ফরম পূরণে ইনপুট যাচাই
কোনো ফরম পূরণ করার সময় যেমন, কলেজে ভর্তির ফরম, যেখানে নাম, বয়স, ফোন নম্বর, ইমেইল ইত্যাদি পূরণ করতে হয়।
- যদি বয়সের ক্ষেত্রে নম্বরের পরিবর্তে কিছু লিখি, তখন ফরম এটিকে গ্রহণ করবে না এবং বার্তা দেবে: "Please enter a valid number"।
- যদি ইমেইল অ্যাড্রেস ভুল থাকে, তখনও ফরম একটি বার্তা দেয়: "Invalid email address"।
  
এই চেকিংগুলো আমাদের নিশ্চিত করে যে, তথ্য সঠিক ফরম্যাটে এবং সঠিকভাবে দেওয়া হয়েছে।

### ৪. ই-কমার্স সাইটে কার্টে যোগ করা
যখন আমরা কোনো ই-কমার্স সাইটে কোনো পণ্য কার্টে যোগ করি:
- যদি আমরা একটি সংখ্যার বদলে বর্ণ দিয়ে পরিমাণ লিখি, তখন সাইট আমাদের বলবে "Please enter a valid quantity"।
- আর যদি সঠিক সংখ্যা দেই, তাহলে সেই পণ্যটি কার্টে যুক্ত হয়ে যাবে এবং কেনাকাটায় আগাতে পারবো।

এগুলো ইনপুট যাচাই করে ব্যবহারকারীর সঠিক ইনপুট নিশ্চিত করে।