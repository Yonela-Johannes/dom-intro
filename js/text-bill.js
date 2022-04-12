// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector('.billTypeText')
//get a reference to the add button
const addToBillBtn = document.querySelector('.addToBillBtn')
// get reference to the red class
const totalColor = document.querySelector('.totalColor')
const totalOne = document.querySelector('.totalOne')
//create a variable that will keep track of the total bill
let totalBill = 0, callTotal = 0, smsTotal = 0, smsCost = .75, callCost = 2.75

// THIS IS A SECTION THAT I CREATED THAT DYNAMICALLY UPDATES THE STATIC VALUES ON HTML PAGE
// get refference to total call one and sms total one
let totalCallOne = document.querySelector('.callTotalOne')
let totalSmsOne = document.querySelector('.smsTotalOne')

let ErrorInputMessage = 'error input!'
totalCallOne.innerHTML = callTotal.toFixed(2)
totalSmsOne.innerHTML = smsTotal.toFixed(2)
totalOne.innerHTML = totalBill.toFixed(2)

//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
addToBillBtn.addEventListener('click', () => {

    billTypeText.value == '' && billTypeText.setAttribute('placeholder', `${ErrorInputMessage} enter sms or call`)
    let sms = billTypeText.value, call = billTypeText.value

    if (sms.toLowerCase() == 'sms') {
        sms.toLowerCase() == 'sms' ? smsTotal += smsCost : smsTotal = 0
        totalBill = smsTotal
    }
    if (call.toLowerCase() == 'call') {
        call.toLowerCase() == "call" ? callTotal += callCost : callTotal = 0
        totalBill = callTotal
    }

    else if (billTypeText.value !== 'sms' || billTypeText.value !== 'call') {
        billTypeText.setAttribute('placeholder', `${ErrorInputMessage} enter sms or call`)
    };

    totalBill = smsTotal + callTotal
    // assigning totals to screen
    totalSmsOne.innerHTML = smsTotal.toFixed(2)
    totalCallOne.innerHTML = callTotal.toFixed(2)

    // * add the appropriate value to the running total
    // * display the latest total on the screen

    totalOne.innerHTML = totalBill.toFixed(2)

    // color toggles on the screen
    if (totalBill > 30 & totalBill < 50) {
        totalColor.classList.add('warning')
    } else if (totalBill > 50) {
        totalColor.classList.remove('warning')
        totalColor.classList.add('danger')
    }
});


