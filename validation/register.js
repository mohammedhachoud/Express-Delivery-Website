
const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions

    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    //Name checks 
    if (validator.isEmpty(data.firstName)) {
        errors.firstname = "First Name field is required !"
    }
    if (validator.isEmpty(data.lastName)) {
        errors.lastname = "Last Name field is required !"
    }

    //Email checks
    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required !"
    } else if (!validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }

    //Password checks
    if (validator.isEmpty(data.password)) {
        errors.password = "Password field is required !"
    }
    if (validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm Password field is required !"
    }
    if (!validator.isLength(data.password, { min: 8, max: 30 })) {
        errors.password = "Password must be at least 6 "
    }
    if (!validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};