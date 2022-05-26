const TextBillFactory = () => {
    const criticalLevel = 50, warningLevel = 30
    let callTotal = 0, smsTotal = 0, billTotal = 0
    const callCost = () => 2.75
    const smsCost = () => .75
    const getCallTotal = () => callTotal
    const getSmsTotal = () => smsTotal
    const makeCall = () => callTotal += callCost()
    const sendSms = () => smsTotal += smsCost()
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

const RadioBillFactory = () => {
    let callCost = 2.75, smsCost = .75
    let callTotal = 0, smsTotal = 0, total = 0
    let warningLevel = 30, criticalLevel = 50
    const makeCall = () => callTotal += callCost
    const sendSms = () => smsTotal += smsCost
    const setTotal = () => total = callTotal + smsTotal
    const getCallTotal = () => callTotal
    const getSmsTotal = () => smsTotal
    const getTotal = () => total
    const getWarningLevel = () => warningLevel
    const getCriticalLevel = () => criticalLevel
    const classes = () => {
        if (getTotal() >= getCriticalLevel()) return 'danger'
        if (getTotal() >= getWarningLevel()) return 'warning'
    }
    return {
        makeCall,
        sendSms,
        getCallTotal,
        getSmsTotal,
        setTotal,
        getTotal,
        classes
    }
}

export { TextBillFactory, RadioBillFactory }