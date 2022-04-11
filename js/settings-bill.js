// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelectorAll('.billItemTypeWithSettings')
// get refences to all the settings fields
const callTotalSettings = document.querySelector('.callTotalSettings'), smsTotalSettings = document.querySelector('.smsTotalSettings'), totalSettings = document.querySelector('.totalSettings')
//get a reference to the 'Update settings' button
const updateSettings = document.querySelector('.updateSettings')
//get a reference to the levels input
const warningLevel = document.querySelector('.warningLevelSetting'), criticalLevel = document.querySelector('.criticalLevelSetting')
//get a reference to the add button
const addBtn = document.querySelector('.addBtn')
// create a variables that will keep track of all three totals.
let call = 0, sms = 0, totalTwo = 0// create a variables that will keep track of all the settings
let smsTotalCost = 0, callTotalCost = 0.00, allTotalCost = 0
// create a variables that will toggle the settings
const header = document.querySelector('.header'), callTitle = document.querySelector('.callTitle'), smsTitle = document.querySelector('.smsTitle')
// create a variables that will keep track of all the settings
const callCostSetting = document.querySelector('.callCostSetting'), smsCostSetting = document.querySelector('.smsCostSetting')
// create a variables that will keep track of the errors
const errorMessage = "error! enter amount"
const errorMessageTwo = "error! enter level"
//add an event listener for when the call radio is pressed

// * display the total on the screen.
smsTotalSettings.innerHTML = smsTotalCost.toFixed(2)
callTotalSettings.innerHTML = callTotalCost.toFixed(2)
totalSettings.innerHTML = allTotalCost.toFixed(2)


//add an event listener for when the add button is pressed
addBtn.addEventListener('click', () => {
    //in the event listener get the value from the billItemTypeRadio radio buttons
    let smsCost = smsCostSetting.value ? smsCostSetting.value : 0
    console.log("sms cost", smsCost)
    let callCost = callCostSetting.value ? callCostSetting.value : 0
    if (billItemTypeWithSettings[1].checked) {
        smsCostSetting.value == '' && smsCostSetting.setAttribute('placeholder', errorMessage)
        // * add nothing for invalid values that is not 'call' or 'sms'.
        // *It will return nothing
        if (typeof smsCostSetting.value !== 'number') {
            smsTotalCost += parseFloat(sms) + parseFloat(smsCost)// * add the appropriate value to the call / sms total
            callTotalCost += parseFloat(call)// * add the appropriate value to the call / sms total
            // * add the appropriate value to the overall total
            allTotalCost = parseFloat(call) + smsTotalCost
        } else {
            alert(1337);
        }
    }
    if (billItemTypeWithSettings[0].checked) {
        callCostSetting.value == '' && callCostSetting.setAttribute('placeholder', errorMessage)
        // * add nothing for invalid values that is not 'call' or 'sms'.
        // *It will return nothing
        if (typeof callCostSetting.value !== 'number') {
            smsTotalCost += parseFloat(sms)// * add the appropriate value to the call / sms total
            callTotalCost += parseFloat(call) + parseFloat(callCost)// * add the appropriate value to the call / sms total
            // * add the appropriate value to the overall total
            allTotalCost = parseFloat(sms) + callTotalCost
        }
    }
    // * display the latest total on the screen.
    allTotalCost = smsTotalCost + callTotalCost
    smsTotalSettings.innerHTML = smsTotalCost.toFixed(2)
    callTotalSettings.innerHTML = callTotalCost.toFixed(2)
    totalSettings.innerHTML = allTotalCost.toFixed(2)
});


//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click', () => {
    const criticalLevelAmount = criticalLevel.value
    const warningLevelAmount = warningLevel.value
    if (warningLevel.value !== '') {
        if (warningLevelAmount < criticalLevelAmount) {
            if (allTotalCost > warningLevelAmount && warningLevelAmount < criticalLevelAmount) {
                totalSettings.classList.add('warning')// * check the value thresholds and display the total value in the right color.
            }
            if (criticalLevelAmount > warningLevelAmount && criticalLevelAmount < allTotalCost) {
                totalSettings.classList.remove('warning')// * check the value thresholds and display the total value in the right color.
                totalSettings.classList.add('danger')// * check the value thresholds and display the total value in the right color.
            } else {
                totalSettings.classList.remove('danger')// * check the value thresholds and display the total value in the right color.
                totalSettings.classList.add('warning')// * check the value thresholds and display the total value in the right color.
            }
        } else {
            return alert("Warning level should not be greater than Critical level. Critical level should not be empty!")
        }

    }
    else {
        warningLevel.setAttribute('placeholder', errorMessageTwo)
        criticalLevel.setAttribute('placeholder', errorMessageTwo)
    }
})


