import { RadioBillFactory } from "./text-bill-factory.js"
const radioBillFactory = RadioBillFactory()
const billItemTypeRadio = document.querySelectorAll('.billItemTypeRadio')
const billColor = document.querySelector('.totalTwoColor')
let displayCallTotalTwo = document.querySelector('.callTotalTwo'), displaySmsTotalTwo = document.querySelector('.smsTotalTwo')
const radioBillAddBtn = document.querySelector('.radioBillAddBtn')
let totalAmount = 0, totalCallTwo = 0, currentCall = 2.75, totalSmsTwo = 0, currentSms = 0.75
let displayTotalTwo = document.querySelector('.totalTwo')
displayCallTotalTwo.innerHTML = radioBillFactory.getCallTotal().toFixed(2)
displaySmsTotalTwo.innerHTML = radioBillFactory.getSmsTotal().toFixed(2)
displayTotalTwo.innerHTML = radioBillFactory.getTotal().toFixed(2)
radioBillAddBtn.addEventListener('click', () => {
    for (let i = 0; i < billItemTypeRadio.length; i++) {
        billItemTypeRadio[i].value == 'call' & billItemTypeRadio[i].checked && radioBillFactory.makeCall()
        billItemTypeRadio[i].value == 'sms' & billItemTypeRadio[i].checked && radioBillFactory.sendSms()
    }
    radioBillFactory.setTotal()
    displayCallTotalTwo.innerHTML = radioBillFactory.getCallTotal().toFixed(2)
    displaySmsTotalTwo.innerHTML = radioBillFactory.getSmsTotal().toFixed(2)
    displayTotalTwo.innerHTML = radioBillFactory.getTotal().toFixed(2)

    billColor.classList.add(radioBillFactory.classes())
})