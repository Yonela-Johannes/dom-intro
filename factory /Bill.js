
export function BillSettings() {
    // initialising amounts
    let amount = 0
    let theCallCost = amount, theSmsCost = amount, theWarningLevel = amount, theCriticalLevel = amount
    let theSmsTotalCost = amount, theCallTotalCost = amount, totalAmount = amount

    const setCallCost = callCost => callCost < amount ? theCallCost = parseFloat(amount) : theCallCost = parseFloat(callCost)
    const setSmsCost = smsCost => theSmsCost = smsCost < amount ? smsCost = parseFloat(amount) : smsCost = parseFloat(smsCost)
    const getCallCost = () => theCallCost
    const getSmsCost = () => theSmsCost
    const setWarningLevel = setWarning => theWarningLevel = setWarning
    const setCriticalLevel = setCritical => theCriticalLevel = setCritical
    // getting the levels
    const getWarningLevel = () => theWarningLevel
    const getCriticalLevel = () => theCriticalLevel
    // get sms total cost
    const makeCall = () => !hasReachedCriticalLevel() ? (theCallTotalCost += getCallCost(), allTotalAmounts()) : (theCallTotalCost)
    const getCallTotalCost = () => theCallTotalCost
    const sendSms = () => !hasReachedCriticalLevel() ? (theSmsTotalCost += getSmsCost(), allTotalAmounts()) : (theSmsTotalCost)
    const getSmsTotalCost = () => theSmsTotalCost
    // get total amount and if total amount is greater than critical level do not add
    const allTotalAmounts = () => totalAmount = getCallTotalCost() + getSmsTotalCost()
    const getAllTotalAmount = () => totalAmount

    const hasReachedWarningLevel = () => getAllTotalAmount() >= getWarningLevel()
    const hasReachedCriticalLevel = () => getAllTotalAmount() >= getCriticalLevel()

    const classes = () => {
        if (getAllTotalAmount() >= getCriticalLevel()) return "danger"
        if (getAllTotalAmount() >= getWarningLevel()) return "warning"
    }

    return {
        // retrieving the set functions
        setCallCost,
        setSmsCost,
        setWarningLevel,
        setCriticalLevel,
        // retrieving the get functions
        getCallCost,
        getSmsCost,
        getWarningLevel,
        getCriticalLevel,
        // sending amounts
        makeCall,
        sendSms,
        getCallTotalCost,
        getSmsTotalCost,
        allTotalAmounts,
        getAllTotalAmount,
        hasReachedWarningLevel,
        hasReachedCriticalLevel,
        classes,
    }
}