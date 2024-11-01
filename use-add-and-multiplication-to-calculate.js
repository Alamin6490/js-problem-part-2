//----Use add and multiplication to calculate wood requirements


function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairwood = 3;
    const perTablewood = 10;
    const perBedwood = 50;

    const chairTotalwood = chairQuantity * perChairwood;
    const tableTotalwood = tableQuantity * perTablewood;
    const bedTotalwood = bedQuantity * perBedwood;
    const totalWood = chairTotalwood + tableTotalwood + bedTotalwood;

    return totalWood;

}

const  wood = woodQuantity(0, 0, 1);
console.log('wood needed', wood);



//---- explain the code 
function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    // প্রতিটি চেয়ারের জন্য কাঠের প্রয়োজনীয় পরিমাণ
    const perChairwood = 3;
    // প্রতিটি টেবিলের জন্য কাঠের প্রয়োজনীয় পরিমাণ
    const perTablewood = 10;
    // প্রতিটি বিছানার জন্য কাঠের প্রয়োজনীয় পরিমাণ
    const perBedwood = 50;

    // চেয়ারের জন্য মোট কাঠের পরিমাণ
    const chairTotalwood = chairQuantity * perChairwood;
    // টেবিলের জন্য মোট কাঠের পরিমাণ
    const tableTotalwood = tableQuantity * perTablewood;
    // বিছানার জন্য মোট কাঠের পরিমাণ
    const bedTotalwood = bedQuantity * perBedwood;

    // চেয়ার, টেবিল, এবং বিছানার জন্য সমস্ত কাঠ যোগ করে মোট কাঠের পরিমাণ
    const totalWood = chairTotalwood + tableTotalwood + bedTotalwood;

    // মোট কাঠের পরিমাণ রিটার্ন করছে
    return totalWood;
}

// ০টি চেয়ার, ০টি টেবিল এবং ১টি বিছানার জন্য কাঠের পরিমাণ নির্ণয়
const wood = woodQuantity(0, 0, 1);
console.log('wood needed', wood); // কাঠের প্রয়োজনীয় পরিমাণ প্রদর্শন
