import TextBillFactory from "./text-bill-factory.js"
const textBill = TextBillFactory()
// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector('.billTypeText')
//get a reference to the add button
const addToBillBtn = document.querySelector('.addToBillBtn')
// get reference to the red class
const totalColor = document.querySelector('.totalColor')
const totalOne = document.querySelector('.totalOne')
//create a variable that will keep track of the total bill

// THIS IS A SECTION THAT I CREATED THAT DYNAMICALLY UPDATES THE STATIC VALUES ON HTML PAGE
// get refference to total call one and sms total one
let totalCallOne = document.querySelector('.callTotalOne')
let totalSmsOne = document.querySelector('.smsTotalOne')
let ErrorInputMessage = 'error input!'
totalCallOne.innerHTML = textBill.getCallTotal().toFixed(2)
totalSmsOne.innerHTML = textBill.getSmsTotal().toFixed(2)
totalOne.innerHTML = textBill.totalBill().toFixed(2)

//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
const TextBill = () => {

    billTypeText.value == '' && billTypeText.setAttribute('placeholder', `${ErrorInputMessage} enter sms or call`)
    let sms = billTypeText.value, call = billTypeText.value

    sms.toLowerCase().trim() == 'sms' && textBill.sendSms()
    call.toLowerCase().trim() == "call" && textBill.makeCall()

    billTypeText.value !== 'sms' || billTypeText.value !== 'call' &&
        billTypeText.setAttribute('placeholder', `${ErrorInputMessage} enter sms or call`)
    textBill.totalBill()
    textBill.getTotal()
    totalSmsOne.innerHTML = textBill.getSmsTotal().toFixed(2)
    totalCallOne.innerHTML = textBill.getCallTotal().toFixed(2)
    totalOne.innerHTML = textBill.getTotal().toFixed(2)

    totalColor.classList.add(textBill.classTotal())

};
addToBillBtn.addEventListener('click', TextBill)
