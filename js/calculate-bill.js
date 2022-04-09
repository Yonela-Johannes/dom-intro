//get a reference to the calculate button
const calculateBtn = document.querySelector('.calculateBtn')
//get a reference to the billTotal element
let billString = document.querySelector('.billString')
//get a reference to the billString
let billTotal = document.querySelector('.billTotal')
let total = document.querySelector('.total')


//create the function that will be called when the calculate button is pressed
calculateBtn.addEventListener('click', () => {//link the function to a click event on the calculate button

    const bill = billString.value
    billString.setAttribute('placeholder', 'invalid input! Please enter call or sms separated by commas(,)')
    // storing all variables
    let totalCall = 0, totalSms = 0, totalAmount = 0.00, callCount = 0, smsCount = 0
    //* this function should read the string value entered - split it on a comma.
    let billArray = bill.split(',')
    if (typeof billString.value == 'string') {
        //* loop over all the entries in the the resulting list
        for (let i = 0; i < billArray.length; i++) {
            //* check if it is a call or an sms and add the right amount to the overall total
            billArray[i].trim() == 'call' && callCount++
            billArray[i].trim() == 'sms' && smsCount++
        }
        totalCall = (callCount * 2.75)
        totalSms = (smsCount * 0.75)
        totalAmount = (totalCall + totalSms)
        if (totalAmount > 20 && totalAmount < 30) {
            billTotal.classList.add('warning')
            calculateBtn.classList.add('warning')
            calculateBtn.classList.remove('button-primary')
            calculateBtn.style.borderColor = 'orange'
            calculateBtn.style.color = 'orange'
            total.style.color = 'orange'
            billString.style.color = 'orange'
            billString.style.borderColor = 'orange'
            billTotal.classList.remove('danger')
            calculateBtn.classList.remove('danger')
        } else if (totalAmount > 30) {
            billTotal.classList.remove('warning')
            calculateBtn.classList.remove('warning')
            billTotal.classList.add('danger')
            calculateBtn.classList.add('danger')
            calculateBtn.classList.remove('button-primary')
            calculateBtn.classList.remove('warning')
            calculateBtn.style.borderColor = 'red'
            calculateBtn.style.color = 'red'
            total.style.color = 'red'
            billString.style.color = 'red'
            billString.style.borderColor = 'red'
        }
    }
    //* once done looping over all the entries - display the total onto the screen in the billTotal element
    billTotal.innerHTML = totalAmount.toFixed(2)
})

