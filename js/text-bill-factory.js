const TextBillFactory = () => {
    const criticalLevel = 50, warningLevel = 30
    let callTotal = 0, smsTotal = 0, billTotal = 0
    // return data
    const callCost = () => 2.75
    const smsCost = () => .75

    const getCallTotal = () => callTotal
    const getSmsTotal = () => smsTotal
    const makeCall = () => getTotal() <= getCriticalLevel() ? callTotal += callCost() : callTotal
    const sendSms = () => getTotal <= criticalLevel() ? smsTotal += smsCost() : smsTotal
    const totalBill = () => billTotal = callTotal + smsTotal
    const getTotal = () => billTotal

    const getWarningLevel = () => warningLevel
    const getCriticalLevel = () => criticalLevel

    const classTotal = () => {
        if (getTotal() >= getCriticalLevel()) return "danger"
        if (getTotal() >= getWarningLevel()) return "warning"
    }
    return {
        callCost,
        smsCost,
        totalBill,
        sendSms,
        makeCall,
        getTotal,
        getCallTotal,
        getSmsTotal,
        classTotal,
    }
}


// const radioBillFactory = () => {
//     let callCost = 2.75
//     let callTotal = 0
//     let smsCost = 0.75
//     let smsTotal = 0
//     let warningLevel = 30
//     let criticalLevel = 50

//     const makeCall = () => callTotal += callCost
//     const sendSms = () => smsTotal += smsCost
//     const getTotal = () => callTotal + smsTotal
//     const getCallTotal = () => callTotal
//     const getSmsTotal = () => smsTotal
//     const getWarningLevel = () => warningLevel
//     const getCriticalLevel = () => criticalLevel

//     return {
//         makeCall,
//         sendSms,
//         getCallTotal,
//         getSmsTotal,
//         getTotal
//     }
// }

export default TextBillFactory