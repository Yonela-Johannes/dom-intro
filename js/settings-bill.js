import { BillSettings } from "../factory /Bill.js"
let bill = BillSettings()
const billItemTypeWithSettings = document.querySelectorAll('.billItemTypeWithSettings')
const callTotalSettings = document.querySelector('.callTotalSettings'), smsTotalSettings = document.querySelector('.smsTotalSettings'), totalSettings = document.querySelector('.totalSettings')
const updateSettings = document.querySelector('.updateSettings')
const warningLevel = document.querySelector('.warningLevelSetting'), criticalLevel = document.querySelector('.criticalLevelSetting')
const addBtn = document.querySelector('.addBtn')
let smsTotalCost = 0, callTotalCost = 0.00, allTotalCost = 0
let callCostSetting = document.querySelector('.callCostSetting'), smsCostSetting = document.querySelector('.smsCostSetting')
smsTotalSettings.innerHTML = smsTotalCost.toFixed(2)
callTotalSettings.innerHTML = callTotalCost.toFixed(2)
totalSettings.innerHTML = allTotalCost.toFixed(2)

addBtn.addEventListener('click', () => {
    let call = callCostSetting.value, sms = smsCostSetting.value
    let critical = criticalLevel.value, warning = warningLevel.value
    bill.setWarningLevel(warning)
    bill.setCriticalLevel(critical)
    bill.setCallCost(call)
    bill.setSmsCost(sms)
    billItemTypeWithSettings[0].checked && bill.makeCall()
    billItemTypeWithSettings[1].checked && bill.sendSms()
    callTotalSettings.innerHTML = bill.getCallTotalCost().toFixed(2)
    smsTotalSettings.innerHTML = bill.getSmsTotalCost().toFixed(2)
    totalSettings.innerHTML = bill.getAllTotalAmount().toFixed(2)
    totalSettings.classList.add(bill.hasReachedWarningLevel() && 'warning')
    totalSettings.classList.remove(bill.hasReachedWarningLevel() && 'danger')
    totalSettings.classList.add(bill.hasReachedCriticalLevel() && 'danger')
    totalSettings.classList.remove(bill.hasReachedCriticalLevel() && 'warning')
});

updateSettings.addEventListener('click', () => {
    bill.setWarningLevel(warningLevel.value)
    bill.setCriticalLevel(criticalLevel.value)
});