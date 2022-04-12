// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelectorAll('.billItemTypeWithSettings')
// get refences to all the settings fields
const callTotalSettings = document.querySelector('.callTotalSettings'), smsTotalSettings = document.querySelector('.smsTotalSettings'), totalSettings = document.querySelector('.totalSettings')
//get a reference to the 'Update settings' button
const updateSettings = document.querySelector('.updateSettings')
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
    const criticalLevelAmount = criticalLevel.value
    const warningLevelAmount = warningLevel.value
    call = callCostSetting.value
    sms = smsCostSetting.value
    //in the event listener get the value from the billItemTypeRadio radio buttons


    if (allTotalCost >= criticalLevelAmount) {
        callTotalCost = parseFloat(callTotalCost)
        smsTotalCost = parseFloat(smsTotalCost)
        allTotalCost = allTotalCost
    } else {
        if (billItemTypeWithSettings[1].checked) {
            smsCostSetting.value == '' && smsCostSetting.setAttribute('placeholder', errorMessage)
            if (typeof smsCostSetting.value !== 'number') {

                smsTotalCost = parseFloat(sms) + parseFloat(smsTotalCost)
                callTotalCost = callTotalCost
                allTotalCost = callTotalCost + smsTotalCost
            }
        }
        if (billItemTypeWithSettings[0].checked) {
            callCostSetting.value == '' && callCostSetting.setAttribute('placeholder', errorMessage)
            if (typeof callCostSetting.value !== 'number') {

                smsTotalCost = smsTotalCost
                callTotalCost = parseFloat(call) + parseFloat(callTotalCost)
                allTotalCost = smsTotalCost + callTotalCost
            }
        }
        if (allTotalCost < warningLevelAmount) {
            totalSettings.classList.remove('warning')
            totalSettings.classList.remove('danger')

        }
        if (allTotalCost >= warningLevelAmount) {
            totalSettings.classList.add('warning')
            totalSettings.classList.remove('danger')

        }

        if (allTotalCost >= criticalLevelAmount) {
            totalSettings.classList.remove('warning')
            totalSettings.classList.add('danger')
        }

    }
    allTotalCost = smsTotalCost + callTotalCost
    smsTotalSettings.innerHTML = parseFloat(smsTotalCost).toFixed(2)
    callTotalSettings.innerHTML = parseFloat(callTotalCost).toFixed(2)
    totalSettings.innerHTML = allTotalCost.toFixed(2)

});


updateSettings.addEventListener('click', () => {
    const criticalLevelAmount = criticalLevel.value
    const warningLevelAmount = warningLevel.value

    if (allTotalCost < warningLevelAmount) {
        totalSettings.classList.remove('warning')
        totalSettings.classList.remove('danger')

    }
    if (allTotalCost >= warningLevelAmount) {
        totalSettings.classList.add('warning')
        totalSettings.classList.remove('danger')

    }

    if (allTotalCost >= criticalLevelAmount) {
        totalSettings.classList.remove('warning')
        totalSettings.classList.add('danger')

    }
})



//add an event listener for when the 'Update settings' button is pressed


