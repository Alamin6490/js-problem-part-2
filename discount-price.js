/**
 * first100 ---> 100
 * 101To200 ---> 90
 * qbove200 --> 70
 */

function layerDiscountedTotal (quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if (quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity =  quantity - 100;
        const reamainingTotal = remainingQuantity * second100Price;
        const total = first100Total + reamainingTotal;
        return total;
    }
    else{
       const first100Total = 100 * first100Price;
       const second100Total = 100 *second100Price; 
       const remainingQuantity = quantity - 200;
       const remainingTotal = remainingQuantity * above200Price;
       const total = first100Price + second100Price + remainingTotal;
       return total;
    }
}


// -------explain the code 
/**
 * প্রথম ১০০টি পণ্যের জন্য দাম: ১০০
 * ১০১ থেকে ২০০ পর্যন্ত পরবর্তী পণ্যের জন্য দাম: ৯০
 * ২০০ এর পরবর্তী প্রতিটি পণ্যের জন্য দাম: ৭০
 */

function layerDiscountedTotal(quantity) {
    const first100Price = 100; // প্রথম ১০০টি পণ্যের ইউনিট মূল্য
    const second100Price = 90; // ১০১ থেকে ২০০ এর মধ্যে পণ্যের ইউনিট মূল্য
    const above200Price = 70;  // ২০০ এর উপরে প্রতিটি পণ্যের ইউনিট মূল্য

    if (quantity <= 100) {
        // যদি পরিমাণ ১০০ বা তার কম হয়
        const total = quantity * first100Price; // মোট খরচ: ইউনিট মূল্য * পরিমাণ
        return total; // মোট খরচ রিটার্ন করা
    } else if (quantity <= 200) {
        // যদি পরিমাণ ১০০ থেকে ২০০ এর মধ্যে হয়
        const first100Total = 100 * first100Price; // প্রথম ১০০টির জন্য মোট খরচ
        const remainingQuantity = quantity - 100;  // অবশিষ্ট পরিমাণ
        const remainingTotal = remainingQuantity * second100Price; // অবশিষ্ট অংশের জন্য মোট খরচ
        const total = first100Total + remainingTotal; // মোট খরচ যোগ করা
        return total; // মোট খরচ রিটার্ন করা
    } else {
        // যদি পরিমাণ ২০০ এর উপরে হয়
        const first100Total = 100 * first100Price; // প্রথম ১০০টির জন্য মোট খরচ
        const second100Total = 100 * second100Price; // পরবর্তী ১০০টির জন্য মোট খরচ
        const remainingQuantity = quantity - 200;  // ২০০ এর পরবর্তী পরিমাণ
        const remainingTotal = remainingQuantity * above200Price; // অবশিষ্ট অংশের জন্য মোট খরচ
        const total = first100Total + second100Total + remainingTotal; // সব যোগ করে মোট খরচ
        return total; // মোট খরচ রিটার্ন করা
    }
}
