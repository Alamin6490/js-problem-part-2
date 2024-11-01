function  add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1/num2;
}

function calculator(a, b, operation) {
    if(operation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if (operation === 'subtract'){
const result = subtract(a, b);
return result;
    }
    else if(operation == 'multiply'){
        return multiply(a, b);
    }
    else if (operation === 'divide'){
        return divide(a, b);
    }
    else{
        return "only  'add', 'subtract', 'multiply', 'divide' operation is allowed. "
    }
}

const result = calculator(5, 7, 'divide');
return result;


//----explain the code----
```javascript
// দুটি সংখ্যা যোগ করার জন্য ফাংশন
function add(num1, num2) {
    const sum = num1 + num2; // সংখ্যা দুটি যোগ করে সংরক্ষণ করা
    return sum; // যোগফল রিটার্ন করা
}

// দুটি সংখ্যা বিয়োগ করার জন্য ফাংশন
function subtract(num1, num2) {
    return num1 - num2; // বিয়োগফল রিটার্ন করা
}

// দুটি সংখ্যা গুণ করার জন্য ফাংশন
function multiply(num1, num2) {
    return num1 * num2; // গুণফল রিটার্ন করা
}

// দুটি সংখ্যা ভাগ করার জন্য ফাংশন
function divide(num1, num2) {
    return num1 / num2; // ভাগফল রিটার্ন করা
}

// ক্যালকুলেটর ফাংশন: নির্দিষ্ট অপারেশনের উপর ভিত্তি করে গাণিতিক হিসাব করা
function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b); // যোগ করার অপারেশন
        return result;
    }
    else if (operation === 'subtract') {
        const result = subtract(a, b); // বিয়োগ করার অপারেশন
        return result;
    }
    else if (operation === 'multiply') {
        return multiply(a, b); // গুণ করার অপারেশন
    }
    else if (operation === 'divide') {
        return divide(a, b); // ভাগ করার অপারেশন
    }
    else {
        // শুধুমাত্র নির্দিষ্ট অপারেশন গুলো অনুমোদিত
        return "only 'add', 'subtract', 'multiply', 'divide' operation is allowed.";
    }
}

// ক্যালকুলেটর ফাংশনের মাধ্যমে ৫ এবং ৭ এর মধ্যে 'divide' অপারেশন করা
const result = calculator(5, 7, 'divide');
return result; // ফলাফল রিটার্ন করা
```