function generateOTP(){
    let otp = "";
    for(let i = 0; i < length; i++){
        otp += Math.floor(Math.random() * 10).toString();
    }
    return otp;
}
console.log(generateOTP(4));