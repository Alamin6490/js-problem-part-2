Find the cheapest phone from an array of phone objects


const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const cheap = getMin(prices);
console.log('cheapest one is: ', cheap);

//  ------explain the code -----
// একটি ফাংশন যা একটি অ্যারের মধ্যে সর্বনিম্ন সংখ্যা খুঁজে বের করে
function getMin(numbers) {
    // প্রথম সংখ্যাটিকে প্রাথমিকভাবে সর্বনিম্ন ধরে নিচ্ছি
    let min = numbers[0];
    
    // প্রতিটি সংখ্যার জন্য লুপ চালানো হচ্ছে
    for (const num of numbers) {
        // যদি বর্তমান সংখ্যা min থেকে ছোট হয়
        if (num < min) {
            // min আপডেট করে নতুন সর্বনিম্ন সংখ্যাটি সেট করা হচ্ছে
            min = num;
        }
    }
    
    // সর্বনিম্ন সংখ্যাটি রিটার্ন করা হচ্ছে
    return min;
}

// ফাংশনটি কল করা হচ্ছে এবং prices অ্যারের সর্বনিম্ন মান খুঁজে বের করা হচ্ছে
const cheap = getMin(prices);
console.log('cheapest one is: ', cheap); // সর্বনিম্ন মান প্রদর্শন করা হচ্ছে
