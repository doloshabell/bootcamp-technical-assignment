function validateLoginData(email, password){
    const validateEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/g; //check for @, domain
    const validatePassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/; //min 8 letter password, with at least a symbol, upper and lower case letters and a number
    
    const dataEmail = validateEmail.test(email);
    const dataPassword = validatePassword.test(password);

    if(dataEmail!= true){
        return "tolong masukan email yang valid";
    }
    else if (dataEmail == true && dataPassword!=true){
        return "tolong masukan password sesuai ketentuan";
    }
    else {
        return "Welcome to The Jungle";
    }
}

export default validateLoginData;