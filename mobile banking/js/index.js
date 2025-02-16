let myPassword = "Password01"

let totalBalance = document.getElementById("totalBalance")



let notificationCentre = document.getElementById("notificationCentre")
let transactionDelete = document.getElementById("transactionDelete")

// cash in start

let cashInButton = document.getElementById("cashInButton")

cashInButton.addEventListener("click", function(){

    let cashInInput = document.getElementById("cashInInput")
    let convertCashInInput =  parseFloat(cashInInput.value)


    if(cashInInput.value == ""){
        document.getElementById("cashInError").innerText = "Please Enter An Amount"
        document.getElementById("cashInError").style.color = "red"
    }
    else if(cashInInput.value <= 0){
        document.getElementById("cashInError").innerText = "Please Enter Valid Amount"
        document.getElementById("cashInError").style.color = "red"
        
        cashInInput.value = ""
    }
    else{
        totalBalance.innerHTML = parseFloat(totalBalance.innerHTML) + convertCashInInput
        cashInInput.value = ""
        document.getElementById("cashInError").innerText = ""

        let p = document.createElement("p")
        p.innerText = ` Your $${convertCashInInput} cash in success full `
        notificationCentre.appendChild(p)

        let deleteElement = document.createElement("i")
        deleteElement.classList.add("fa-solid", "fa-trash") //fa-solid fa-trash
        transactionDelete.appendChild(deleteElement)

        deleteElement.addEventListener("click", function(){

            notificationCentre.removeChild(p)
            transactionDelete.removeChild(deleteElement)

        })
        
        // let span = document.createComment(`${}`)
        // notificationCentre.appendChild(span)

    }
    
})

// cash in end
// send money start


let sendMoneyButton = document.getElementById("sendMoneyButton")


sendMoneyButton.addEventListener("click", function(){

    let sendMoneyInput = document.getElementById("sendMoneyInput")
    let sendMoneyInputConvert = parseFloat(sendMoneyInput.value)

    if (sendMoneyInput.value === ""){        
        document.getElementById("sendMoneyError").innerText = "Please Enter An Amount"
        document.getElementById("sendMoneyError").style.color = "red"
    }
    else if(sendMoneyInput.value <= 0){
        document.getElementById("sendMoneyError").innerText = "Please Enter Valid Amount"
        sendMoneyInput.value = "";
        document.getElementById("sendMoneyError").style.color = "red"
    }
    else if(parseInt(totalBalance.innerHTML) < parseInt(sendMoneyInput.value) ){
        document.getElementById("sendMoneyError").innerText = "Insufficient value"
        document.getElementById("sendMoneyError").style.color = "red"
        sendMoneyInput.value = "";

    }
    
    else{
        totalBalance.innerHTML = parseFloat(totalBalance.innerHTML) - parseFloat(sendMoneyInput.value)
        document.getElementById("sendMoneyError").innerText = ""
        sendMoneyInput.value = "";
        
        
        let p = document.createElement("p")
        p.innerText = `$${sendMoneyInputConvert} send money success full`
        notificationCentre.appendChild(p)

        let deleteElement = document.createElement("i")
        deleteElement.classList.add("fa-solid", "fa-trash")    //fa-solid fa-trash
        transactionDelete.appendChild(deleteElement)

        deleteElement.addEventListener("click", function(){

            notificationCentre.removeChild(p)
            transactionDelete.removeChild(deleteElement)            //remove delete button

        })

    }

})

// send money end


// mobile recharge start

let rechargeButton = document.getElementById("rechargeButton")

rechargeButton.addEventListener("click", function(){

    document.getElementById("mobileRechargeDiv").style.transform = "scale(1)"

    document.getElementById("myBalance").style.top = "0"
    document.getElementById("myBalance").innerHTML = `My Balance: $${totalBalance.innerHTML}`

})

document.getElementById("mobileRechargeDivClose").addEventListener("click", function(){

    document.getElementById("mobileRechargeDiv").style.transform = "scale(0)"
    document.getElementById("myBalance").style.top = "-50%"


})

            // Started !!!


let mobileNumber = document.getElementById("mobileNumber")



document.getElementById("GrameenPhone").addEventListener("click", function(){
    
    document.getElementById("rechargeMenuShow").style.transform = "scaleX(0)"

    let grameenPhoneRegex = /^(017|013)\d{8}$/
    

    if(mobileNumber.value == ""){

        document.getElementById("mobileNumberError").innerHTML = "Please Enter Your Mobile Number"
        document.getElementById("mobileNumberError").style.color= "red"
    }
    else if(grameenPhoneRegex.test(mobileNumber.value) == false){
        document.getElementById("mobileNumberError").innerHTML = "Invalid GrameenPhone Number"
        document.getElementById("mobileNumberError").style.color= "red"  
    }
    else{
        document.getElementById("mobileNumberError").innerHTML = ""
        document.getElementById("rechargeMenuShow").style.transform = "scaleX(1)"
    }
    
})

let rechargeAmount = document.getElementById("rechargeAmount")


document.getElementById("rechargeAmountButton").addEventListener("click", function(){

    if(rechargeAmount.value == ''){

        document.getElementById("rechargeAmountError").innerHTML = "Please Enter An Amount"
        document.getElementById("rechargeAmountError").style.color = "red"
        
    }
    else if(rechargeAmount.value <= 0 ){
        document.getElementById("rechargeAmountError").innerHTML = "Please Enter An Valid Amount"

    }
    else if(Number(rechargeAmount.value) >= Number(totalBalance.innerText) ){
        document.getElementById("rechargeAmountError").innerHTML = "Insufficient Amount"
        document.getElementById("rechargeAmountError").style.color = "red"
        
    }
    else{
        document.getElementById("rechargeAmountError").innerHTML = ""
            document.getElementById("passValidShow").style.transform = "scaleY(1)"

    }
    

})


document.getElementById("passValidClose").addEventListener("click", function(){

    document.getElementById("passValidShow").style.transform = "scaleY(0)"
    document.getElementById("passwordIncorrect").style.transform = "scale(0)"        

})


let rechargeConfirm = document.getElementById("rechargeConfirm")

rechargeConfirm.addEventListener("click", function(){

    let accountPassword = document.getElementById("accountPassword")

    if(accountPassword.value == ""){

        document.getElementById("passwordIncorrect").innerHTML = "please enter your password"
        document.getElementById("passwordIncorrect").style.transform = "scale(1)"        
        document.getElementById("passwordIncorrect").style.transition = ".3s"
    }
    else if(accountPassword.value !== myPassword){
        document.getElementById("passwordIncorrect").innerHTML = "Password Incorrect"
        document.getElementById("passwordIncorrect").style.transform = "scale(1)"
        document.getElementById("passwordIncorrect").style.color = "violet"
    }
    else{
        totalBalance.innerHTML = Number(totalBalance.innerHTML) - Number(rechargeAmount.value)

        let p = document.createElement("p")
        p.innerText = `Mobile Recharge $${Number(rechargeAmount.value)} Successfull.`
        notificationCentre.appendChild(p)

        let deleteElement = document.createElement("i")
        deleteElement.classList.add("fa-solid", "fa-trash") //fa-solid fa-trash
        transactionDelete.appendChild(deleteElement)

        deleteElement.addEventListener("click", function(){

            notificationCentre.removeChild(p)
            transactionDelete.removeChild(deleteElement)

        })

        document.getElementById("myBalance").style.top = "-50%"

        document.getElementById("passValidShow").style.transform = "scaleY(0)"
        document.getElementById("mobileRechargeDiv").style.transform = "scale(0)"
        
    }
})

        // Banglalink start


document.getElementById("banglaLink").addEventListener("click", function(){
    document.getElementById("rechargeMenuShow").style.transform = "scaleX(0)"


    let banglaLinkRegex = /^(019|014)\d{8}$/

    if(mobileNumber.value == ""){
        document.getElementById("mobileNumberError").innerHTML = "Please Enter Your Mobile Number"
        document.getElementById("mobileNumberError").style.color= "red"
    }
    else if(banglaLinkRegex.test(mobileNumber.value) == false){
        document.getElementById("mobileNumberError").innerHTML = "Invalid Banglalink Number"
        document.getElementById("mobileNumberError").style.color= "red"  
    }
    else{
        document.getElementById("mobileNumberError").innerHTML = ""
        document.getElementById("rechargeMenuShow").style.transform = "scaleX(1)"
    }
})


        // teletalk start

document.getElementById("teleTalk").addEventListener("click", function(){

    document.getElementById("rechargeMenuShow").style.transform = "scaleX(0)"

    let teleTalkRegex = /^(015)\d{8}$/

    if(mobileNumber.value == ""){
        document.getElementById("mobileNumberError").innerHTML = "Please Enter Your Mobile Number"
        document.getElementById("mobileNumberError").style.color= "red"
    }
    else if(teleTalkRegex.test(mobileNumber.value) == false){
        document.getElementById("mobileNumberError").innerHTML = "Invalid Teletalk Number"
        document.getElementById("mobileNumberError").style.color= "red"  
    }
    else{
        document.getElementById("mobileNumberError").innerHTML = ""
        document.getElementById("rechargeMenuShow").style.transform = "scaleX(1)"
    }
})

        // Robi start 

document.getElementById("roBi").addEventListener("click", function(){

    document.getElementById("rechargeMenuShow").style.transform = "scaleX(0)"

    let robiAndAirtelRegex = /^(016|018)\d{8}$/

    if(mobileNumber.value == ""){
        document.getElementById("mobileNumberError").innerHTML = "Please Enter Your Mobile Number"
        document.getElementById("mobileNumberError").style.color= "red"
    }
    else if(robiAndAirtelRegex.test(mobileNumber.value) == false){
        document.getElementById("mobileNumberError").innerHTML = "Invalid Robi Or Airtel Number"
        document.getElementById("mobileNumberError").style.color= "red"  
    }
    else{
        document.getElementById("mobileNumberError").innerHTML = ""
        document.getElementById("rechargeMenuShow").style.transform = "scaleX(1)"
    }

})


// mobile recharge end

