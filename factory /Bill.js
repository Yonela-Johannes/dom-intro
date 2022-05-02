
export function BillSettings() {
    // initialising amounts
    let theCallCost = 0
    let theSmsCost = 0
    let theWarningLevel = 0
    let theCriticalLevel = 0
    let theClassName = 'Okay'
    // total amounts
    let theSmsTotalCost = 0
    let theCallTotalCost = 0
    let totalAmount = 0


    // Setting the call & sms cost
    const setCallCost = callCost => callCost < 0 ? theCallCost = parseFloat(0) : theCallCost = parseFloat(callCost)
    const setSmsCost = smsCost => theSmsCost = smsCost < 0 ? smsCost = parseFloat(0) : smsCost = parseFloat(smsCost)
    // factorising the functions and pass it in ass a parameter
    const getCallCost = () => theCallCost
    const getSmsCost = () => theSmsCost

    // Setting the levels
    const setWarningLevel = setWarning => theWarningLevel = setWarning
    const setCriticalLevel = setCritical => theCriticalLevel = setCritical
    // getting the levels
    const getWarningLevel = () => theWarningLevel
    const getCriticalLevel = () => theCriticalLevel

    // get sms total cost

    const makeCall = () => !!hasReachedCriticalLevel ? (theCallTotalCost += getCallCost()) : (theCallTotalCost)

    const getCallTotalCost = () => theCallTotalCost

    const sendSms = () => !!hasReachedCriticalLevel ? (theSmsTotalCost += getSmsCost()) : (theSmsTotalCost)
    const getSmsTotalCost = () => theSmsTotalCost

    // get sms total cost

    // get total amount and if total amount is greater than critical level do not add
    const allTotalAmounts = () => totalAmount = getCallTotalCost() + getSmsTotalCost()
    const getAllTotalAmount = () => totalAmount

    const hasReachedWarningLevel = () => getAllTotalAmount() <= getWarningLevel() && ('warning')
    const hasReachedCriticalLevel = () => getAllTotalAmount() >= getCriticalLevel()
    // set warning levels
    const totalClassName = () => hasReachedCriticalLevel() ? theClassName = ('warning') : hasReachedWarningLevel ? theClassName = ('danger') : theClassName
    const getTotalClassName = () => theClassName

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
        // retrieving the total amount functions
        getCallTotalCost,
        getSmsTotalCost,
        allTotalAmounts,
        getAllTotalAmount,

        hasReachedWarningLevel,
        hasReachedCriticalLevel,
        // retrieving warning level limit
        totalClassName,
        getTotalClassName,
    }
}