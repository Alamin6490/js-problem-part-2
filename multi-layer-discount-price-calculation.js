/**
 * upto 100: ----> 100
 * more than 101-200:---> 90
 * more than 200: --> 70
 */

function discountedPrice(quantuty){
    if(quantity <= 100){
        const total = quantuty * 100;
        return total; }
        else if(quantity <= 200){
            const total = quantity * 90;
            return total; 
        }
        
        else{
            const total = quantity * 70;
            return total;
       
    }
}

const total = discountedPrice(5);
console.log(total);


//---------- explain the code ----
তোমার কোডটি একটি ফাংশন `discountedPrice` তৈরি করেছে, যা নির্দিষ্ট **discount rate** এর ভিত্তিতে `quantity` অনুযায়ী দাম গণনা করে। নিচে পুরো কোডে **কোডের প্রতিটি ধাপে মন্তব্য (Comment)** যোগ করেছি যাতে সহজে বোঝা যায়:

```javascript
/**
 * 100 বা তার কম পরিমাণ কিনলে প্রতি ইউনিটের দাম 100 টাকা
 * 101-200 পরিমাণ কিনলে প্রতি ইউনিটের দাম 90 টাকা
 * 200 এর বেশি পরিমাণ কিনলে প্রতি ইউনিটের দাম 70 টাকা
 */
function discountedPrice(quantity) {
    // যদি quantity 100 বা তার কম হয়, প্রতি ইউনিটের দাম হবে 100 টাকা
    if (quantity <= 100) {
        const total = quantity * 100; // মোট মূল্য = quantity * 100
        return total; // total ফেরত দিচ্ছে
    }
    // যদি quantity 101 থেকে 200 এর মধ্যে হয়, প্রতি ইউনিটের দাম হবে 90 টাকা
    else if (quantity <= 200) {
        const total = quantity * 90; // মোট মূল্য = quantity * 90
        return total; // total ফেরত দিচ্ছে
    }
    // যদি quantity 200 এর বেশি হয়, প্রতি ইউনিটের দাম হবে 70 টাকা
    else {
        const total = quantity * 70; // মোট মূল্য = quantity * 70
        return total; // total ফেরত দিচ্ছে
    }
}

// ফাংশন কল করা হচ্ছে এবং রেজাল্ট কনসোলে প্রিন্ট করছে
const total = discountedPrice(5);
console.log(total); // Output: 5 * 100 = 500
```

### সংক্ষেপে:
1. ফাংশন `quantity` অনুযায়ী তিনটি কন্ডিশন চেক করছে।
2. প্রতি কন্ডিশনে আলাদা দাম নির্ধারণ করা হয়েছে এবং গুণ করে `total` ফেরত দিচ্ছে।
3. কোডের শেষে ফাংশনটি ৫টি ইউনিটের জন্য কল করা হয়েছে, যা প্রতি ইউনিটে ১০০ টাকা হিসেবে ৫০০ রিটার্ন করবে। 

