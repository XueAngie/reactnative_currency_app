
const validation = (value, rules, form) => {
    let valid = true

    for(let rule in rules) {
        switch (rule) {
            case "isRequired":
                valid = valid && validateRequired(value)
                break;
            case "isEmail":
                valid = valid && validateEmail(value)
                break;
            case "confirmPass":
                valid = valid && validateConfirmPass(value, form[rules.confirmPass].value)
                // console.log(form[rule.confirmPass]);
                break;
            default:
                valid = true
        }
    }
    return valid;
}

const validateRequired = value => {
    if (value !== '') {
        return true
    }
    return false
}

const validateEmail = email => {
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(email).toLocaleLowerCase());
}

const validateConfirmPass = (confirmPass, pass) => {
    return confirmPass === pass
}

export default validation