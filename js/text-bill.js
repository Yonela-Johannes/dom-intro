import { TextBillFactory } from "./text-bill-factory.js"
const textBill = TextBillFactory()
const billTypeText = document.querySelector('.billTypeText')
const addToBillBtn = document.querySelector('.addToBillBtn')
const totalColor = document.querySelector('.totalColor')
const totalOne = document.querySelector('.totalOne')
let totalCallOne = document.querySelector('.callTotalOne')
let totalSmsOne = document.querySelector('.smsTotalOne')
let ErrorInputMessage = 'error input!'
totalCallOne.innerHTML = textBill.getCallTotal().toFixed(2)
totalSmsOne.innerHTML = textBill.getSmsTotal().toFixed(2)
totalOne.innerHTML = textBill.totalBill().toFixed(2)
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
