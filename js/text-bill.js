import { TextBillFactory } from "./text-bill-factory.js";
const textBill = TextBillFactory()
const billTypeText = document.querySelector('.billTypeText')
const addToBillBtn = document.querySelector('.addToBillBtn')

let ErrorInputMessage = 'error input!'
const textBillTemplate = () => {
    const templateSource = document.querySelector(".textBillTemplate").innerHTML;
    let dataTemplate = Handlebars.compile(templateSource)
    const dataElem = document.querySelector('.data')
    const dataScreenDisplay = dataTemplate({
        callCost: textBill.getCallTotal().toFixed(2),
        smsCost: textBill.getSmsTotal().toFixed(2),
        totalCost: textBill.getTotal().toFixed(2)
    });

    dataElem.innerHTML = dataScreenDisplay
}
textBillTemplate()
const updateColor = () => {
    const totalOne = document.querySelector('.totalOne')
    totalOne.classList.remove("warning");
    totalOne.classList.remove("danger");
    totalOne.classList.add(textBill.classTotal())
}
const TextBill = () => {
    billTypeText.value == '' && billTypeText.setAttribute('placeholder', `${ErrorInputMessage} enter sms or call`)
    let sms = billTypeText.value, call = billTypeText.value
    sms.toLowerCase().trim() == 'sms' && textBill.sendSms()
    call.toLowerCase().trim() == "call" && textBill.makeCall()
    billTypeText.value !== 'sms' || billTypeText.value !== 'call' &&
        billTypeText.setAttribute('placeholder', `${ErrorInputMessage} enter sms or call`)
    textBill.totalBill()
    textBillTemplate()
    updateColor()
};
addToBillBtn.addEventListener('click', TextBill)
