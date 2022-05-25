import { RadioBillFactory } from "./text-bill-factory.js"
const radioBillFactory = RadioBillFactory()
const billItemTypeRadio = document.querySelectorAll('.billItemTypeRadio')
const radioBillAddBtn = document.querySelector('.radioBillAddBtn')
const radioBillTemplate = () => {
    const templateSourceTwo = document.querySelector(".radioTemplate").innerHTML
    const radioTemplate = Handlebars.compile(templateSourceTwo)
    const displayElem = document.querySelector(".radioData")
    const displayRadioData = radioTemplate({
        callCost: radioBillFactory.getCallTotal().toFixed(2),
        smsCost: radioBillFactory.getSmsTotal().toFixed(2),
        radioTotalCost: radioBillFactory.getTotal().toFixed(2)
    })
    displayElem.innerHTML = displayRadioData
}
radioBillTemplate()
const radioDisplayColor = () => {
    const totalTwo = document.querySelector(".totalTwo");
    totalTwo.classList.remove("warning");
    totalTwo.classList.remove("danger");
    totalTwo.classList.add(radioBillFactory.classes())
}
radioBillAddBtn.addEventListener('click', () => {
    for (let i = 0; i < billItemTypeRadio.length; i++) {
        billItemTypeRadio[i].value == 'call' & billItemTypeRadio[i].checked && radioBillFactory.makeCall()
        billItemTypeRadio[i].value == 'sms' & billItemTypeRadio[i].checked && radioBillFactory.sendSms()
    }
    radioBillFactory.setTotal()
    radioBillTemplate()
    radioDisplayColor()
})