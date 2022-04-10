// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelectorAll('.billItemTypeWithSettings')
// get refences to all the settings fields
const callTotalSettings = document.querySelector('.callTotalSettings'), smsTotalSettings = document.querySelector('.smsTotalSettings'), totalSettings = document.querySelector('.totalSettings')
//get a reference to the add button
const addBtn = document.querySelector('.addBtn')
// create a variables that will keep track of all three totals.
let call = callTotalSettings.innerHTML, sms = smsTotalSettings.innerHTML, totalTwo = totalSettings.innerHTML
// create a variables that will keep track of all the settings
let smsTotalCost = 7.35, callTotalCost = 34.00, allTotalCost = 41.35
// create a variables that will toggle the settings
const header = document.querySelector('.header'), callTitle = document.querySelector('.callTitle'), smsTitle = document.querySelector('.smsTitle')
// create a variables that will keep track of all the settings
const callCostSetting = document.querySelector('.callCostSetting'), smsCostSetting = document.querySelector('.smsCostSetting')
// create a variables that will keep track of the errors
const errorMessage = "error! enter amount"
//add an event listener for when the call radio is pressed
billItemTypeWithSettings[0].addEventListener('click', () => {
    // toggle call settings
    header.classList.remove('hide')
    callCostSetting.classList.remove('hide')
    callTitle.classList.remove('hide')
    smsCostSetting.classList.add('hide')
    smsTitle.classList.add('hide')
});
//add an event listener for when the sms radio is pressed
billItemTypeWithSettings[1].addEventListener('click', () => {
    // toggle sms settings
    header.classList.remove('hide')
    smsCostSetting.classList.remove('hide')
    smsTitle.classList.remove('hide')
    callCostSetting.classList.add('hide')
    callTitle.classList.add('hide')
    console.log(smsCostSetting.value)
});
//add an event listener for when the add button is pressed
addBtn.addEventListener('click', () => {
    let smsCost = smsCostSetting.value ? smsCostSetting.value : 0
    let callCost = callCostSetting.value ? callCostSetting.value : 0
    if (billItemTypeWithSettings[1].checked) {
        smsCostSetting.value == '' && smsCostSetting.setAttribute('placeholder', errorMessage)
        if (typeof smsCostSetting.value !== 'number') {
            smsTotalCost = parseFloat(sms) + parseFloat(smsCost)
            callTotalCost = parseFloat(call)
            // * add the appropriate value to the overall total
            allTotalCost = parseFloat(call) + smsTotalCost
        } else {
            console.log('its not a number')
        }
    }
    if (billItemTypeWithSettings[0].checked) {
        callCostSetting.value == '' && callCostSetting.setAttribute('placeholder', errorMessage)
        if (typeof callCostSetting.value !== 'number') {
            smsTotalCost = parseFloat(sms)
            callTotalCost = parseFloat(call) + parseFloat(callCost)
            // * add the appropriate value to the overall total
            allTotalCost = parseFloat(sms) + callTotalCost
        } else {
            console.log('its a number')
        }

    }
    // * display the latest total on the screen.
    smsTotalSettings.innerHTML = smsTotalCost.toFixed(2)
    callTotalSettings.innerHTML = callTotalCost.toFixed(2)
    totalSettings.innerHTML = allTotalCost.toFixed(2)
})





//get a reference to the 'Update settings' button




//add an event listener for when the 'Update settings' button is pressed


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * check the value thresholds and display the total value in the right color.
