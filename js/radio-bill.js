// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelectorAll('.billItemTypeRadio')
//get a reference to the add button
const totalTwoColor = document.querySelector('.totalTwoColor')
//create a variable that will keep track of the total bill
let displayCallTotalTwo = document.querySelector('.callTotalTwo'), displaySmsTotalTwo = document.querySelector('.smsTotalTwo')
//add an event listener for when the add button is pressed
const radioBillAddBtn = document.querySelector('.radioBillAddBtn')
// * add the appropriate value to the running total
// storing data
let totalAmount = 37.50, totalCallTwo = 34.50, currentCall = 2.75, totalSmsTwo = 3.00, currentSms = 0.75

let displayTotalTwo = document.querySelector('.totalTwo')

radioBillAddBtn.addEventListener('click', () => {
    //in the event listener get the value from the billItemTypeRadio radio buttons
    // getting radio button values
    for (let i = 0; i < billItemTypeRadio.length; i++) {
        billItemTypeRadio[i].value == 'call' & billItemTypeRadio[i].checked ? totalCallTwo += currentCall : totalCallTwo
        billItemTypeRadio[i].value == 'sms' & billItemTypeRadio[i].checked ? totalSmsTwo += currentSms : totalSmsTwo
    }
    // * add nothing for invalid values that is not 'call' or 'sms'.
    totalCallTwo > 34.50 ? totalAmount += 2.75 : totalAmount
    totalSmsTwo > 3.00 ? totalAmount += 0.75 : totalAmount
    displayCallTotalTwo.innerHTML = totalCallTwo.toFixed(2)
    displaySmsTotalTwo.innerHTML = totalSmsTwo.toFixed(2)
    // * display the latest total on the screen
    displayTotalTwo.innerHTML = totalAmount.toFixed(2)


    totalAmount > 30 & totalCallTwo < 50 && totalTwoColor.classList.add('warning')
    totalAmount > 50 && totalTwoColor.classList.add('danger')
    //display sms on screen
    // console.log(callTotalTwo)


})